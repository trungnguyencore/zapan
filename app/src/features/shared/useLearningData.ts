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

interface LearningSnapshotState extends LearningDataState {
  source: LearningRepository | null
}

const EMPTY_OVERVIEW: LearningOverview = { totalCards: 0, studiedCards: 0, unseenCards: 0, dueCards: 0, weakCards: 0, masteredCards: 0, attempts: 0, correctCount: 0, accuracy: null }

async function loadSnapshot(content: ContentRepository, learning: LearningRepository): Promise<LearningSnapshotState> {
  const cards = content.listCards()
  const [progress, events] = await Promise.all([learning.listProgress(), learning.listEvents()])
  const capturedAt = Date.now()
  return { source: learning, loading: false, error: null, cards, progress, events, overview: deriveLearningOverview(cards, progress, capturedAt), capturedAt }
}

export function useLearningData(): LearningDataState & { refresh: () => Promise<void> } {
  const { content, learning } = useAppServices()
  const [state, setState] = useState<LearningSnapshotState>({ source: null, loading: true, error: null, cards: [], progress: [], events: [], overview: EMPTY_OVERVIEW, capturedAt: 0 })

  const refresh = useCallback(async () => {
    setState((current) => ({ ...current, loading: true, error: null }))
    try { setState(await loadSnapshot(content, learning)) }
    catch (error) { setState((current) => ({ ...current, source: learning, loading: false, error: error instanceof Error ? error.message : 'Không thể đọc dữ liệu học.' })) }
  }, [content, learning])

  useEffect(() => {
    let active = true
    void loadSnapshot(content, learning).then((next) => { if (active) setState(next) }).catch((error) => { if (active) setState((current) => ({ ...current, source: learning, loading: false, error: error instanceof Error ? error.message : 'Không thể đọc dữ liệu học.' })) })
    return () => { active = false }
  }, [content, learning])

  const currentSource = state.source === learning
  return {
    loading: state.loading || !currentSource,
    error: currentSource ? state.error : null,
    cards: currentSource ? state.cards : [],
    progress: currentSource ? state.progress : [],
    events: currentSource ? state.events : [],
    overview: currentSource ? state.overview : EMPTY_OVERVIEW,
    capturedAt: currentSource ? state.capturedAt : 0,
    refresh,
  }
}
