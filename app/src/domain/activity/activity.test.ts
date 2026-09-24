import { describe, expect, it } from 'vitest'
import { createCardId } from '../learning/cardId'
import type { StudyEvent } from '../learning/types'
import { activityDayKey, deriveActivityMetrics, shiftActivityDay } from './activity'

const TIME_ZONE = 'Asia/Ho_Chi_Minh'
const CARD_ID = createCardId({ level: 'foundation', contentType: 'kana', sourceKey: 'test-v1', itemKey: 'a' })

function event(id: string, occurredAt: number, responseTimeMs?: number): StudyEvent {
  return {
    eventId: id,
    sessionId: 'session-1',
    cardId: CARD_ID,
    mode: 'learn',
    result: 'correct',
    rating: 'good',
    ...(responseTimeMs === undefined ? {} : { responseTimeMs }),
    occurredAt,
    inputKind: 'typing',
    schemaVersion: 1,
  }
}

describe('activity metrics', () => {
  it('uses the requested timezone for calendar day boundaries', () => {
    expect(activityDayKey(Date.UTC(2026, 8, 23, 16, 59), TIME_ZONE)).toBe('2026-09-23')
    expect(activityDayKey(Date.UTC(2026, 8, 23, 17, 0), TIME_ZONE)).toBe('2026-09-24')
  })

  it('uses calendar arithmetic for heatmap day keys', () => {
    expect(shiftActivityDay('2026-03-01', -1)).toBe('2026-02-28')
    expect(shiftActivityDay('2028-03-01', -1)).toBe('2028-02-29')
  })

  it('counts only measured response time and derives a streak ending today', () => {
    const now = Date.UTC(2026, 8, 24, 1, 0)
    const metrics = deriveActivityMetrics([
      event('e-1', Date.UTC(2026, 8, 22, 1, 0), 30_000),
      event('e-2', Date.UTC(2026, 8, 23, 1, 0)),
      event('e-3', Date.UTC(2026, 8, 24, 1, 0), 45_000),
    ], now, TIME_ZONE)

    expect(metrics.totalEvents).toBe(3)
    expect(metrics.measuredResponseMs).toBe(75_000)
    expect(metrics.activeDays).toBe(3)
    expect(metrics.currentStreakDays).toBe(3)
    expect(metrics.last7EventCount).toBe(3)
    expect(metrics.last28Days).toHaveLength(28)
    expect(metrics.last28Days.at(-1)).toMatchObject({ dayKey: '2026-09-24', eventCount: 1, measuredResponseMs: 45_000 })
  })

  it('keeps a streak ending yesterday but resets after a full missed day', () => {
    const now = Date.UTC(2026, 8, 24, 1, 0)
    const activeYesterday = deriveActivityMetrics([
      event('e-1', Date.UTC(2026, 8, 22, 1, 0)),
      event('e-2', Date.UTC(2026, 8, 23, 1, 0)),
    ], now, TIME_ZONE)
    expect(activeYesterday.currentStreakDays).toBe(2)

    const missedYesterday = deriveActivityMetrics([
      event('e-3', Date.UTC(2026, 8, 22, 1, 0)),
    ], now, TIME_ZONE)
    expect(missedYesterday.currentStreakDays).toBe(0)
  })
})
