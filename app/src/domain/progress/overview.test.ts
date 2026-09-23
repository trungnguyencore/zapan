import { describe, expect, it } from 'vitest'
import { createCardId } from '../learning/cardId'
import { createInitialProgress } from './progress'
import type { ContentCard } from '../content/types'
import { deriveLearningOverview } from './overview'

const NOW = 50_000
function card(key: string): ContentCard {
  return { cardId: createCardId({ level: 'foundation', contentType: 'kana', sourceKey: 'test-v1', itemKey: key }), schemaVersion: 1, sourceVersion: 'v1', level: 'foundation', topicId: 'topic', contentType: 'kana', script: 'hiragana', group: 'main', character: key, romanizations: [key] }
}

describe('deriveLearningOverview', () => {
  it('derives only real metrics from scoped progress', () => {
    const cards = [card('a'), card('i'), card('u')]
    const first = { ...createInitialProgress(cards[0].cardId, NOW), attempts: 2, correctCount: 1, incorrectCount: 1, accuracy: 0.5, nextReviewAt: NOW, mastery: 'weak' as const }
    const second = { ...createInitialProgress(cards[1].cardId, NOW), attempts: 1, correctCount: 1, accuracy: 1, nextReviewAt: NOW + 1, mastery: 'learning' as const }
    expect(deriveLearningOverview(cards, [first, second], NOW)).toEqual({ totalCards: 3, studiedCards: 2, unseenCards: 1, dueCards: 1, weakCards: 1, masteredCards: 0, attempts: 3, correctCount: 2, accuracy: 2 / 3 })
  })

  it('returns null accuracy before any attempt', () => {
    expect(deriveLearningOverview([card('a')], [], NOW).accuracy).toBeNull()
  })
})
