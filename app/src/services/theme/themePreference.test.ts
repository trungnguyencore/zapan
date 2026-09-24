import { beforeEach, describe, expect, it } from 'vitest'
import {
  THEME_STORAGE_KEY,
  applyThemePreference,
  initializeThemePreference,
  readThemePreference,
  setThemePreference,
  subscribeThemePreference,
} from './themePreference'

describe('theme preference', () => {
  beforeEach(() => {
    window.localStorage.clear()
    document.documentElement.removeAttribute('data-theme')
  })

  it('defaults to system without forcing a theme attribute', () => {
    expect(initializeThemePreference()).toBe('system')
    expect(readThemePreference()).toBe('system')
    expect(document.documentElement.hasAttribute('data-theme')).toBe(false)
  })

  it('persists explicit light/dark and returns to system mode', () => {
    setThemePreference('light')
    expect(window.localStorage.getItem(THEME_STORAGE_KEY)).toBe('light')
    expect(document.documentElement.getAttribute('data-theme')).toBe('light')

    setThemePreference('dark')
    expect(readThemePreference()).toBe('dark')
    expect(document.documentElement.getAttribute('data-theme')).toBe('dark')

    setThemePreference('system')
    expect(readThemePreference()).toBe('system')
    expect(document.documentElement.hasAttribute('data-theme')).toBe(false)
  })

  it('normalizes unknown stored values and notifies subscribers on writes', () => {
    window.localStorage.setItem(THEME_STORAGE_KEY, 'unknown')
    expect(readThemePreference()).toBe('system')

    let notifications = 0
    const unsubscribe = subscribeThemePreference(() => { notifications += 1 })
    setThemePreference('dark')
    unsubscribe()
    setThemePreference('light')

    expect(notifications).toBe(1)
    applyThemePreference('system')
  })
})
