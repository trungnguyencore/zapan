import { describe, expect, it } from 'vitest'
import type { ContentCard } from '../content/types'
import type { ProgressRecord } from '../learning/types'
import { createCardId } from '../learning/cardId'
import { createInitialProgress } from '../progress/progress'
import { buildNewQueue, buildReviewQueue, buildTodayQueue } from './sessionBuilder'

const NOW = 20_000_000

function card(key: string): ContentCard {
  return {
    cardId: createCardId({ level: 'foundation', contentType: 'kana', sourceKey: 'test-v1', itemKey: key }),
    schemaVersion: 1,
    sourceVersion: 'test-v1',
    level: 'foundation',
    topicId: 'test-topic',
    contentType: 'kana',
    script: 'hiragana',
    group: 'main',
    character: key,
    romanizations: [key],
  }
}

function reviewed(target: ContentCard, dueAt: number, updatedAt = NOW - 10): ProgressRecord {
  const base = createInitialProgress(target.cardId, NOW - 1000)
  return {
    ...base,
    attempts: 1,
    correctCount: 1,
    currentCorrectStreak: 1,
    accuracy: 1,
    lastReviewedAt: updatedAt,
    nextReviewAt: dueAt,
    updatedAt,
    mastery: dueAt <= NOW ? 'due' : 'learning',
    srs: { ...base.srs, level: 1, intervalMinutes: 240, lastReviewAt: updatedAt, dueAt },
  }
}

describe('session queue builders', () => {
  const cards = [card('a'), card('i'), card('u'), card('e'), card('o')]

  it('orders due review by most overdue first', () => {
    const progress = [reviewed(cards[1], NOW - 10), reviewed(cards[0], NOW - 100)]
    expect(buildReviewQueue(cards, progress, NOW).map((item) => item.cardId)).toEqual([cards[0].cardId, cards[1].cardId])
  })

  it('excludes future reviews', () => {
    expect(buildReviewQueue(cards, [reviewed(cards[0], NOW + 1)], NOW)).toEqual([])
  })

  it('returns only unseen cards as new material', () => {
    expect(buildNewQueue(cards, [reviewed(cards[0], NOW + 1)], 2).map((item) => item.cardId)).toEqual([cards[1].cardId, cards[2].cardId])
  })

  it('builds Today with due review before new cards', () => {
    const progress = [reviewed(cards[1], NOW - 10)]
    expect(buildTodayQueue(cards, progress, NOW, { reviewLimit: 1, newLimit: 2 }).map((item) => item.cardId))
      .toEqual([cards[1].cardId, cards[0].cardId, cards[2].cardId])
  })

  it('respects zero limits', () => {
    expect(buildTodayQueue(cards, [], NOW, { reviewLimit: 0, newLimit: 0 })).toEqual([])
  })
})
