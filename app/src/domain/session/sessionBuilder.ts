import type { ContentCard } from '../content/types'
import type { CardId, ProgressRecord } from '../learning/types'

export interface TodayQueueOptions {
  reviewLimit: number
  newLimit: number
}

function progressMap(records: readonly ProgressRecord[]): Map<CardId, ProgressRecord> {
  return new Map(records.map((record) => [record.cardId, record]))
}

export function buildReviewQueue(
  cards: readonly ContentCard[],
  progress: readonly ProgressRecord[],
  now: number,
  limit = 20,
): ContentCard[] {
  const byId = new Map(cards.map((card) => [card.cardId, card]))
  return progress
    .filter((record) => record.attempts > 0 && record.nextReviewAt <= now && byId.has(record.cardId))
    .sort((a, b) => a.nextReviewAt - b.nextReviewAt || a.updatedAt - b.updatedAt || a.cardId.localeCompare(b.cardId))
    .slice(0, Math.max(0, limit))
    .map((record) => byId.get(record.cardId)!)
}

export function buildNewQueue(
  cards: readonly ContentCard[],
  progress: readonly ProgressRecord[],
  limit = 5,
): ContentCard[] {
  const seen = progressMap(progress)
  return cards.filter((card) => !seen.has(card.cardId)).slice(0, Math.max(0, limit))
}

export function buildTodayQueue(
  cards: readonly ContentCard[],
  progress: readonly ProgressRecord[],
  now: number,
  options: TodayQueueOptions = { reviewLimit: 10, newLimit: 5 },
): ContentCard[] {
  const review = buildReviewQueue(cards, progress, now, options.reviewLimit)
  const reviewIds = new Set(review.map((card) => card.cardId))
  const fresh = buildNewQueue(cards.filter((card) => !reviewIds.has(card.cardId)), progress, options.newLimit)
  return [...review, ...fresh]
}
