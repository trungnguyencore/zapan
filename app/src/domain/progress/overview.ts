import type { ContentCard } from '../content/types'
import type { ProgressRecord } from '../learning/types'

export interface LearningOverview {
  totalCards: number
  studiedCards: number
  unseenCards: number
  dueCards: number
  weakCards: number
  masteredCards: number
  attempts: number
  correctCount: number
  accuracy: number | null
}

export function deriveLearningOverview(
  cards: readonly ContentCard[],
  progress: readonly ProgressRecord[],
  now: number,
): LearningOverview {
  const validIds = new Set(cards.map((card) => card.cardId))
  const scoped = progress.filter((record) => validIds.has(record.cardId) && record.attempts > 0)
  const attempts = scoped.reduce((sum, record) => sum + record.attempts, 0)
  const correctCount = scoped.reduce((sum, record) => sum + record.correctCount, 0)
  return {
    totalCards: cards.length,
    studiedCards: scoped.length,
    unseenCards: Math.max(0, cards.length - scoped.length),
    dueCards: scoped.filter((record) => record.nextReviewAt <= now).length,
    weakCards: scoped.filter((record) => record.mastery === 'weak').length,
    masteredCards: scoped.filter((record) => record.mastery === 'mastered').length,
    attempts,
    correctCount,
    accuracy: attempts > 0 ? correctCount / attempts : null,
  }
}
