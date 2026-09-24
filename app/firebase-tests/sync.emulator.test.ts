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

function makeRepo(): LocalLearningRepository {
  const db = createLocalDatabase(`sync-test-${crypto.randomUUID()}`)
  databases.push(db)
  return new LocalLearningRepository(db)
}

function session(id: string, mode: StudySession['mode'] = 'today'): StudySession {
  return { sessionId: id, userId: 'user-a', mode, startedAt: NOW, endedAt: null, eventIds: [], schemaVersion: 1 }
}

function event(id: string, sessionId: string, occurredAt: number, result: 'correct' | 'incorrect', mode: StudyEvent['mode'] = 'today'): StudyEvent {
  return {
    eventId: id,
    sessionId,
    cardId,
    mode,
    result,
    rating: result === 'correct' ? 'good' : 'again',
    responseTimeMs: result === 'correct' ? 900 : 1400,
    occurredAt,
    inputKind: 'typing',
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
})
