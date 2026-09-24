import type { ContentCard } from '../content/types'

export type ArcadeMode = 'time-attack' | 'survival'
export type TimeAttackDuration = 30 | 60 | 120

export function buildArcadeQueue(
  cards: readonly ContentCard[],
  topicId: string,
  limit: number,
): ContentCard[] {
  if (!topicId || !Number.isFinite(limit) || limit <= 0) return []
  return cards.filter((card) => card.topicId === topicId).slice(0, Math.floor(limit))
}

export function remainingSeconds(deadlineMs: number, nowMs: number): number {
  if (!Number.isFinite(deadlineMs) || !Number.isFinite(nowMs)) throw new Error('deadline/now must be finite')
  return Math.max(0, Math.ceil((deadlineMs - nowMs) / 1000))
}

export function nextSurvivalLives(lives: number, correct: boolean): number {
  if (!Number.isInteger(lives) || lives < 0) throw new Error('lives must be a non-negative integer')
  return correct ? lives : Math.max(0, lives - 1)
}
