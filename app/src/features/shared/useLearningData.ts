import { useCallback, useEffect, useState } from 'react'
import type { ContentRepository } from '../../domain/content/ports'
import type { ContentCard } from '../../domain/content/types'
import type { LearningRepository } from '../../domain/learning/ports'
import type { ProgressRecord, StudyEvent } from '../../domain/learning/types'
import { deriveLearningOverview, type LearningOverview } from '../../domain/progress/overview'
import { useAppServices } from '../../app/AppServicesContext'

interface LearningDataState {
  loading: boolean
  error: string | null
  cards: ContentCard[]
  progress: ProgressRecord[]
  events: StudyEvent[]
  overview: LearningOverview
  capturedAt: number
}

const EMPTY_OVERVIEW: LearningOverview = { totalCards: 0, studiedCards: 0, unseenCards: 0, dueCards: 0, weakCards: 0, masteredCards: 0, attempts: 0, correctCount: 0, accuracy: null }

async function loadSnapshot(content: ContentRepository, learning: LearningRepository): Promise<LearningDataState> {
  const cards = content.listCards()
  const [progress, events] = await Promise.all([learning.listProgress(), learning.listEvents()])
  const capturedAt = Date.now()
  return { loading: false, error: null, cards, progress, events, overview: deriveLearningOverview(cards, progress, capturedAt), capturedAt }
}

export function useLearningData(): LearningDataState & { refresh: () => Promise<void> } {
  const { content, learning } = useAppServices()
  const [state, setState] = useState<LearningDataState>({ loading: true, error: null, cards: [], progress: [], events: [], overview: EMPTY_OVERVIEW, capturedAt: 0 })

  const refresh = useCallback(async () => {
    try { setState(await loadSnapshot(content, learning)) }
    catch (error) { setState((current) => ({ ...current, loading: false, error: error instanceof Error ? error.message : 'Không thể đọc dữ liệu học.' })) }
  }, [content, learning])

  useEffect(() => {
    let active = true
    void loadSnapshot(content, learning).then((next) => { if (active) setState(next) }).catch((error) => { if (active) setState((current) => ({ ...current, loading: false, error: error instanceof Error ? error.message : 'Không thể đọc dữ liệu học.' })) })
    return () => { active = false }
  }, [content, learning])

  return { ...state, refresh }
}
