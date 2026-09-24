import type { CardId, ContentLevel } from '../learning/types'

interface BaseContentCard {
  cardId: CardId
  schemaVersion: 1
  sourceVersion: string
  level: ContentLevel
  topicId: string
}

export interface KanaContentCard extends BaseContentCard {
  contentType: 'kana'
  script: 'hiragana' | 'katakana'
  group: 'main' | 'dakuten' | 'combination'
  character: string
  romanizations: string[]
}

export interface VocabularyContentCard extends BaseContentCard {
  contentType: 'vocabulary'
  term: string
  readings: string[]
  meanings: { vi?: string; en?: string }
}

export interface KanjiContentCard extends BaseContentCard {
  contentType: 'kanji'
  character: string
  readings: string[]
  onYomi: string
  kunYomi: string
  meanings: { vi?: string; en?: string }
  hanViet?: string
  strokeCount: number
  mnemonic?: string
}

export type ContentCard = KanaContentCard | VocabularyContentCard | KanjiContentCard

export interface ContentBundle {
  bundleId: string
  schemaVersion: 1
  sourceVersion: string
  cards: ContentCard[]
}
