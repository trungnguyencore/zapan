import { describe, expect, it } from 'vitest'
import { createInitialSrsState, ratingFromResult, reviewSrs } from './srs'

const NOW = 1_000_000

describe('ZaPan SRS v1', () => {
  it('starts due immediately', () => {
    expect(createInitialSrsState(NOW)).toMatchObject({ level: 0, intervalMinutes: 0, lapses: 0, dueAt: NOW })
  })

  it('maps learning results to explicit default ratings', () => {
    expect(ratingFromResult('correct')).toBe('good')
    expect(ratingFromResult('incorrect')).toBe('again')
    expect(ratingFromResult('skipped')).toBeNull()
  })

  it('schedules a first good review four hours later', () => {
    const next = reviewSrs(createInitialSrsState(NOW), 'good', NOW)
    expect(next.level).toBe(1)
    expect(next.intervalMinutes).toBe(240)
    expect(next.dueAt).toBe(NOW + 240 * 60_000)
  })

  it('resets a lapse to a short relearning interval', () => {
    const learned = reviewSrs(createInitialSrsState(NOW), 'good', NOW)
    const lapsed = reviewSrs(learned, 'again', NOW + 1_000)
    expect(lapsed).toMatchObject({ level: 0, intervalMinutes: 10, lapses: 1 })
  })

  it('gives easy a longer interval than good from the same state', () => {
    const state = createInitialSrsState(NOW)
    expect(reviewSrs(state, 'easy', NOW).intervalMinutes).toBeGreaterThan(reviewSrs(state, 'good', NOW).intervalMinutes)
  })

  it('rejects invalid timestamps', () => {
    expect(() => reviewSrs(createInitialSrsState(NOW), 'good', Number.NaN)).toThrow()
  })
})
