import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { InstagramLink } from './InstagramLink'

describe('InstagramLink', () => {
  it('uses the approved owner profile and safe external-link attributes', () => {
    render(<InstagramLink />)
    const link = screen.getByRole('link', { name: 'Instagram của trunk.ng' })
    expect(link).toHaveAttribute('href', 'https://www.instagram.com/trunk.ng/')
    expect(link).toHaveAttribute('target', '_blank')
    expect(link).toHaveAttribute('rel', 'noopener noreferrer')
  })
})
