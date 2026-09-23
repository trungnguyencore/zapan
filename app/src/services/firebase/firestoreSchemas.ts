import { z } from 'zod'
import type { StudyEvent } from '../../domain/learning/types'

const studyEventSchema = z.object({
  eventId: z.string().min(1),
  sessionId: z.string().min(1),
  cardId: z.string().min(1),
  mode: z.enum(['today', 'learn', 'review', 'custom', 'writing', 'time-attack', 'survival', 'match', 'confusable']),
  result: z.enum(['correct', 'incorrect', 'skipped']),
  rating: z.enum(['again', 'hard', 'good', 'easy']).optional(),
  responseTimeMs: z.number().nonnegative().optional(),
  occurredAt: z.number().int().nonnegative(),
  inputKind: z.enum(['typing', 'multiple-choice', 'self-grade', 'matching', 'drawing']),
  schemaVersion: z.literal(1),
})

export function parseCloudStudyEvent(input: unknown): StudyEvent {
  return studyEventSchema.parse(input) as StudyEvent
}

export function serializeStudyEvent(event: StudyEvent): Record<string, unknown> {
  const data: Record<string, unknown> = {
    eventId: event.eventId,
    sessionId: event.sessionId,
    cardId: event.cardId,
    mode: event.mode,
    result: event.result,
    occurredAt: event.occurredAt,
    inputKind: event.inputKind,
    schemaVersion: event.schemaVersion,
  }
  if (event.rating !== undefined) data.rating = event.rating
  if (event.responseTimeMs !== undefined) data.responseTimeMs = event.responseTimeMs
  return data
}
