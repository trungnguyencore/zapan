import type { ContentCard } from '../content/types'

export type WritingStyle = 'trace' | 'copy' | 'recall'

export function buildWritingQueue(
  cards: readonly ContentCard[],
  topicId: string,
  limit = 5,
): ContentCard[] {
  if (!topicId || limit <= 0) return []
  return cards
    .filter((card) => card.topicId === topicId && (card.contentType === 'kana' || card.contentType === 'kanji'))
    .slice(0, Math.floor(limit))
}

export function writingCharacter(card: ContentCard): string {
  if (card.contentType === 'kana' || card.contentType === 'kanji') return card.character
  throw new Error('Writing practice supports Kana and Kanji cards only')
}

export function strokeOrderAssetUrl(character: string): string | null {
  const codePoint = Array.from(character)[0]?.codePointAt(0)
  if (codePoint === undefined) return null
  return `https://raw.githubusercontent.com/KanjiVG/kanjivg/master/kanji/${codePoint.toString(16).padStart(5, '0')}.svg`
}
