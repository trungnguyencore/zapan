import type { ContentCard } from '../content/types'

export interface AnswerCheck {
  correct: boolean
  normalizedInput: string
  acceptedAnswers: string[]
}

function normalize(value: string): string {
  return value.trim().toLowerCase().replace(/\s+/g, ' ')
}

export function acceptedAnswersFor(card: ContentCard): string[] {
  if (card.contentType === 'kana') return card.romanizations.map(normalize)
  if (card.contentType === 'vocabulary') return card.readings.map(normalize)
  if (card.contentType === 'kanji') return card.readings.map(normalize)
  return []
}

export function checkTypedAnswer(card: ContentCard, input: string): AnswerCheck {
  const normalizedInput = normalize(input)
  const acceptedAnswers = acceptedAnswersFor(card)
  return {
    correct: normalizedInput.length > 0 && acceptedAnswers.includes(normalizedInput),
    normalizedInput,
    acceptedAnswers,
  }
}
