import { describe, expect, it } from 'vitest'
import { KANA_BASIC_BUNDLE } from '../../data/n5/kanaBasic'
import { KANJI_N5_BUNDLE } from '../../data/n5/kanjiN5'
import { VOCAB_N5_BUNDLE } from '../../data/n5/vocabN5'
import { buildMatchPairs, rotateMatchAnswers } from './matching'

const cards = [...KANA_BASIC_BUNDLE.cards, ...VOCAB_N5_BUNDLE.cards, ...KANJI_N5_BUNDLE.cards]

describe('matching domain', () => {
  it('builds deterministic Kana pairs from canonical romaji', () => {
    const pairs = buildMatchPairs(cards, 'kana-hiragana-main', 3)
    expect(pairs.map((pair) => [pair.prompt, pair.answer])).toEqual([
      ['あ', 'a'],
      ['い', 'i'],
      ['う', 'u'],
    ])
  })

  it('uses audited Vietnamese meanings for Vocabulary and Kanji answers', () => {
    expect(buildMatchPairs(cards, 'vocab-n5-numbers', 1)[0]).toMatchObject({ prompt: '五つ', answer: 'năm cái ( đếm đồ vật nói chung)' })
    expect(buildMatchPairs(cards, 'kanji-n5-numbers', 1)[0]).toMatchObject({ prompt: '一', answer: 'Một' })
  })

  it('rotates answer order deterministically without changing pair identity', () => {
    const pairs = buildMatchPairs(cards, 'kana-hiragana-main', 4)
    const rotated = rotateMatchAnswers(pairs, 2)
    expect(rotated.map((pair) => pair.card.cardId)).toEqual([
      pairs[2].card.cardId,
      pairs[3].card.cardId,
      pairs[0].card.cardId,
      pairs[1].card.cardId,
    ])
  })
})
