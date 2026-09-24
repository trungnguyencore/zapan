import type { KanjiContentCard, VocabularyContentCard } from './types'

export type MeaningCard = VocabularyContentCard | KanjiContentCard

export function primaryMeaning(card: MeaningCard): string {
  const vi = card.meanings.vi?.trim()
  if (vi) return vi
  const en = card.meanings.en?.trim()
  if (en) return en
  throw new Error(`Content card has no display meaning: ${card.cardId}`)
}

export function meaningLanguage(card: MeaningCard): 'vi' | 'en' {
  return card.meanings.vi?.trim() ? 'vi' : 'en'
}
