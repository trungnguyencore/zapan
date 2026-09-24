import 'fake-indexeddb/auto'
import { readFileSync } from 'node:fs'
import { afterAll, afterEach, beforeAll, describe, expect, it } from 'vitest'
import { initializeTestEnvironment, type RulesTestEnvironment } from '@firebase/rules-unit-testing'
import { doc, getDoc } from 'firebase/firestore'
import { createCardId } from '../src/domain/learning/cardId'
import type { StudyEvent, StudySession } from '../src/domain/learning/types'
import { createLocalDatabase, type ZaPanDatabase } from '../src/services/persistence/database'
import { LocalLearningRepository } from '../src/services/persistence/LocalLearningRepository'
import { FirestoreEventSyncService } from '../src/services/sync/FirestoreEventSyncService'

const rules = readFileSync(new URL('../../firebase/firestore.rules', import.meta.url), 'utf8')
const cardId = createCardId({ level: 'foundation', contentType: 'kana', sourceKey: 'kana-basic-v1', itemKey: 'hira-a' })
const NOW = 30_000_000
let testEnv: RulesTestEnvironment
let databases: ZaPanDatabase[] = []

beforeAll(async () => {
  testEnv = await initializeTestEnvironment({ projectId: 'demo-zapan-sync', firestore: { host: '127.0.0.1', port: 8080, rules } })
})

afterEach(async () => {
  await testEnv.clearFirestore()
  for (const db of databases) { const name = db.name; db.close(); await indexedDB.deleteDatabase(name) }
  databases = []
})

afterAll(async () => { await testEnv.cleanup() })

function makeRepo(name = `sync-test-${crypto.randomUUID()}`): LocalLearningRepository {
  const db = createLocalDatabase(name)
  databases.push(db)
  return new LocalLearningRepository(db)
}

function session(id: string, mode: StudySession['mode'] = 'today'): StudySession {
  return { sessionId: id, userId: 'user-a', mode, startedAt: NOW, endedAt: null, eventIds: [], schemaVersion: 1 }
}

function event(
  id: string,
  sessionId: string,
  occurredAt: number,
  result: 'correct' | 'incorrect',
  mode: StudyEvent['mode'] = 'today',
  inputKind: StudyEvent['inputKind'] = 'typing',
): StudyEvent {
  return {
    eventId: id,
    sessionId,
    cardId,
    mode,
    result,
    rating: result === 'correct' ? 'good' : 'again',
    responseTimeMs: result === 'correct' ? 900 : 1400,
    occurredAt,
    inputKind,
    schemaVersion: 1,
  }
}

describe('FirestoreEventSyncService convergence', () => {
  it('uploads and downloads a five-event local journal in one sync cycle', async () => {
    const repoA = makeRepo()
    const repoB = makeRepo()
    await repoA.createSession(session('session-five'))
    for (let i = 0; i < 5; i += 1) {
      await repoA.recordEvent(event(`event-five-${i + 1}`, 'session-five', NOW + 1000 + i, 'correct'))
    }

    const firestoreA = testEnv.authenticatedContext('user-a').firestore()
    const firestoreB = testEnv.authenticatedContext('user-a').firestore()
    const firstResult = await new FirestoreEventSyncService(firestoreA, 'user-a', repoA).sync()
    const secondResult = await new FirestoreEventSyncService(firestoreB, 'user-a', repoB).sync()

    expect(firstResult.uploadedEvents).toBe(5)
    expect(firstResult.downloadedEvents).toBe(5)
    expect(secondResult.downloadedEvents).toBe(5)
    expect(await repoB.listEvents()).toHaveLength(5)
  })

  it('converges two offline clients through the immutable event journal', async () => {
    const repoA = makeRepo()
    const repoB = makeRepo()
    await repoA.createSession(session('session-a'))
    await repoB.createSession(session('session-b'))
    await repoA.recordEvent(event('event-a', 'session-a', NOW + 1000, 'correct'))
    await repoB.recordEvent(event('event-b', 'session-b', NOW + 2000, 'incorrect'))

    const firestoreA = testEnv.authenticatedContext('user-a').firestore()
    const firestoreB = testEnv.authenticatedContext('user-a').firestore()
    const syncA = new FirestoreEventSyncService(firestoreA, 'user-a', repoA)
    const syncB = new FirestoreEventSyncService(firestoreB, 'user-a', repoB)

    await syncA.sync()
    const secondResult = await syncB.sync()
    await syncA.sync()

    expect(secondResult.downloadedEvents).toBe(2)
    const progressA = await repoA.getProgress(cardId)
    const progressB = await repoB.getProgress(cardId)
    expect(progressA).toEqual(progressB)
    expect(progressA).toMatchObject({ attempts: 2, correctCount: 1, incorrectCount: 1, currentCorrectStreak: 0 })

    const cloud = await getDoc(doc(firestoreA, 'users/user-a/progress', cardId))
    expect(cloud.data()).toMatchObject({ attempts: 2, correctCount: 1, incorrectCount: 1 })
  })

  it('accepts and syncs canonical Custom Practice events', async () => {
    const repo = makeRepo()
    await repo.createSession(session('session-custom', 'custom'))
    await repo.recordEvent(event('event-custom', 'session-custom', NOW + 3000, 'correct', 'custom'))

    const firestore = testEnv.authenticatedContext('user-a').firestore()
    const result = await new FirestoreEventSyncService(firestore, 'user-a', repo).sync()

    expect(result.uploadedEvents).toBe(1)
    expect(result.downloadedEvents).toBe(1)
    const cloud = await getDoc(doc(firestore, 'users/user-a/events/event-custom'))
    expect(cloud.data()).toMatchObject({ mode: 'custom', inputKind: 'typing', result: 'correct' })
  })

  it('syncs Writing self-grade events without inventing response timing', async () => {
    const repo = makeRepo()
    await repo.createSession(session('session-writing', 'writing'))
    await repo.recordEvent({
      eventId: 'event-writing',
      sessionId: 'session-writing',
      cardId,
      mode: 'writing',
      result: 'correct',
      rating: 'good',
      occurredAt: NOW + 4000,
      inputKind: 'drawing',
      schemaVersion: 1,
    })

    const firestore = testEnv.authenticatedContext('user-a').firestore()
    const result = await new FirestoreEventSyncService(firestore, 'user-a', repo).sync()

    expect(result.uploadedEvents).toBe(1)
    const cloud = await getDoc(doc(firestore, 'users/user-a/events/event-writing'))
    expect(cloud.data()).toMatchObject({ mode: 'writing', inputKind: 'drawing', result: 'correct' })
    expect(cloud.data()).not.toHaveProperty('responseTimeMs')
  })

  it('syncs measured Time Attack and Survival events through the same journal', async () => {
    const repo = makeRepo()
    await repo.createSession(session('session-time-attack', 'time-attack'))
    await repo.createSession(session('session-survival', 'survival'))
    await repo.recordEvent(event('event-time-attack', 'session-time-attack', NOW + 5000, 'correct', 'time-attack'))
    await repo.recordEvent(event('event-survival', 'session-survival', NOW + 6000, 'incorrect', 'survival'))

    const firestore = testEnv.authenticatedContext('user-a').firestore()
    const result = await new FirestoreEventSyncService(firestore, 'user-a', repo).sync()

    expect(result.uploadedEvents).toBe(2)
    const timeAttack = await getDoc(doc(firestore, 'users/user-a/events/event-time-attack'))
    const survival = await getDoc(doc(firestore, 'users/user-a/events/event-survival'))
    expect(timeAttack.data()).toMatchObject({ mode: 'time-attack', inputKind: 'typing', result: 'correct', responseTimeMs: 900 })
    expect(survival.data()).toMatchObject({ mode: 'survival', inputKind: 'typing', result: 'incorrect', responseTimeMs: 1400 })
  })

  it('syncs measured Match and Confusable events through the same journal', async () => {
    const repo = makeRepo()
    await repo.createSession(session('session-match', 'match'))
    await repo.createSession(session('session-confusable', 'confusable'))
    await repo.recordEvent(event('event-match', 'session-match', NOW + 7000, 'correct', 'match', 'matching'))
    await repo.recordEvent(event('event-confusable', 'session-confusable', NOW + 8000, 'incorrect', 'confusable', 'multiple-choice'))

    const firestore = testEnv.authenticatedContext('user-a').firestore()
    const result = await new FirestoreEventSyncService(firestore, 'user-a', repo).sync()

    expect(result.uploadedEvents).toBe(2)
    const matchEvent = await getDoc(doc(firestore, 'users/user-a/events/event-match'))
    const confusableEvent = await getDoc(doc(firestore, 'users/user-a/events/event-confusable'))
    expect(matchEvent.data()).toMatchObject({ mode: 'match', inputKind: 'matching', result: 'correct', responseTimeMs: 900 })
    expect(confusableEvent.data()).toMatchObject({ mode: 'confusable', inputKind: 'multiple-choice', result: 'incorrect', responseTimeMs: 1400 })
  })
})

describe('Phase 4 multi-device and offline stress', () => {
  it('converges overlapping offline journals without duplicating the shared event', async () => {
    const repoA = makeRepo()
    const repoB = makeRepo()
    await repoA.createSession(session('session-shared'))
    await repoB.createSession(session('session-shared'))

    const shared = event('event-shared', 'session-shared', NOW + 1_000, 'correct')
    await repoA.recordEvent(shared)
    await repoB.recordEvent(shared)
    await repoA.recordEvent(event('event-a-only', 'session-shared', NOW + 2_000, 'incorrect'))
    await repoB.recordEvent(event('event-b-only', 'session-shared', NOW + 3_000, 'correct'))

    const firestoreA = testEnv.authenticatedContext('user-a').firestore()
    const firestoreB = testEnv.authenticatedContext('user-a').firestore()
    const syncA = new FirestoreEventSyncService(firestoreA, 'user-a', repoA)
    const syncB = new FirestoreEventSyncService(firestoreB, 'user-a', repoB)

    const first = await syncA.sync()
    const second = await syncB.sync()
    await syncA.sync()

    expect(first.uploadedEvents).toBe(2)
    expect(second.existingEvents).toBe(1)
    expect(second.uploadedEvents).toBe(1)
    expect(await repoA.listEvents()).toHaveLength(3)
    expect(await repoB.listEvents()).toHaveLength(3)
    expect(await repoA.getProgress(cardId)).toEqual(await repoB.getProgress(cardId))
    expect(await repoA.getProgress(cardId)).toMatchObject({ attempts: 3, correctCount: 2, incorrectCount: 1 })
  })

  it('rejects a conflicting payload for an event id already uploaded by another device', async () => {
    const repoA = makeRepo()
    const repoB = makeRepo()
    await repoA.createSession(session('session-conflict'))
    await repoB.createSession(session('session-conflict'))

    await repoA.recordEvent(event('event-conflict', 'session-conflict', NOW + 1_000, 'correct'))
    await repoB.recordEvent(event('event-conflict', 'session-conflict', NOW + 1_000, 'incorrect'))

    const firestoreA = testEnv.authenticatedContext('user-a').firestore()
    const firestoreB = testEnv.authenticatedContext('user-a').firestore()
    await new FirestoreEventSyncService(firestoreA, 'user-a', repoA).sync()

    await expect(
      new FirestoreEventSyncService(firestoreB, 'user-a', repoB).sync(),
    ).rejects.toThrow('Cloud event conflict: event-conflict')

    const cloud = await getDoc(doc(firestoreA, 'users/user-a/events/event-conflict'))
    expect(cloud.data()).toMatchObject({ result: 'correct' })
  })

  it('keeps an offline journal durable across database reopen and syncs it later', async () => {
    const name = 'sync-reopen-' + crypto.randomUUID()
    const dbBefore = createLocalDatabase(name)
    databases.push(dbBefore)
    let repo = new LocalLearningRepository(dbBefore)
    await repo.createSession(session('session-offline'))

    for (let i = 0; i < 12; i += 1) {
      await repo.recordEvent(event(
        'event-offline-' + (i + 1),
        'session-offline',
        NOW + 1_000 + i,
        i % 3 === 0 ? 'incorrect' : 'correct',
      ))
    }

    dbBefore.close()
    const dbAfter = createLocalDatabase(name)
    databases.push(dbAfter)
    repo = new LocalLearningRepository(dbAfter)

    expect(await repo.listEvents()).toHaveLength(12)
    expect((await repo.getProgress(cardId))?.attempts).toBe(12)

    const firestore = testEnv.authenticatedContext('user-a').firestore()
    const result = await new FirestoreEventSyncService(firestore, 'user-a', repo).sync()
    expect(result.uploadedEvents).toBe(12)
    expect(result.downloadedEvents).toBe(12)

    const cloudProgress = await getDoc(doc(firestore, 'users/user-a/progress', cardId))
    expect(cloudProgress.data()).toMatchObject({ attempts: 12, correctCount: 8, incorrectCount: 4 })
  })
})
