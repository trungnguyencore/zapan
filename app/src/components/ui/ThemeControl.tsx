import { useSyncExternalStore } from 'react'
import {
  readThemePreference,
  setThemePreference,
  subscribeThemePreference,
  type ThemePreference,
} from '../../services/theme/themePreference'

const labels: Record<ThemePreference, string> = {
  system: 'Theo hệ thống',
  light: 'Sáng',
  dark: 'Tối',
}

const nextTheme: Record<ThemePreference, ThemePreference> = {
  system: 'light',
  light: 'dark',
  dark: 'system',
}

const icons: Record<ThemePreference, string> = {
  system: '◐',
  light: '☼',
  dark: '◒',
}

export function ThemeControl() {
  const preference = useSyncExternalStore(
    subscribeThemePreference,
    readThemePreference,
    () => 'system' as ThemePreference,
  )
  const next = nextTheme[preference]
  const label = `Giao diện: ${labels[preference]}. Chuyển sang ${labels[next]}`

  return (
    <button
      className="theme-toggle"
      type="button"
      aria-label={label}
      title={label}
      onClick={() => setThemePreference(next)}
    >
      <span className="theme-toggle-icon" aria-hidden="true">{icons[preference]}</span>
      <span className="theme-toggle-label">{labels[preference]}</span>
    </button>
  )
}
