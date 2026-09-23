import { describe, expect, it } from 'vitest'
import { createCardId } from '../learning/cardId'
import type { StudyEvent } from '../learning/types'
import { applyStudyEvent, createInitialProgress, deriveMastery } from './progress'

const cardId = createCardId({ level: 'n5', contentType: 'vocabulary', sourceKey: 'core-v1', itemKey: 'cat-001' })
const NOW = 2_000_000

function event(overrides: Partial<StudyEvent> = {}): StudyEvent {
  return {
    eventId: 'event-1',
    sessionId: 'session-1',
    cardId,
    mode: 'review',
    result: 'correct',
    responseTimeMs: 2_000,
    occurredAt: NOW,
    inputKind: 'typing',
    schemaVersion: 1,
    ...overrides,
  }
}

describe('progress reducer', () => {
  it('updates canonical counters and SRS from a correct event', () => {
    const updated = applyStudyEvent(createInitialProgress(cardId, NOW), event())
    expect(updated).toMatchObject({ attempts: 1, correctCount: 1, incorrectCount: 0, currentCorrectStreak: 1, accuracy: 1, averageResponseTimeMs: 2000, responseTimeSampleCount: 1, mastery: 'learning' })
    expect(updated.nextReviewAt).toBeGreaterThan(NOW)
  })

  it('does not invent response timing for untimed events', () => {
    const first = applyStudyEvent(createInitialProgress(cardId, NOW), event({ responseTimeMs: undefined }))
    expect(first.averageResponseTimeMs).toBeNull()
    expect(first.responseTimeSampleCount).toBe(0)
    const second = applyStudyEvent(first, event({ eventId: 'event-2', occurredAt: NOW + 1, responseTimeMs: 3000 }))
    expect(second.averageResponseTimeMs).toBe(3000)
    expect(second.responseTimeSampleCount).toBe(1)
  })

  it('averages only measured response samples', () => {
    const first = applyStudyEvent(createInitialProgress(cardId, NOW), event({ responseTimeMs: 1000 }))
    const second = applyStudyEvent(first, event({ eventId: 'event-2', occurredAt: NOW + 1, responseTimeMs: undefined }))
    const third = applyStudyEvent(second, event({ eventId: 'event-3', occurredAt: NOW + 2, responseTimeMs: 3000 }))
    expect(third.averageResponseTimeMs).toBe(2000)
    expect(third.responseTimeSampleCount).toBe(2)
  })
})

describe('progress invariants', () => {
  it('resets the correct streak and records a lapse after an error', () => {
    const first = applyStudyEvent(createInitialProgress(cardId, NOW), event())
    const failed = applyStudyEvent(first, event({ eventId: 'event-2', result: 'incorrect', occurredAt: NOW + 1 }))
    expect(failed.currentCorrectStreak).toBe(0)
    expect(failed.incorrectCount).toBe(1)
    expect(failed.srs.lapses).toBe(1)
  })

  it('marks repeated poor recall as weak', () => {
    let record = createInitialProgress(cardId, NOW)
    for (let i = 0; i < 3; i += 1) record = applyStudyEvent(record, event({ eventId: `miss-${i}`, result: 'incorrect', occurredAt: NOW + i }))
    expect(record.mastery).toBe('weak')
  })

  it('derives due state from the current clock', () => {
    const reviewed = applyStudyEvent(createInitialProgress(cardId, NOW), event())
    expect(deriveMastery(reviewed, reviewed.nextReviewAt)).toBe('due')
  })

  it('does not mutate progress for a skipped event', () => {
    const initial = createInitialProgress(cardId, NOW)
    expect(applyStudyEvent(initial, event({ result: 'skipped' }))).toBe(initial)
  })
})
