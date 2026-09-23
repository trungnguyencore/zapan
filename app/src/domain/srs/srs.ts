import type { ReviewRating, SrsLevel, SrsState, StudyResult } from '../learning/types'

const MINUTE_MS = 60_000
const MAX_INTERVAL_MINUTES = 259_200 // 180 days; product heuristic for v1
const GOOD_INTERVALS: readonly number[] = [10, 240, 720, 1_440, 4_320, 10_080, 43_200]

function asLevel(value: number): SrsLevel {
  return Math.max(0, Math.min(6, value)) as SrsLevel
}

function safeInterval(value: number): number {
  return Math.max(1, Math.min(MAX_INTERVAL_MINUTES, Math.round(value)))
}

export function createInitialSrsState(now: number): SrsState {
  return { algorithmVersion: 1, level: 0, intervalMinutes: 0, lapses: 0, lastReviewAt: null, dueAt: now }
}

export function ratingFromResult(result: StudyResult): ReviewRating | null {
  if (result === 'correct') return 'good'
  if (result === 'incorrect') return 'again'
  return null
}

export function reviewSrs(state: SrsState, rating: ReviewRating, now: number): SrsState {
  if (!Number.isFinite(now) || now < 0) throw new Error('now must be a non-negative finite timestamp')

  let level = state.level
  let intervalMinutes = state.intervalMinutes
  let lapses = state.lapses

  if (rating === 'again') {
    level = 0
    intervalMinutes = 10
    lapses += 1
  } else if (rating === 'hard') {
    intervalMinutes = safeInterval(intervalMinutes > 0 ? intervalMinutes * 1.5 : 30)
  } else if (rating === 'good') {
    const nextLevel = asLevel(level + 1)
    intervalMinutes = nextLevel > level ? GOOD_INTERVALS[nextLevel] : safeInterval(Math.max(intervalMinutes, GOOD_INTERVALS[6]) * 2)
    level = nextLevel
  } else {
    const nextLevel = asLevel(level + 2)
    intervalMinutes = nextLevel > level ? safeInterval(GOOD_INTERVALS[nextLevel] * 1.5) : safeInterval(Math.max(intervalMinutes, GOOD_INTERVALS[6]) * 2.5)
    level = nextLevel
  }

  intervalMinutes = safeInterval(intervalMinutes)
  return { algorithmVersion: 1, level, intervalMinutes, lapses, lastReviewAt: now, dueAt: now + intervalMinutes * MINUTE_MS }
}
