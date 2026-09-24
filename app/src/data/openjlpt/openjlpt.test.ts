import { describe, expect, it } from 'vitest'
import { KANJI_N5_BUNDLE } from '../n5/kanjiN5'
import { VOCAB_N5_BUNDLE } from '../n5/vocabN5'
import { primaryMeaning } from '../../domain/content/meaning'
import { parseCardId } from '../../domain/learning/cardId'
import {
  KANJI_N3_TOPIC_CATALOG,
  KANJI_N4_TOPIC_CATALOG,
  OPENJLPT_SOURCE_COMMIT,
  VOCAB_N3_TOPIC_CATALOG,
  VOCAB_N4_TOPIC_CATALOG,
} from './generated/catalog'
import { loadOpenJlptBundles } from './generated/loader'

describe('OpenJLPT pinned N4/N3 study sets', () => {
  it('pins the reviewed upstream commit and exact retained counts', async () => {
    expect(OPENJLPT_SOURCE_COMMIT).toBe('c42fd9fa3777bfc1775446f7c418d549dfd6e4cf')

    const bundles = await loadOpenJlptBundles()
    const cards = bundles.flatMap((bundle) => bundle.cards)
    const n4 = cards.filter((card) => card.level === 'n4')
    const n3 = cards.filter((card) => card.level === 'n3')

    expect(bundles).toHaveLength(33)
    expect(n4).toHaveLength(709)
    expect(n3).toHaveLength(2034)
    expect(cards).toHaveLength(2743)

    expect(VOCAB_N4_TOPIC_CATALOG.reduce((sum, topic) => sum + topic.count, 0)).toBe(569)
    expect(KANJI_N4_TOPIC_CATALOG.reduce((sum, topic) => sum + topic.count, 0)).toBe(140)
    expect(VOCAB_N3_TOPIC_CATALOG.reduce((sum, topic) => sum + topic.count, 0)).toBe(1668)
    expect(KANJI_N3_TOPIC_CATALOG.reduce((sum, topic) => sum + topic.count, 0)).toBe(366)
  })

  it('keeps generated ids unique and canonical', async () => {
    const cards = (await loadOpenJlptBundles()).flatMap((bundle) => bundle.cards)
    const ids = cards.map((card) => card.cardId)
    expect(new Set(ids).size).toBe(cards.length)

    for (const card of cards) {
      const parsed = parseCardId(card.cardId)
      expect(parsed.level).toBe(card.level)
      expect(parsed.contentType).toBe(card.contentType)
      expect(parsed.sourceKey).toMatch(/^openjlpt-c42fd9fa3777-n[34]-(vocab|kanji)-v1$/)
      expect(card.sourceVersion).toContain('openjlpt-c42fd9fa3777')
    }
  })

  it('retains source-backed readings and English meanings for every generated card', async () => {
    const cards = (await loadOpenJlptBundles()).flatMap((bundle) => bundle.cards)

    for (const card of cards) {
      expect(card.contentType).not.toBe('kana')
      if (card.contentType === 'kana') throw new Error(`OpenJLPT unexpectedly generated Kana: ${card.cardId}`)
      expect(primaryMeaning(card).trim().length).toBeGreaterThan(0)
      expect(card.meanings.en?.trim().length ?? 0).toBeGreaterThan(0)
      expect(card.meanings.vi).toBeUndefined()
      expect(card.readings.length).toBeGreaterThan(0)
      expect(card.readings.every((reading) => reading.trim().length > 0)).toBe(true)
      if (card.contentType === 'kanji') {
        expect(Array.from(card.character)).toHaveLength(1)
        expect(card.strokeCount).toBeGreaterThan(0)
      }
    }
  })

  it('uses lower-level prompt wins so generated SRS prompts do not duplicate N5 or each other', async () => {
    const cards = (await loadOpenJlptBundles()).flatMap((bundle) => bundle.cards)
    const generatedVocab = cards.filter((card) => card.contentType === 'vocabulary')
    const generatedKanji = cards.filter((card) => card.contentType === 'kanji')
    const n5Terms = new Set(VOCAB_N5_BUNDLE.cards.filter((card) => card.contentType === 'vocabulary').map((card) => card.term))
    const n5Characters = new Set(KANJI_N5_BUNDLE.cards.filter((card) => card.contentType === 'kanji').map((card) => card.character))

    expect(new Set(generatedVocab.map((card) => card.term)).size).toBe(generatedVocab.length)
    expect(new Set(generatedKanji.map((card) => card.character)).size).toBe(generatedKanji.length)
    expect(generatedVocab.some((card) => n5Terms.has(card.term))).toBe(false)
    expect(generatedKanji.some((card) => n5Characters.has(card.character))).toBe(false)
  })

  it('preserves representative source records after normalization', async () => {
    const cards = (await loadOpenJlptBundles()).flatMap((bundle) => bundle.cards)
    const ah = cards.find((card) => card.contentType === 'vocabulary' && card.level === 'n4' && card.term === 'あ')
    const same = cards.find((card) => card.contentType === 'kanji' && card.level === 'n4' && card.character === '同')

    expect(ah?.contentType === 'vocabulary' ? ah : null).toMatchObject({
      readings: ['あ'],
      meanings: { en: 'Ah' },
    })
    expect(same?.contentType === 'kanji' ? same : null).toMatchObject({
      strokeCount: 6,
      meanings: { en: 'same; agree; equal' },
    })
    expect(same?.contentType === 'kanji' ? same.readings : []).toContain('どう')
  })
})
