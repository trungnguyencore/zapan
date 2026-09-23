import { describe, expect, it } from 'vitest'
import { parseCardId } from '../../domain/learning/cardId'
import { KANA_BASIC_BUNDLE } from './kanaBasic'

describe('KANA_BASIC_BUNDLE', () => {
  it('contains exactly 46 hiragana and 46 katakana main cards', () => {
    const hira = KANA_BASIC_BUNDLE.cards.filter((card) => card.contentType === 'kana' && card.script === 'hiragana')
    const kata = KANA_BASIC_BUNDLE.cards.filter((card) => card.contentType === 'kana' && card.script === 'katakana')
    expect(hira).toHaveLength(46)
    expect(kata).toHaveLength(46)
    expect(KANA_BASIC_BUNDLE.cards).toHaveLength(92)
  })

  it('has unique stable card ids that parse through the canonical identity helper', () => {
    const ids = KANA_BASIC_BUNDLE.cards.map((card) => card.cardId)
    expect(new Set(ids).size).toBe(ids.length)
    for (const id of ids) expect(parseCardId(id).contentType).toBe('kana')
  })

  it('preserves accepted romanization variants from the audited main reference set', () => {
    const shi = KANA_BASIC_BUNDLE.cards.find((card) => card.cardId.endsWith(':hira-shi'))
    const tsu = KANA_BASIC_BUNDLE.cards.find((card) => card.cardId.endsWith(':kata-tsu'))
    const n = KANA_BASIC_BUNDLE.cards.find((card) => card.cardId.endsWith(':hira-n'))
    expect(shi?.contentType === 'kana' ? shi.romanizations : []).toEqual(['shi', 'si'])
    expect(tsu?.contentType === 'kana' ? tsu.romanizations : []).toEqual(['tsu', 'tu'])
    expect(n?.contentType === 'kana' ? n.romanizations : []).toEqual(['n', 'nn'])
  })
})
