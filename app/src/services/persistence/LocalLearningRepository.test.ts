import 'fake-indexeddb/auto'
import { afterEach, describe, expect, it } from 'vitest'
import { createCardId } from '../../domain/learning/cardId'
import type { StudyEvent, StudySession } from '../../domain/learning/types'
import { createLocalDatabase, type ZaPanDatabase } from './database'
import { LocalLearningRepository } from './LocalLearningRepository'

const cardId = createCardId({ level: 'n5', contentType: 'vocabulary', sourceKey: 'core-v1', itemKey: 'cat-001' })
const NOW = 10_000_000
let db: ZaPanDatabase | null = null

afterEach(async () => {
  if (!db) return
  const name = db.name
  db.close()
  await indexedDB.deleteDatabase(name)
  db = null
})

function session(overrides: Partial<StudySession> = {}): StudySession {
  return {
    sessionId: 'session-1',
    userId: 'guest:test',
    mode: 'review',
    startedAt: NOW,
    endedAt: null,
    eventIds: [],
    schemaVersion: 1,
    ...overrides,
  }
}

function event(overrides: Partial<StudyEvent> = {}): StudyEvent {
  return {
    eventId: 'event-1',
    sessionId: 'session-1',
    cardId,
    mode: 'review',
    result: 'correct',
    responseTimeMs: 1200,
    occurredAt: NOW + 1000,
    inputKind: 'typing',
    schemaVersion: 1,
    ...overrides,
  }
}

describe('LocalLearningRepository', () => {
  it('persists a session, event, and progress atomically', async () => {
    db = createLocalDatabase(`zapan-test-${crypto.randomUUID()}`)
    const repo = new LocalLearningRepository(db)
    await repo.createSession(session())
    const progress = await repo.recordEvent(event())
    expect(progress).toMatchObject({ attempts: 1, correctCount: 1 })
    expect(await repo.getEvent('event-1')).toBeDefined()
    expect((await repo.getSession('session-1'))?.eventIds).toEqual(['event-1'])
  })

  it('serializes concurrent identical session creation idempotently', async () => {
    db = createLocalDatabase(`zapan-test-${crypto.randomUUID()}`)
    const repo = new LocalLearningRepository(db)
    const value = session()
    await Promise.all([repo.createSession(value), repo.createSession({ ...value, eventIds: [] })])
    expect(await repo.getSession(value.sessionId)).toEqual(value)
  })

  it('survives database close and reopen with the same name', async () => {
    const name = `zapan-test-${crypto.randomUUID()}`
    db = createLocalDatabase(name)
    let repo = new LocalLearningRepository(db)
    await repo.createSession(session())
    await repo.recordEvent(event())
    db.close()

    db = createLocalDatabase(name)
    repo = new LocalLearningRepository(db)
    expect((await repo.getProgress(cardId))?.attempts).toBe(1)
    expect((await repo.getSession('session-1'))?.eventIds).toEqual(['event-1'])
  })

  it('treats an identical duplicate event as idempotent', async () => {
    db = createLocalDatabase(`zapan-test-${crypto.randomUUID()}`)
    const repo = new LocalLearningRepository(db)
    await repo.createSession(session())
    await repo.recordEvent(event())
    const second = await repo.recordEvent(event())
    expect(second.attempts).toBe(1)
    expect((await repo.getSession('session-1'))?.eventIds).toEqual(['event-1'])
  })

  it('rejects a conflicting duplicate event id', async () => {
    db = createLocalDatabase(`zapan-test-${crypto.randomUUID()}`)
    const repo = new LocalLearningRepository(db)
    await repo.createSession(session())
    await repo.recordEvent(event())
    await expect(repo.recordEvent(event({ result: 'incorrect' }))).rejects.toThrow('Conflicting eventId')
  })

  it('rejects events for missing sessions without writing progress', async () => {
    db = createLocalDatabase(`zapan-test-${crypto.randomUUID()}`)
    const repo = new LocalLearningRepository(db)
    await expect(repo.recordEvent(event())).rejects.toThrow('missing session')
    expect(await repo.getProgress(cardId)).toBeUndefined()
    expect(await repo.getEvent('event-1')).toBeUndefined()
  })

  it('lists only scored progress that is due', async () => {
    db = createLocalDatabase(`zapan-test-${crypto.randomUUID()}`)
    const repo = new LocalLearningRepository(db)
    await repo.createSession(session())
    const progress = await repo.recordEvent(event())
    expect(await repo.listDueProgress(progress.nextReviewAt - 1)).toHaveLength(0)
    expect((await repo.listDueProgress(progress.nextReviewAt)).map((item) => item.cardId)).toEqual([cardId])
  })

  it('completes a session once and rejects incompatible completion time', async () => {
    db = createLocalDatabase(`zapan-test-${crypto.randomUUID()}`)
    const repo = new LocalLearningRepository(db)
    await repo.createSession(session())
    const completed = await repo.completeSession('session-1', NOW + 5000)
    expect(completed.endedAt).toBe(NOW + 5000)
    await expect(repo.completeSession('session-1', NOW + 6000)).rejects.toThrow('already completed')
  })

  it('merges remote events and deterministically rebuilds progress', async () => {
    db = createLocalDatabase(`zapan-test-${crypto.randomUUID()}`)
    const repo = new LocalLearningRepository(db)
    await repo.createSession(session())
    await repo.recordEvent(event({ eventId: 'event-late', occurredAt: NOW + 2000, result: 'incorrect' }))
    const remote = event({ eventId: 'event-early', occurredAt: NOW + 1000, result: 'correct' })
    const rebuilt = await repo.mergeEvents([remote])
    expect(rebuilt[0]).toMatchObject({ attempts: 2, correctCount: 1, incorrectCount: 1 })
    expect((await repo.listEvents()).map((item) => item.eventId).sort()).toEqual(['event-early', 'event-late'])
  })

  it('retains all five sequential study events before session completion', async () => {
    db = createLocalDatabase(`zapan-test-${crypto.randomUUID()}`)
    const repo = new LocalLearningRepository(db)
    await repo.createSession(session())
    for (let i = 0; i < 5; i += 1) {
      await repo.recordEvent(event({ eventId: `event-${i + 1}`, occurredAt: NOW + 1000 + i }))
    }
    await repo.completeSession('session-1', NOW + 10_000)
    expect(await repo.listEvents()).toHaveLength(5)
    expect((await repo.getSession('session-1'))?.eventIds).toHaveLength(5)
  })

  it('rejects conflicting remote payload for an existing event id', async () => {
    db = createLocalDatabase(`zapan-test-${crypto.randomUUID()}`)
    const repo = new LocalLearningRepository(db)
    await repo.createSession(session())
    await repo.recordEvent(event())
    await expect(repo.mergeEvents([event({ result: 'incorrect' })])).rejects.toThrow('Conflicting eventId')
  })
})

describe('Phase 4 event-journal recovery', () => {
  it('rebuilds a missing progress snapshot from the immutable local event journal', async () => {
    db = createLocalDatabase('zapan-recovery-' + crypto.randomUUID())
    const repo = new LocalLearningRepository(db)
    await repo.createSession(session({ sessionId: 'session-recovery' }))

    for (let i = 0; i < 4; i += 1) {
      await repo.recordEvent(event({
        eventId: 'event-recovery-' + (i + 1),
        sessionId: 'session-recovery',
        occurredAt: NOW + 1_000 + i,
        result: i === 2 ? 'incorrect' : 'correct',
      }))
    }

    const journal = await repo.listEvents()
    expect(journal).toHaveLength(4)
    await db.progress.delete(cardId)
    expect(await repo.getProgress(cardId)).toBeUndefined()

    const rebuilt = await repo.mergeEvents(journal)
    expect(rebuilt).toHaveLength(1)
    expect(await repo.getProgress(cardId)).toMatchObject({
      attempts: 4,
      correctCount: 3,
      incorrectCount: 1,
    })
    expect(await repo.listEvents()).toHaveLength(4)
  })
})
