import type { StudyEvent } from '../learning/types'

export interface ActivityDay {
  dayKey: string
  eventCount: number
  measuredResponseMs: number
}

export interface ActivityMetrics {
  timeZone: string
  totalEvents: number
  measuredResponseMs: number
  activeDays: number
  currentStreakDays: number
  last7EventCount: number
  last7MeasuredResponseMs: number
  last28Days: ActivityDay[]
}

function dateParts(timestamp: number, timeZone: string) {
  const formatter = new Intl.DateTimeFormat('en-CA', {
    timeZone,
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
  })
  const parts = formatter.formatToParts(new Date(timestamp))
  const values = new Map(parts.map((part) => [part.type, part.value]))
  return { year: Number(values.get('year')), month: Number(values.get('month')), day: Number(values.get('day')) }
}

export function activityDayKey(timestamp: number, timeZone: string): string {
  const { year, month, day } = dateParts(timestamp, timeZone)
  return [year, String(month).padStart(2, '0'), String(day).padStart(2, '0')].join('-')
}

export function shiftActivityDay(dayKey: string, offsetDays: number): string {
  const [year, month, day] = dayKey.split('-').map(Number)
  const shifted = new Date(Date.UTC(year, month - 1, day + offsetDays))
  return [
    shifted.getUTCFullYear(),
    String(shifted.getUTCMonth() + 1).padStart(2, '0'),
    String(shifted.getUTCDate()).padStart(2, '0'),
  ].join('-')
}

export function deriveActivityMetrics(
  events: readonly StudyEvent[],
  now: number,
  timeZone: string,
): ActivityMetrics {
  const byDay = new Map<string, ActivityDay>()
  let measuredResponseMs = 0

  for (const event of events) {
    const key = activityDayKey(event.occurredAt, timeZone)
    const measured = typeof event.responseTimeMs === 'number' ? Math.max(0, event.responseTimeMs) : 0
    const current = byDay.get(key) ?? { dayKey: key, eventCount: 0, measuredResponseMs: 0 }
    current.eventCount += 1
    current.measuredResponseMs += measured
    byDay.set(key, current)
    measuredResponseMs += measured
  }

  const today = activityDayKey(now, timeZone)
  const yesterday = shiftActivityDay(today, -1)
  let streakCursor: string | null = byDay.has(today) ? today : byDay.has(yesterday) ? yesterday : null
  let currentStreakDays = 0
  while (streakCursor && byDay.has(streakCursor)) {
    currentStreakDays += 1
    streakCursor = shiftActivityDay(streakCursor, -1)
  }

  const last28Days = Array.from({ length: 28 }, (_, index) => {
    const key = shiftActivityDay(today, index - 27)
    return byDay.get(key) ?? { dayKey: key, eventCount: 0, measuredResponseMs: 0 }
  })
  const last7Days = last28Days.slice(-7)

  return {
    timeZone,
    totalEvents: events.length,
    measuredResponseMs,
    activeDays: byDay.size,
    currentStreakDays,
    last7EventCount: last7Days.reduce((sum, day) => sum + day.eventCount, 0),
    last7MeasuredResponseMs: last7Days.reduce((sum, day) => sum + day.measuredResponseMs, 0),
    last28Days,
  }
}
