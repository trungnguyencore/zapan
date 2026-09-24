import { primaryMeaning } from './meaning'
import type { ContentCard } from './types'

export type LibraryContentFilter = 'all' | ContentCard['contentType']

function searchableText(card: ContentCard): string {
  if (card.contentType === 'kana') {
    return [card.character, card.script, card.group, ...card.romanizations].join(' ')
  }
  if (card.contentType === 'vocabulary') {
    return [card.term, ...card.readings, primaryMeaning(card), card.meanings.vi ?? '', card.meanings.en ?? ''].join(' ')
  }
  return [
    card.character,
    ...card.readings,
    card.onYomi,
    card.kunYomi,
    primaryMeaning(card),
    card.meanings.vi ?? '',
    card.meanings.en ?? '',
    card.hanViet ?? '',
  ].join(' ')
}

export function filterLibraryCards(
  cards: readonly ContentCard[],
  query: string,
  contentType: LibraryContentFilter,
): ContentCard[] {
  const normalizedQuery = query.trim().toLocaleLowerCase('vi')
  return cards.filter((card) => {
    if (contentType !== 'all' && card.contentType !== contentType) return false
    if (!normalizedQuery) return true
    return searchableText(card).toLocaleLowerCase('vi').includes(normalizedQuery)
  })
}
