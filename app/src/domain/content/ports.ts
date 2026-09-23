import type { CardId } from '../learning/types'
import type { ContentCard } from './types'

export interface ContentRepository {
  getCard(cardId: CardId): ContentCard | undefined
  listCards(): ContentCard[]
  listByTopic(topicId: string): ContentCard[]
  listByType(contentType: ContentCard['contentType']): ContentCard[]
}
