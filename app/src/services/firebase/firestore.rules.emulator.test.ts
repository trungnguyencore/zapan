import { readFileSync } from 'node:fs'
import { resolve } from 'node:path'
import {
  assertFails,
  assertSucceeds,
  initializeTestEnvironment,
  type RulesTestEnvironment,
} from '@firebase/rules-unit-testing'
import { deleteDoc, doc, getDoc, setDoc, updateDoc } from 'firebase/firestore'
import { afterAll, afterEach, beforeAll, describe, it } from 'vitest'

const PROJECT_ID = 'zapan-v2-trunk'
let env: RulesTestEnvironment

function validProgress(cardId: string) {
  return {
    cardId,
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
    srs: {
      algorithmVersion: 1,
      level: 1,
      intervalMinutes: 240,
      lapses: 0,
      lastReviewAt: 1_000,
      dueAt: 15_401_000,
    },
    updatedAt: 1_000,
    schemaVersion: 1,
  }
}
function validEvent(eventId: string) {
  return {
    eventId,
    sessionId: 'session-1',
    cardId: 'foundation:kana:kana-basic-v1:hira-a',
    mode: 'review',
    result: 'correct',
    responseTimeMs: 1200,
    occurredAt: 1_000,
    inputKind: 'typing',
    schemaVersion: 1,
  }
}

function validSession(sessionId: string, userId: string) {
  return {
    sessionId,
    userId,
    mode: 'review',
    startedAt: 900,
    endedAt: null,
    eventIds: [],
    schemaVersion: 1,
  }
}

beforeAll(async () => {
  env = await initializeTestEnvironment({
    projectId: PROJECT_ID,
    firestore: {
      host: '127.0.0.1',
      port: 8080,
      rules: readFileSync(resolve(process.cwd(), '../firebase/firestore.rules'), 'utf8'),
    },
  })
})

afterEach(async () => {
  await env.clearFirestore()
})

afterAll(async () => {
  await env.cleanup()
})

describe('Firestore security rules', () => {
  it('blocks unauthenticated user-tree reads and writes', async () => {
    const db = env.unauthenticatedContext().firestore()
    await assertFails(getDoc(doc(db, 'users/alice/progress/card-a')))
    await assertFails(setDoc(doc(db, 'users/alice/progress/card-a'), validProgress('card-a')))
  })

  it('allows an owner to create and read valid progress', async () => {
    const db = env.authenticatedContext('alice').firestore()
    const ref = doc(db, 'users/alice/progress/card-a')
    await assertSucceeds(setDoc(ref, validProgress('card-a')))
    await assertSucceeds(getDoc(ref))
  })

  it('blocks cross-user progress access', async () => {
    await env.withSecurityRulesDisabled(async (context) => {
      await setDoc(doc(context.firestore(), 'users/alice/progress/card-a'), validProgress('card-a'))
    })
    const bob = env.authenticatedContext('bob').firestore()
    await assertFails(getDoc(doc(bob, 'users/alice/progress/card-a')))
    await assertFails(setDoc(doc(bob, 'users/alice/progress/card-b'), validProgress('card-b')))
  })

  it('rejects internally inconsistent progress counters', async () => {
    const db = env.authenticatedContext('alice').firestore()
    const invalid = { ...validProgress('card-a'), attempts: 3, correctCount: 3, incorrectCount: 2 }
    await assertFails(setDoc(doc(db, 'users/alice/progress/card-a'), invalid))
  })

  it('allows creating a valid event but forbids mutating or deleting it', async () => {
    const db = env.authenticatedContext('alice').firestore()
    const ref = doc(db, 'users/alice/events/event-1')
    await assertSucceeds(setDoc(ref, validEvent('event-1')))
    await assertFails(updateDoc(ref, { result: 'incorrect' }))
    await assertFails(deleteDoc(ref))
  })
  it('allows own valid session but rejects a forged userId', async () => {
    const db = env.authenticatedContext('alice').firestore()
    await assertSucceeds(setDoc(doc(db, 'users/alice/sessions/session-1'), validSession('session-1', 'alice')))
    await assertFails(setDoc(doc(db, 'users/alice/sessions/session-2'), validSession('session-2', 'bob')))
  })

  it('forbids deleting progress snapshots', async () => {
    const db = env.authenticatedContext('alice').firestore()
    const ref = doc(db, 'users/alice/progress/card-a')
    await assertSucceeds(setDoc(ref, validProgress('card-a')))
    await assertFails(deleteDoc(ref))
  })
})
