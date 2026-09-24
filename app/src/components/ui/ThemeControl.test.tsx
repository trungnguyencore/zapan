import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { beforeEach, describe, expect, it } from 'vitest'
import { THEME_STORAGE_KEY, initializeThemePreference } from '../../services/theme/themePreference'
import { ThemeControl } from './ThemeControl'

describe('ThemeControl', () => {
  beforeEach(() => {
    window.localStorage.clear()
    document.documentElement.removeAttribute('data-theme')
  })

  it('cycles System -> Light -> Dark -> System and keeps mounted controls synchronized', async () => {
    const user = userEvent.setup()
    render(<><ThemeControl /><ThemeControl /></>)

    await user.click(screen.getAllByRole('button', { name: /Giao diện: Theo hệ thống/ })[0])
    expect(document.documentElement).toHaveAttribute('data-theme', 'light')
    expect(window.localStorage.getItem(THEME_STORAGE_KEY)).toBe('light')
    expect(screen.getAllByRole('button', { name: /Giao diện: Sáng/ })).toHaveLength(2)

    await user.click(screen.getAllByRole('button', { name: /Giao diện: Sáng/ })[0])
    expect(document.documentElement).toHaveAttribute('data-theme', 'dark')
    expect(window.localStorage.getItem(THEME_STORAGE_KEY)).toBe('dark')
    expect(screen.getAllByRole('button', { name: /Giao diện: Tối/ })).toHaveLength(2)

    await user.click(screen.getAllByRole('button', { name: /Giao diện: Tối/ })[0])
    expect(document.documentElement).not.toHaveAttribute('data-theme')
    expect(window.localStorage.getItem(THEME_STORAGE_KEY)).toBe('system')
  })

  it('applies the persisted explicit theme before the application renders', () => {
    window.localStorage.setItem(THEME_STORAGE_KEY, 'dark')
    expect(initializeThemePreference()).toBe('dark')
    expect(document.documentElement).toHaveAttribute('data-theme', 'dark')
  })
})
