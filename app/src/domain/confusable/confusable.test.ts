import { describe, expect, it } from 'vitest'
import { KANA_BASIC_BUNDLE } from '../../data/n5/kanaBasic'
import { CONFUSABLE_KANA_GROUPS } from '../../data/practice/confusableKana'
import { buildConfusableQuestions } from './confusable'

describe('confusable domain', () => {
  it('resolves every migrated legacy group against canonical Kana cards', () => {
    const questions = buildConfusableQuestions(KANA_BASIC_BUNDLE.cards, CONFUSABLE_KANA_GROUPS, 'all', 100)
    expect(questions).toHaveLength(31)
    expect(questions.every((question) => question.card.romanizations.includes(question.romanization))).toBe(true)
  })

  it('keeps script filtering deterministic', () => {
    expect(buildConfusableQuestions(KANA_BASIC_BUNDLE.cards, CONFUSABLE_KANA_GROUPS, 'katakana', 100)).toHaveLength(16)
    expect(buildConfusableQuestions(KANA_BASIC_BUNDLE.cards, CONFUSABLE_KANA_GROUPS, 'hiragana', 100)).toHaveLength(15)
  })

  it('preserves the verified first legacy pair exactly', () => {
    const question = buildConfusableQuestions(KANA_BASIC_BUNDLE.cards, CONFUSABLE_KANA_GROUPS, 'katakana', 1)[0]
    expect(question.romanization).toBe('shi')
    expect(question.card.character).toBe('シ')
    expect(question.options).toEqual(['シ', 'ツ'])
  })
})
