import { z } from 'zod'
import type { ContentBundle } from '../domain/content/types'

const meaningSchema = z.object({
  vi: z.string().min(1).optional(),
  en: z.string().min(1).optional(),
}).refine((value) => Boolean(value.vi?.trim() || value.en?.trim()), {
  message: 'At least one meaning language is required',
})

const baseCardSchema = z.object({
  cardId: z.string().min(1),
  schemaVersion: z.literal(1),
  sourceVersion: z.string().min(1),
  level: z.enum(['foundation', 'n5', 'n4', 'n3']),
  topicId: z.string().min(1),
})

export const kanaCardSchema = baseCardSchema.extend({
  contentType: z.literal('kana'),
  script: z.enum(['hiragana', 'katakana']),
  group: z.enum(['main', 'dakuten', 'combination']),
  character: z.string().min(1),
  romanizations: z.array(z.string().min(1)).min(1),
})

export const vocabularyCardSchema = baseCardSchema.extend({
  contentType: z.literal('vocabulary'),
  term: z.string().min(1),
  readings: z.array(z.string().min(1)).min(1),
  meanings: meaningSchema,
})

export const kanjiCardSchema = baseCardSchema.extend({
  contentType: z.literal('kanji'),
  character: z.string().min(1),
  readings: z.array(z.string().min(1)).min(1),
  onYomi: z.string(),
  kunYomi: z.string(),
  meanings: meaningSchema,
  hanViet: z.string().optional(),
  strokeCount: z.number().int().positive(),
  mnemonic: z.string().optional(),
})

export const contentCardSchema = z.discriminatedUnion('contentType', [
  kanaCardSchema,
  vocabularyCardSchema,
  kanjiCardSchema,
])

export const contentBundleSchema = z.object({
  bundleId: z.string().min(1),
  schemaVersion: z.literal(1),
  sourceVersion: z.string().min(1),
  cards: z.array(contentCardSchema),
}).superRefine((bundle, ctx) => {
  const ids = new Set<string>()
  for (const card of bundle.cards) {
    if (ids.has(card.cardId)) {
      ctx.addIssue({ code: 'custom', message: `Duplicate cardId: ${card.cardId}` })
    }
    ids.add(card.cardId)
    if (card.sourceVersion !== bundle.sourceVersion) {
      ctx.addIssue({ code: 'custom', message: `Card sourceVersion mismatch: ${card.cardId}` })
    }
  }
})

export function parseContentBundle(input: unknown): ContentBundle {
  return contentBundleSchema.parse(input) as ContentBundle
}
