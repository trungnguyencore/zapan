import type { CardId, ContentLevel, ContentType } from './types'

const SEGMENT = /^[a-z0-9][a-z0-9-]*$/

export interface CardIdentityParts {
  level: ContentLevel
  contentType: ContentType
  sourceKey: string
  itemKey: string
}

function normalizeSegment(value: string, label: string): string {
  const normalized = value.trim().toLowerCase()
  if (!SEGMENT.test(normalized)) {
    throw new Error(`${label} must be a lowercase slug containing only a-z, 0-9, and hyphens`)
  }
  return normalized
}

export function createCardId(parts: CardIdentityParts): CardId {
  const sourceKey = normalizeSegment(parts.sourceKey, 'sourceKey')
  const itemKey = normalizeSegment(parts.itemKey, 'itemKey')
  return `${parts.level}:${parts.contentType}:${sourceKey}:${itemKey}` as CardId
}

export function parseCardId(cardId: string): CardIdentityParts {
  const [level, contentType, sourceKey, itemKey, extra] = cardId.split(':')
  if (extra || !level || !contentType || !sourceKey || !itemKey) throw new Error('Invalid cardId shape')
  const levels: ContentLevel[] = ['foundation', 'n5', 'n4', 'n3']
  const types: ContentType[] = ['kana', 'vocabulary', 'kanji', 'grammar', 'reading', 'listening']
  if (!levels.includes(level as ContentLevel) || !types.includes(contentType as ContentType)) throw new Error('Invalid cardId domain')
  return { level: level as ContentLevel, contentType: contentType as ContentType, sourceKey: normalizeSegment(sourceKey, 'sourceKey'), itemKey: normalizeSegment(itemKey, 'itemKey') }
}
