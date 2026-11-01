import { describe, expect, it } from 'vitest'
import { KANA_BASIC_BUNDLE } from '../../data/n5/kanaBasic'
import { buildMultipleChoiceOptions, checkTypedAnswer } from './answer'

describe('checkTypedAnswer', () => {
  it('accepts canonical kana romaji case-insensitively', () => {
    const card = KANA_BASIC_BUNDLE.cards[0]
    expect(checkTypedAnswer(card, ' A ').correct).toBe(true)
  })

  it('rejects wrong romaji and returns accepted answers', () => {
    const card = KANA_BASIC_BUNDLE.cards[0]
    const result = checkTypedAnswer(card, 'ka')
    expect(result.correct).toBe(false)
    expect(result.acceptedAnswers).toContain('a')
  })

  it('builds 4 distinct A B C D multiple-choice options with exactly 1 correct answer', () => {
    const card = KANA_BASIC_BUNDLE.cards[0]
    const options = buildMultipleChoiceOptions(card, KANA_BASIC_BUNDLE.cards, 0)
    expect(options.map((item) => item.key)).toEqual(['A', 'B', 'C', 'D'])
    expect(options.filter((item) => item.isCorrect)).toHaveLength(1)
    expect(options.find((item) => item.isCorrect)?.value).toBe('a')
    expect(new Set(options.map((item) => item.value)).size).toBe(4)
  })
})
