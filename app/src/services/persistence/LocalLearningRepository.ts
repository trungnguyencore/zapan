import type { LearningRepository } from '../../domain/learning/ports'
import type { CardId, ProgressRecord, StudyEvent, StudySession } from '../../domain/learning/types'
import { createInitialProgress, applyStudyEvent } from '../../domain/progress/progress'
import type { ZaPanDatabase } from './database'

function sameEvent(a: StudyEvent, b: StudyEvent): boolean {
  return a.eventId === b.eventId && a.sessionId === b.sessionId && a.cardId === b.cardId &&
    a.mode === b.mode && a.result === b.result && a.rating === b.rating &&
    a.responseTimeMs === b.responseTimeMs && a.occurredAt === b.occurredAt &&
    a.inputKind === b.inputKind && a.schemaVersion === b.schemaVersion
}

function sameSession(a: StudySession, b: StudySession): boolean {
  return a.sessionId === b.sessionId && a.userId === b.userId && a.mode === b.mode &&
    a.startedAt === b.startedAt && a.endedAt === b.endedAt && a.schemaVersion === b.schemaVersion &&
    a.eventIds.length === b.eventIds.length && a.eventIds.every((id, index) => id === b.eventIds[index])
}

export class LocalLearningRepository implements LearningRepository {
  private readonly db: ZaPanDatabase

  constructor(db: ZaPanDatabase) {
    this.db = db
  }

  async createSession(session: StudySession): Promise<void> {
    await this.db.transaction('rw', this.db.sessions, async () => {
      const existing = await this.db.sessions.get(session.sessionId)
      if (existing) {
        if (!sameSession(existing, session)) throw new Error('Conflicting sessionId already exists')
        return
      }
      await this.db.sessions.add(session)
    })
  }

  getSession(sessionId: string): Promise<StudySession | undefined> {
    return this.db.sessions.get(sessionId)
  }

  async completeSession(sessionId: string, endedAt: number): Promise<StudySession> {
    return this.db.transaction('rw', this.db.sessions, async () => {
      const session = await this.db.sessions.get(sessionId)
      if (!session) throw new Error('Session does not exist')
      if (!Number.isFinite(endedAt) || endedAt < session.startedAt) throw new Error('endedAt must be after session start')
      if (session.endedAt !== null && session.endedAt !== endedAt) throw new Error('Session is already completed at a different time')
      const completed = { ...session, endedAt }
      await this.db.sessions.put(completed)
      return completed
    })
  }

  async recordEvent(event: StudyEvent): Promise<ProgressRecord> {
    return this.db.transaction('rw', this.db.events, this.db.progress, this.db.sessions, async () => {
      const session = await this.db.sessions.get(event.sessionId)
      if (!session) throw new Error('StudyEvent references a missing session')
      if (event.occurredAt < session.startedAt) throw new Error('StudyEvent occurred before session start')
      if (session.endedAt !== null && event.occurredAt > session.endedAt) throw new Error('StudyEvent occurred after session end')

      const existingEvent = await this.db.events.get(event.eventId)
      if (existingEvent) {
        if (!sameEvent(existingEvent, event)) throw new Error('Conflicting eventId already exists')
        const existingProgress = await this.db.progress.get(event.cardId)
        if (!existingProgress) throw new Error('Stored event is missing its progress snapshot')
        return existingProgress
      }

      const current = await this.db.progress.get(event.cardId) ?? createInitialProgress(event.cardId, event.occurredAt)
      if (current.lastReviewedAt !== null && event.occurredAt < current.lastReviewedAt) {
        throw new Error('Out-of-order local event would regress progress; replay is required')
      }

      const updated = applyStudyEvent(current, event)
      await this.db.events.add(event)
      await this.db.progress.put(updated)
      await this.db.sessions.put({ ...session, eventIds: [...session.eventIds, event.eventId] })
      return updated
    })
  }

  getEvent(eventId: string): Promise<StudyEvent | undefined> {
    return this.db.events.get(eventId)
  }

  listEvents(): Promise<StudyEvent[]> {
    return this.db.events.toArray()
  }

  async mergeEvents(events: readonly StudyEvent[]): Promise<ProgressRecord[]> {
    if (events.length === 0) return []
    return this.db.transaction('rw', this.db.events, this.db.progress, async () => {
      const affected = new Set<CardId>()
      for (const incoming of events) {
        const existing = await this.db.events.get(incoming.eventId)
        if (existing) {
          if (!sameEvent(existing, incoming)) throw new Error('Conflicting eventId already exists')
        } else {
          await this.db.events.add(incoming)
        }
        affected.add(incoming.cardId)
      }

      const rebuilt: ProgressRecord[] = []
      for (const cardId of affected) {
        const cardEvents = await this.db.events.where('cardId').equals(cardId).toArray()
        cardEvents.sort((a, b) => a.occurredAt - b.occurredAt || a.eventId.localeCompare(b.eventId))
        if (cardEvents.length === 0) continue
        let progress = createInitialProgress(cardId, cardEvents[0].occurredAt)
        for (const studyEvent of cardEvents) progress = applyStudyEvent(progress, studyEvent)
        await this.db.progress.put(progress)
        rebuilt.push(progress)
      }
      return rebuilt
    })
  }

  getProgress(cardId: CardId): Promise<ProgressRecord | undefined> {
    return this.db.progress.get(cardId)
  }

  listProgress(): Promise<ProgressRecord[]> {
    return this.db.progress.toArray()
  }

  async listDueProgress(now: number): Promise<ProgressRecord[]> {
    const records = await this.db.progress.where('nextReviewAt').belowOrEqual(now).toArray()
    return records.filter((record) => record.attempts > 0).sort((a, b) => a.nextReviewAt - b.nextReviewAt || a.updatedAt - b.updatedAt)
  }
}
