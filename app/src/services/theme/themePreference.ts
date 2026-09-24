export type ThemePreference = 'system' | 'light' | 'dark'

export const THEME_STORAGE_KEY = 'zapan-v2:theme'

const listeners = new Set<() => void>()
let storageListenerAttached = false

function normalizeTheme(value: string | null): ThemePreference {
  return value === 'light' || value === 'dark' ? value : 'system'
}

export function readThemePreference(): ThemePreference {
  if (typeof window === 'undefined') return 'system'
  return normalizeTheme(window.localStorage.getItem(THEME_STORAGE_KEY))
}

export function applyThemePreference(preference: ThemePreference): void {
  if (typeof document === 'undefined') return
  if (preference === 'system') document.documentElement.removeAttribute('data-theme')
  else document.documentElement.setAttribute('data-theme', preference)
}

function emitThemeChange(): void {
  for (const listener of listeners) listener()
}

function ensureStorageListener(): void {
  if (storageListenerAttached || typeof window === 'undefined') return
  window.addEventListener('storage', (event) => {
    if (event.key !== THEME_STORAGE_KEY) return
    applyThemePreference(readThemePreference())
    emitThemeChange()
  })
  storageListenerAttached = true
}

export function initializeThemePreference(): ThemePreference {
  const preference = readThemePreference()
  applyThemePreference(preference)
  return preference
}

export function setThemePreference(preference: ThemePreference): void {
  if (typeof window !== 'undefined') window.localStorage.setItem(THEME_STORAGE_KEY, preference)
  applyThemePreference(preference)
  emitThemeChange()
}

export function subscribeThemePreference(listener: () => void): () => void {
  ensureStorageListener()
  listeners.add(listener)
  return () => listeners.delete(listener)
}
