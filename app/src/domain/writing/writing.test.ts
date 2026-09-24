import { describe, expect, it } from 'vitest'
import { KANA_BASIC_BUNDLE } from '../../data/n5/kanaBasic'
import { KANJI_N5_BUNDLE } from '../../data/n5/kanjiN5'
import { VOCAB_N5_BUNDLE } from '../../data/n5/vocabN5'
import { buildWritingQueue, strokeOrderAssetUrl, writingCharacter } from './writing'

const cards = [...KANA_BASIC_BUNDLE.cards, ...VOCAB_N5_BUNDLE.cards, ...KANJI_N5_BUNDLE.cards]

describe('writing domain', () => {
  it('builds only Kana/Kanji cards for the selected topic', () => {
    expect(buildWritingQueue(cards, 'kana-hiragana-main', 5).map(writingCharacter)).toEqual(['あ', 'い', 'う', 'え', 'お'])
    expect(buildWritingQueue(cards, 'kanji-n5-numbers', 3).map(writingCharacter)).toEqual(['一', '二', '三'])
    expect(buildWritingQueue(cards, 'vocab-n5-numbers', 5)).toEqual([])
  })

  it('returns no writing queue without an explicit topic', () => {
    expect(buildWritingQueue(cards, '', 5)).toEqual([])
  })

  it('builds a codepoint-based KanjiVG asset URL without executing SVG markup', () => {
    expect(strokeOrderAssetUrl('一')).toBe('https://raw.githubusercontent.com/KanjiVG/kanjivg/master/kanji/04e00.svg')
    expect(strokeOrderAssetUrl('あ')).toBe('https://raw.githubusercontent.com/KanjiVG/kanjivg/master/kanji/03042.svg')
    expect(strokeOrderAssetUrl('')).toBeNull()
  })
})
