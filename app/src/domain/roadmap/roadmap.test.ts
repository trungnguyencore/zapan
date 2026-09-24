import { beforeAll, describe, expect, it } from 'vitest'
import { loadOpenJlptBundles } from '../../data/openjlpt/generated/loader'
import { KANA_BASIC_BUNDLE } from '../../data/n5/kanaBasic'
import { KANJI_N5_BUNDLE } from '../../data/n5/kanjiN5'
import { VOCAB_N5_BUNDLE } from '../../data/n5/vocabN5'
import { VERIFIED_ROADMAP_STAGES, VERIFIED_ROADMAP_TOTAL } from '../../data/roadmap/verifiedStages'
import type { ContentCard } from '../content/types'
import type { ProgressRecord } from '../learning/types'
import { createInitialProgress } from '../progress/progress'
import { deriveRoadmap } from './roadmap'

const NOW = 50_000_000
let cards: ContentCard[] = []

beforeAll(async () => {
  const openJlpt = await loadOpenJlptBundles()
  cards = [
    ...KANA_BASIC_BUNDLE.cards,
    ...VOCAB_N5_BUNDLE.cards,
    ...KANJI_N5_BUNDLE.cards,
    ...openJlpt.flatMap((bundle) => bundle.cards),
  ]
})

function mastered(card: ContentCard): ProgressRecord {
  const base = createInitialProgress(card.cardId, NOW - 10_000)
  return {
    ...base,
    attempts: 6,
    correctCount: 6,
    currentCorrectStreak: 6,
    accuracy: 1,
    lastReviewedAt: NOW - 1_000,
    nextReviewAt: NOW + 604_800_000,
    mastery: 'mastered',
    srs: {
      ...base.srs,
      level: 5,
      intervalMinutes: 10_080,
      lastReviewAt: NOW - 1_000,
      dueAt: NOW + 604_800_000,
    },
    updatedAt: NOW - 1_000,
  }
}

function studied(card: ContentCard): ProgressRecord {
  const base = createInitialProgress(card.cardId, NOW - 2_000)
  return {
    ...base,
    attempts: 1,
    correctCount: 1,
    currentCorrectStreak: 1,
    accuracy: 1,
    lastReviewedAt: NOW - 1_000,
    nextReviewAt: NOW + 14_400_000,
    mastery: 'learning',
    srs: {
      ...base.srs,
      level: 1,
      intervalMinutes: 240,
      lastReviewAt: NOW - 1_000,
      dueAt: NOW + 14_400_000,
    },
    updatedAt: NOW - 1_000,
  }
}

describe('canonical learner roadmap', () => {
  it('contains all active sourced stages and exact retained card totals', () => {
    const snapshot = deriveRoadmap(cards, [], NOW, VERIFIED_ROADMAP_STAGES)
    expect(VERIFIED_ROADMAP_TOTAL).toBe(3867)
    expect(snapshot.stages.map((stage) => [stage.stageId, stage.totalCards])).toEqual([
      ['hiragana', 46],
      ['katakana', 46],
      ['n5-vocabulary', 923],
      ['n5-kanji', 109],
      ['n4-open-study', 709],
      ['n3-open-study', 2034],
    ])
    expect(snapshot.suggestedStageId).toBe('hiragana')
    expect(snapshot.completedStages).toBe(0)
  })

  it('does not mark a stage complete merely because cards were seen', () => {
    const hiragana = cards.filter((card) => card.topicId === 'kana-hiragana-main')
    const snapshot = deriveRoadmap(cards, hiragana.slice(0, 45).map(mastered).concat(studied(hiragana[45])), NOW, VERIFIED_ROADMAP_STAGES)
    const stage = snapshot.stages[0]
    expect(stage.studiedCards).toBe(46)
    expect(stage.masteredCards).toBe(45)
    expect(stage.status).toBe('in-progress')
    expect(snapshot.suggestedStageId).toBe('hiragana')
  })

  it('advances the suggestion only after the entire prior stage is mastered', () => {
    const hiragana = cards.filter((card) => card.topicId === 'kana-hiragana-main')
    const katakanaFirst = cards.find((card) => card.topicId === 'kana-katakana-main')!
    const snapshot = deriveRoadmap(cards, [...hiragana.map(mastered), studied(katakanaFirst)], NOW, VERIFIED_ROADMAP_STAGES)
    expect(snapshot.stages[0].status).toBe('complete')
    expect(snapshot.stages[1].status).toBe('in-progress')
    expect(snapshot.suggestedStageId).toBe('katakana')
    expect(snapshot.completedStages).toBe(1)
  })
})
