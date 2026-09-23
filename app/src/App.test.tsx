import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { MemoryRouter } from 'react-router-dom'
import { describe, expect, it } from 'vitest'
import { AppRoutes } from './App'

describe('ZaPan application shell', () => {
  it('renders the truthful foundation home state', () => {
    render(<MemoryRouter><AppRoutes /></MemoryRouter>)
    expect(screen.getByRole('heading', { name: 'Hôm nay học gì?' })).toBeInTheDocument()
    expect(screen.getByText(/Không dùng dữ liệu giả/)).toBeInTheDocument()
  })

  it('navigates through the primary learning destinations', async () => {
    const user = userEvent.setup()
    render(<MemoryRouter><AppRoutes /></MemoryRouter>)
    await user.click(screen.getAllByRole('link', { name: 'Learn' })[0])
    expect(screen.getByRole('heading', { name: 'Học theo lộ trình, không theo menu rời rạc' })).toBeInTheDocument()
    await user.click(screen.getAllByRole('link', { name: 'Review' })[0])
    expect(screen.getByRole('heading', { name: 'Ôn đúng thứ cần ôn' })).toBeInTheDocument()
  })
})
