import type { CardId, ProgressRecord, StudyEvent, StudySession } from './types'

export interface LearningRepository {
  createSession(session: StudySession): Promise<void>
  getSession(sessionId: string): Promise<StudySession | undefined>
  completeSession(sessionId: string, endedAt: number): Promise<StudySession>
  recordEvent(event: StudyEvent): Promise<ProgressRecord>
  getEvent(eventId: string): Promise<StudyEvent | undefined>
  listEvents(): Promise<StudyEvent[]>
  mergeEvents(events: readonly StudyEvent[]): Promise<ProgressRecord[]>
  getProgress(cardId: CardId): Promise<ProgressRecord | undefined>
  listProgress(): Promise<ProgressRecord[]>
  listDueProgress(now: number): Promise<ProgressRecord[]>
}
