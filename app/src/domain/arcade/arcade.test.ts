import { describe, expect, it } from 'vitest'
import { KANA_BASIC_BUNDLE } from '../../data/n5/kanaBasic'
import { buildArcadeQueue, nextSurvivalLives, remainingSeconds } from './arcade'

describe('arcade domain', () => {
  it('builds a bounded deterministic topic queue', () => {
    const queue = buildArcadeQueue(KANA_BASIC_BUNDLE.cards, 'kana-hiragana-main', 5)
    expect(queue.map((card) => card.contentType === 'kana' ? card.character : '')).toEqual(['あ', 'い', 'う', 'え', 'お'])
  })

  it('calculates a ceiling countdown from an absolute deadline', () => {
    expect(remainingSeconds(31_000, 1_001)).toBe(30)
    expect(remainingSeconds(31_000, 30_999)).toBe(1)
    expect(remainingSeconds(31_000, 31_000)).toBe(0)
  })

  it('only consumes a Survival life for an incorrect answer', () => {
    expect(nextSurvivalLives(3, true)).toBe(3)
    expect(nextSurvivalLives(3, false)).toBe(2)
    expect(nextSurvivalLives(0, false)).toBe(0)
  })
})
