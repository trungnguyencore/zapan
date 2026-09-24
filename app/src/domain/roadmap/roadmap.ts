import type { ContentCard } from '../content/types'
import type { ProgressRecord } from '../learning/types'
import { deriveLearningOverview } from '../progress/overview'

export type RoadmapStageStatus = 'not-started' | 'in-progress' | 'complete'

export interface RoadmapStageDefinition {
  stageId: 'hiragana' | 'katakana' | 'n5-vocabulary' | 'n5-kanji'
  order: number
  eyebrow: string
  title: string
  description: string
  topicIds: readonly string[]
  learnPath: string
}

export interface RoadmapStageSnapshot extends RoadmapStageDefinition {
  totalCards: number
  studiedCards: number
  masteredCards: number
  dueCards: number
  weakCards: number
  status: RoadmapStageStatus
}

export interface RoadmapSnapshot {
  stages: RoadmapStageSnapshot[]
  suggestedStageId: RoadmapStageDefinition['stageId'] | null
  completedStages: number
}

export function deriveRoadmap(
  cards: readonly ContentCard[],
  progress: readonly ProgressRecord[],
  now: number,
  definitions: readonly RoadmapStageDefinition[],
): RoadmapSnapshot {
  const stages = definitions.map((definition) => {
    const topics = new Set(definition.topicIds)
    const scopedCards = cards.filter((card) => topics.has(card.topicId))
    const overview = deriveLearningOverview(scopedCards, progress, now)
    const complete = scopedCards.length > 0 && overview.masteredCards === scopedCards.length
    const status: RoadmapStageStatus = complete
      ? 'complete'
      : overview.studiedCards > 0 ? 'in-progress' : 'not-started'

    return {
      ...definition,
      totalCards: scopedCards.length,
      studiedCards: overview.studiedCards,
      masteredCards: overview.masteredCards,
      dueCards: overview.dueCards,
      weakCards: overview.weakCards,
      status,
    }
  })

  return {
    stages,
    suggestedStageId: stages.find((stage) => stage.status !== 'complete')?.stageId ?? null,
    completedStages: stages.filter((stage) => stage.status === 'complete').length,
  }
}
