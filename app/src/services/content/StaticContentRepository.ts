import type { ContentRepository } from '../../domain/content/ports'
import type { ContentBundle, ContentCard } from '../../domain/content/types'
import type { CardId } from '../../domain/learning/types'

export class StaticContentRepository implements ContentRepository {
  private readonly cards: ContentCard[]
  private readonly byId: Map<CardId, ContentCard>

  constructor(bundles: readonly ContentBundle[]) {
    this.cards = bundles.flatMap((bundle) => bundle.cards)
    this.byId = new Map()
    for (const card of this.cards) {
      if (this.byId.has(card.cardId)) throw new Error(`Duplicate cardId across bundles: ${card.cardId}`)
      this.byId.set(card.cardId, card)
    }
  }

  getCard(cardId: CardId): ContentCard | undefined {
    return this.byId.get(cardId)
  }

  listCards(): ContentCard[] {
    return [...this.cards]
  }

  listByTopic(topicId: string): ContentCard[] {
    return this.cards.filter((card) => card.topicId === topicId)
  }

  listByType(contentType: ContentCard['contentType']): ContentCard[] {
    return this.cards.filter((card) => card.contentType === contentType)
  }
}
