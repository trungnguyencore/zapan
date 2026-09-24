import { describe, expect, it } from 'vitest'
import { parseCardId } from '../../domain/learning/cardId'
import { KANJI_N5_BUNDLE, KANJI_N5_TOPICS } from './kanjiN5'

describe('KANJI_N5_BUNDLE', () => {
  it('contains the audited 109 Kanji across 10 topics', () => {
    expect(KANJI_N5_BUNDLE.cards).toHaveLength(109)
    expect(KANJI_N5_TOPICS).toHaveLength(10)
    expect(KANJI_N5_TOPICS.reduce((sum, topic) => sum + topic.count, 0)).toBe(109)
  })

  it('uses unique canonical N5 Kanji card ids', () => {
    const ids = KANJI_N5_BUNDLE.cards.map((card) => card.cardId)
    expect(new Set(ids).size).toBe(109)
    for (const id of ids) {
      const parsed = parseCardId(id)
      expect(parsed.level).toBe('n5')
      expect(parsed.contentType).toBe('kanji')
      expect(parsed.sourceKey).toBe('kanji-n5-v1')
    }
  })

  it('preserves the audited metadata and valid stroke counts', () => {
    for (const card of KANJI_N5_BUNDLE.cards) {
      expect(card.contentType).toBe('kanji')
      if (card.contentType !== 'kanji') continue
      expect(Array.from(card.character)).toHaveLength(1)
      expect(card.readings.length).toBeGreaterThan(0)
      expect(card.meanings.vi?.trim().length ?? 0).toBeGreaterThan(0)
      expect(card.meanings.en?.trim().length ?? 0).toBeGreaterThan(0)
      expect(card.hanViet?.trim().length ?? 0).toBeGreaterThan(0)
      expect(card.mnemonic?.trim().length ?? 0).toBeGreaterThan(0)
      expect(Number.isInteger(card.strokeCount)).toBe(true)
      expect(card.strokeCount).toBeGreaterThan(0)
    }
  })

  it('preserves exactly eight explicitly empty kunyomi fields from the source', () => {
    const emptyKun = KANJI_N5_BUNDLE.cards.filter((card) => card.contentType === 'kanji' && card.kunYomi === '')
    expect(emptyKun.map((card) => card.contentType === 'kanji' ? card.character : '')).toEqual(['百', '万', '週', '午', '毎', '気', '校', '電'])
  })

  it('preserves representative source metadata without converting mnemonic into fact', () => {
    const mountain = KANJI_N5_BUNDLE.cards.find((card) => card.contentType === 'kanji' && card.character === '山')
    expect(mountain?.contentType === 'kanji' ? mountain : null).toMatchObject({
      readings: ['やま', 'さん'],
      onYomi: 'サン',
      kunYomi: 'やま',
      meanings: { vi: 'Núi', en: 'Mountain' },
      hanViet: 'Sơn',
      strokeCount: 3,
      mnemonic: 'Ba đỉnh núi nhô lên, đỉnh giữa cao nhất',
    })
  })
})
