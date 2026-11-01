import type { ContentCard } from '../content/types'

export interface AnswerCheck {
  correct: boolean
  normalizedInput: string
  acceptedAnswers: string[]
}

export interface MultipleChoiceOption {
  key: 'A' | 'B' | 'C' | 'D'
  value: string
  isCorrect: boolean
}

const CHOICE_KEYS = ['A', 'B', 'C', 'D'] as const
const FALLBACK_KANA_ANSWERS = ['a', 'i', 'u', 'e', 'o', 'ka', 'ki', 'ku']
const FALLBACK_READING_ANSWERS = ['いち', 'に', 'さん', 'よん', 'ご', 'ろく', 'なな', 'はち']

function normalize(value: string): string {
  return value.trim().toLowerCase().replace(/\s+/g, ' ')
}

function hashText(text: string): number {
  let hash = 2166136261
  for (let index = 0; index < text.length; index += 1) {
    hash ^= text.charCodeAt(index)
    hash = Math.imul(hash, 16777619)
  }
  return Math.abs(hash)
}

export function primaryAnswerFor(card: ContentCard): string {
  if (card.contentType === 'kana') return card.romanizations[0] ?? ''
  return card.readings[0] ?? ''
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

export function buildMultipleChoiceOptions(
  target: ContentCard,
  pool: readonly ContentCard[],
  questionIndex = 0,
): MultipleChoiceOption[] {
  const correctValue = primaryAnswerFor(target)
  const targetAccepted = new Set(acceptedAnswersFor(target))
  const usedNormalized = new Set<string>(targetAccepted)

  const sameTopic = pool.filter(
    (card) => card.contentType === target.contentType && card.topicId === target.topicId && card.cardId !== target.cardId,
  )
  const sameType = pool.filter(
    (card) => card.contentType === target.contentType && card.topicId !== target.topicId,
  )

  const seed = hashText(`${target.cardId}:${questionIndex}`)
  const candidatePool = [...sameTopic, ...sameType]
  const distractors: string[] = []

  if (candidatePool.length > 0) {
    const startOffset = seed % candidatePool.length
    for (let step = 0; step < candidatePool.length && distractors.length < 3; step += 1) {
      const candidate = candidatePool[(startOffset + step * 7) % candidatePool.length]
      const value = primaryAnswerFor(candidate)
      const normalized = normalize(value)
      if (!normalized || usedNormalized.has(normalized)) continue
      usedNormalized.add(normalized)
      distractors.push(value)
    }
  }

  const fallbacks = target.contentType === 'kana' ? FALLBACK_KANA_ANSWERS : FALLBACK_READING_ANSWERS
  for (const value of fallbacks) {
    if (distractors.length >= 3) break
    const normalized = normalize(value)
    if (!normalized || usedNormalized.has(normalized)) continue
    usedNormalized.add(normalized)
    distractors.push(value)
  }

  const correctSlot = seed % 4
  let distractorCursor = 0

  return CHOICE_KEYS.map((key, slotIndex) => {
    if (slotIndex === correctSlot) {
      return { key, value: correctValue, isCorrect: true }
    }
    const value = distractors[distractorCursor] ?? ''
    distractorCursor += 1
    return { key, value, isCorrect: false }
  })
}
