import { describe, expect, it } from 'vitest'
import { parseCardId } from '../../domain/learning/cardId'
import { VOCAB_N5_BUNDLE, VOCAB_N5_TOPICS } from './vocabN5'

describe('VOCAB_N5_BUNDLE', () => {
  it('contains the audited 923 cards across 15 topics', () => {
    expect(VOCAB_N5_BUNDLE.cards).toHaveLength(923)
    expect(VOCAB_N5_TOPICS).toHaveLength(15)
    expect(VOCAB_N5_TOPICS.reduce((sum, topic) => sum + topic.count, 0)).toBe(923)
  })

  it('uses unique canonical N5 vocabulary card ids', () => {
    const ids = VOCAB_N5_BUNDLE.cards.map((card) => card.cardId)
    expect(new Set(ids).size).toBe(923)
    for (const id of ids) {
      const parsed = parseCardId(id)
      expect(parsed.level).toBe('n5')
      expect(parsed.contentType).toBe('vocabulary')
      expect(parsed.sourceKey).toBe('vocab-n5-v1')
    }
  })

  it('normalizes packed reading delimiters without changing term meaning data', () => {
    const age20 = VOCAB_N5_BUNDLE.cards.find((card) => card.contentType === 'vocabulary' && card.term === '二十歳')
    const oneDay = VOCAB_N5_BUNDLE.cards.find((card) => card.contentType === 'vocabulary' && card.term === '一日')
    expect(age20?.contentType === 'vocabulary' ? age20.readings : []).toEqual(['はたち', 'にじゅっさい'])
    expect(oneDay?.contentType === 'vocabulary' ? oneDay.readings : []).toEqual(['いちにち', 'ついたち'])
    expect(age20?.contentType === 'vocabulary' ? age20.meanings.vi : '').toBe('20 tuổi')
  })

  it('contains no remaining packed reading delimiters or empty values', () => {
    for (const card of VOCAB_N5_BUNDLE.cards) {
      expect(card.contentType).toBe('vocabulary')
      if (card.contentType !== 'vocabulary') continue
      expect(card.term.trim().length).toBeGreaterThan(0)
      expect(card.meanings.vi.trim().length).toBeGreaterThan(0)
      expect(card.readings.length).toBeGreaterThan(0)
      for (const reading of card.readings) {
        expect(reading.trim().length).toBeGreaterThan(0)
        expect(reading).not.toMatch(/[,，、]/)
      }
    }
  })
})
