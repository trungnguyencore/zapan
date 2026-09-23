export const SCHEMA_VERSION = 1 as const

export type CardId = string & { readonly __brand: 'CardId' }
export type ContentLevel = 'foundation' | 'n5' | 'n4' | 'n3'
export type ContentType = 'kana' | 'vocabulary' | 'kanji' | 'grammar' | 'reading' | 'listening'
export type StudyMode = 'today' | 'learn' | 'review' | 'custom' | 'writing' | 'time-attack' | 'survival' | 'match' | 'confusable'
export type StudyResult = 'correct' | 'incorrect' | 'skipped'
export type InputKind = 'typing' | 'multiple-choice' | 'self-grade' | 'matching' | 'drawing'
export type ReviewRating = 'again' | 'hard' | 'good' | 'easy'
export type MasteryState = 'unseen' | 'learning' | 'due' | 'weak' | 'mastered'
export type SrsLevel = 0 | 1 | 2 | 3 | 4 | 5 | 6

export interface SrsState {
  algorithmVersion: 1
  level: SrsLevel
  intervalMinutes: number
  lapses: number
  lastReviewAt: number | null
  dueAt: number
}

export interface StudyEvent {
  eventId: string
  sessionId: string
  cardId: CardId
  mode: StudyMode
  result: StudyResult
  rating?: ReviewRating
  responseTimeMs?: number
  occurredAt: number
  inputKind: InputKind
  schemaVersion: typeof SCHEMA_VERSION
}

export interface StudySession {
  sessionId: string
  userId: string
  mode: StudyMode
  startedAt: number
  endedAt: number | null
  eventIds: string[]
  schemaVersion: typeof SCHEMA_VERSION
}

export interface ProgressRecord {
  cardId: CardId
  attempts: number
  correctCount: number
  incorrectCount: number
  currentCorrectStreak: number
  accuracy: number
  averageResponseTimeMs: number | null
  responseTimeSampleCount: number
  lastReviewedAt: number | null
  nextReviewAt: number
  mastery: MasteryState
  srs: SrsState
  updatedAt: number
  schemaVersion: typeof SCHEMA_VERSION
}
