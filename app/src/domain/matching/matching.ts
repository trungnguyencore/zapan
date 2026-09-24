import { primaryMeaning } from '../content/meaning'
import type { ContentCard } from '../content/types'

export interface MatchPair {
  card: ContentCard
  prompt: string
  answer: string
}

function labelsFor(card: ContentCard): { prompt: string; answer: string } {
  if (card.contentType === 'kana') return { prompt: card.character, answer: card.romanizations[0] ?? '' }
  if (card.contentType === 'vocabulary') return { prompt: card.term, answer: primaryMeaning(card) }
  if (card.contentType === 'kanji') return { prompt: card.character, answer: primaryMeaning(card) }
  throw new Error('Match supports Kana, Vocabulary and Kanji cards only')
}

export function buildMatchPairs(
  cards: readonly ContentCard[],
  topicId: string,
  limit = 6,
): MatchPair[] {
  if (!topicId || !Number.isFinite(limit) || limit <= 0) return []
  const output: MatchPair[] = []
  const usedAnswers = new Set<string>()

  for (const card of cards) {
    if (card.topicId !== topicId) continue
    const labels = labelsFor(card)
    if (!labels.answer || usedAnswers.has(labels.answer)) continue
    usedAnswers.add(labels.answer)
    output.push({ card, ...labels })
    if (output.length >= Math.floor(limit)) break
  }

  return output
}

export function rotateMatchAnswers(pairs: readonly MatchPair[], offset = 2): MatchPair[] {
  if (pairs.length <= 1) return [...pairs]
  const normalized = ((Math.trunc(offset) % pairs.length) + pairs.length) % pairs.length
  if (normalized === 0) return [...pairs]
  return [...pairs.slice(normalized), ...pairs.slice(0, normalized)]
}
