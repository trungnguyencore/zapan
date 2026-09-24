import { describe, expect, it } from 'vitest'
import { KANA_BASIC_BUNDLE } from '../../data/n5/kanaBasic'
import { KANJI_N5_BUNDLE } from '../../data/n5/kanjiN5'
import { VOCAB_N5_BUNDLE } from '../../data/n5/vocabN5'
import { filterLibraryCards } from './libraryFilter'

const cards = [
  ...KANA_BASIC_BUNDLE.cards,
  ...VOCAB_N5_BUNDLE.cards,
  ...KANJI_N5_BUNDLE.cards,
]

describe('filterLibraryCards', () => {
  it('returns the complete verified repository when no filter is active', () => {
    expect(filterLibraryCards(cards, '', 'all')).toHaveLength(1124)
  })

  it('filters by canonical content type', () => {
    expect(filterLibraryCards(cards, '', 'kana')).toHaveLength(92)
    expect(filterLibraryCards(cards, '', 'vocabulary')).toHaveLength(923)
    expect(filterLibraryCards(cards, '', 'kanji')).toHaveLength(109)
  })

  it('searches only actual audited fields across content types', () => {
    expect(filterLibraryCards(cards, 'いつつ', 'all').some((card) => card.contentType === 'vocabulary' && card.term === '五つ')).toBe(true)
    expect(filterLibraryCards(cards, 'Nhất', 'kanji').some((card) => card.contentType === 'kanji' && card.character === '一')).toBe(true)
    expect(filterLibraryCards(cards, 'shi', 'kana').some((card) => card.contentType === 'kana' && card.character === 'し')).toBe(true)
  })

  it('normalizes query whitespace and case without rewriting source content', () => {
    const result = filterLibraryCards(cards, '  SHI  ', 'kana')
    expect(result.some((card) => card.contentType === 'kana' && card.character === 'し')).toBe(true)
  })
})
