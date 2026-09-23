import type { CardId, MasteryState, ProgressRecord, StudyEvent } from '../learning/types'
import { createInitialSrsState, ratingFromResult, reviewSrs } from '../srs/srs'

export function createInitialProgress(cardId: CardId, now: number): ProgressRecord {
  const srs = createInitialSrsState(now)
  return {
    cardId,
    attempts: 0,
    correctCount: 0,
    incorrectCount: 0,
    currentCorrectStreak: 0,
    accuracy: 0,
    averageResponseTimeMs: null,
    responseTimeSampleCount: 0,
    lastReviewedAt: null,
    nextReviewAt: srs.dueAt,
    mastery: 'unseen',
    srs,
    updatedAt: now,
    schemaVersion: 1,
  }
}

export function deriveMastery(record: ProgressRecord, now: number): MasteryState {
  if (record.attempts === 0) return 'unseen'
  if (record.attempts >= 3 && record.accuracy < 0.65) return 'weak'
  if (record.lastReviewedAt !== null && record.nextReviewAt <= now) return 'due'
  if (record.currentCorrectStreak >= 5 && record.srs.level >= 4 && record.accuracy >= 0.85) return 'mastered'
  return 'learning'
}

function nextAverage(previous: number | null, previousCount: number, responseTimeMs?: number): number | null {
  if (responseTimeMs === undefined) return previous
  if (!Number.isFinite(responseTimeMs) || responseTimeMs < 0) throw new Error('responseTimeMs must be a non-negative finite number')
  if (previous === null || previousCount === 0) return Math.round(responseTimeMs)
  return Math.round((previous * previousCount + responseTimeMs) / (previousCount + 1))
}

export function applyStudyEvent(record: ProgressRecord, event: StudyEvent): ProgressRecord {
  if (record.cardId !== event.cardId) throw new Error('StudyEvent cardId does not match ProgressRecord')
  if (event.result === 'skipped') return record

  const attempts = record.attempts + 1
  const isCorrect = event.result === 'correct'
  const correctCount = record.correctCount + (isCorrect ? 1 : 0)
  const incorrectCount = record.incorrectCount + (isCorrect ? 0 : 1)
  const rating = event.rating ?? ratingFromResult(event.result)
  if (!rating) return record
  const srs = reviewSrs(record.srs, rating, event.occurredAt)
  const hasResponseTime = event.responseTimeMs !== undefined
  const updated: ProgressRecord = {
    ...record,
    attempts,
    correctCount,
    incorrectCount,
    currentCorrectStreak: isCorrect ? record.currentCorrectStreak + 1 : 0,
    accuracy: correctCount / attempts,
    averageResponseTimeMs: nextAverage(record.averageResponseTimeMs, record.responseTimeSampleCount, event.responseTimeMs),
    responseTimeSampleCount: record.responseTimeSampleCount + (hasResponseTime ? 1 : 0),
    lastReviewedAt: event.occurredAt,
    nextReviewAt: srs.dueAt,
    srs,
    updatedAt: event.occurredAt,
  }
  return { ...updated, mastery: deriveMastery(updated, event.occurredAt) }
}
