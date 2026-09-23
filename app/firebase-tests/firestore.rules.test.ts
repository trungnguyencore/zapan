import { readFileSync } from 'node:fs'
import { afterAll, afterEach, beforeAll, describe, expect, it } from 'vitest'
import { assertFails, assertSucceeds, initializeTestEnvironment, type RulesTestEnvironment } from '@firebase/rules-unit-testing'
import { doc, getDoc, setDoc, updateDoc } from 'firebase/firestore'

let testEnv: RulesTestEnvironment
const rules = readFileSync(new URL('../../firebase/firestore.rules', import.meta.url), 'utf8')

const VALID_PROGRESS = {
  cardId: 'foundation:kana:kana-basic-v1:hira-a',
  attempts: 1,
  correctCount: 1,
  incorrectCount: 0,
  currentCorrectStreak: 1,
  accuracy: 1,
  averageResponseTimeMs: 1200,
  responseTimeSampleCount: 1,
  lastReviewedAt: 1_000,
  nextReviewAt: 15_401_000,
  mastery: 'learning',
  srs: { algorithmVersion: 1, level: 1, intervalMinutes: 240, lapses: 0, lastReviewAt: 1_000, dueAt: 15_401_000 },
  updatedAt: 1_000,
  schemaVersion: 1,
}

beforeAll(async () => {
  testEnv = await initializeTestEnvironment({
    projectId: 'demo-zapan-v2',
    firestore: { host: '127.0.0.1', port: 8080, rules },
  })
})
afterEach(async () => {
  await testEnv.clearFirestore()
})

afterAll(async () => {
  await testEnv.cleanup()
})

describe('Firestore ownership rules', () => {
  it('allows an authenticated owner to write and read valid progress', async () => {
    const db = testEnv.authenticatedContext('user-a').firestore()
    const ref = doc(db, 'users/user-a/progress/foundation:kana:kana-basic-v1:hira-a')
    await assertSucceeds(setDoc(ref, VALID_PROGRESS))
    const snapshot = await assertSucceeds(getDoc(ref))
    expect(snapshot.data()?.attempts).toBe(1)
  })

  it('rejects unauthenticated access', async () => {
    const db = testEnv.unauthenticatedContext().firestore()
    const ref = doc(db, 'users/user-a/progress/foundation:kana:kana-basic-v1:hira-a')
    await assertFails(getDoc(ref))
    await assertFails(setDoc(ref, VALID_PROGRESS))
  })

  it('rejects access to another user tree', async () => {
    const db = testEnv.authenticatedContext('user-a').firestore()
    const ref = doc(db, 'users/user-b/progress/foundation:kana:kana-basic-v1:hira-a')
    await assertFails(getDoc(ref))
    await assertFails(setDoc(ref, VALID_PROGRESS))
  })
})
describe('Firestore schema validation', () => {
  it('rejects progress when path card id and payload card id differ', async () => {
    const db = testEnv.authenticatedContext('user-a').firestore()
    const ref = doc(db, 'users/user-a/progress/foundation:kana:kana-basic-v1:hira-i')
    await assertFails(setDoc(ref, VALID_PROGRESS))
  })

  it('rejects inconsistent progress counters', async () => {
    const db = testEnv.authenticatedContext('user-a').firestore()
    const ref = doc(db, 'users/user-a/progress/foundation:kana:kana-basic-v1:hira-a')
    await assertFails(setDoc(ref, { ...VALID_PROGRESS, attempts: 2 }))
  })

  it('accepts a valid session owned by the authenticated user', async () => {
    const db = testEnv.authenticatedContext('user-a').firestore()
    const ref = doc(db, 'users/user-a/sessions/session-1')
    await assertSucceeds(setDoc(ref, {
      sessionId: 'session-1', userId: 'user-a', mode: 'review', startedAt: 1_000,
      endedAt: null, eventIds: [], schemaVersion: 1,
    }))
  })

  it('rejects a session claiming another user id', async () => {
    const db = testEnv.authenticatedContext('user-a').firestore()
    const ref = doc(db, 'users/user-a/sessions/session-1')
    await assertFails(setDoc(ref, {
      sessionId: 'session-1', userId: 'user-b', mode: 'review', startedAt: 1_000,
      endedAt: null, eventIds: [], schemaVersion: 1,
    }))
  })
})
describe('immutable study events', () => {
  it('allows event creation but rejects event mutation', async () => {
    const db = testEnv.authenticatedContext('user-a').firestore()
    const ref = doc(db, 'users/user-a/events/event-1')
    const payload = {
      eventId: 'event-1', sessionId: 'session-1', cardId: VALID_PROGRESS.cardId,
      mode: 'review', result: 'correct', rating: 'good', responseTimeMs: 1200,
      occurredAt: 1_000, inputKind: 'typing', schemaVersion: 1,
    }
    await assertSucceeds(setDoc(ref, payload))
    await assertFails(updateDoc(ref, { responseTimeMs: 50 }))
  })
})
