import Dexie, { type Table } from 'dexie'
import type { ProgressRecord, StudyEvent, StudySession } from '../../domain/learning/types'

export class ZaPanDatabase extends Dexie {
  events!: Table<StudyEvent, string>
  progress!: Table<ProgressRecord, string>
  sessions!: Table<StudySession, string>

  constructor(name = 'zapan-v2') {
    super(name)

    this.version(1).stores({
      events: 'eventId, sessionId, cardId, occurredAt',
      progress: 'cardId, nextReviewAt, updatedAt, mastery',
      sessions: 'sessionId, userId, startedAt, endedAt',
    })
  }
}

export function createLocalDatabase(name?: string): ZaPanDatabase {
  return new ZaPanDatabase(name)
}
