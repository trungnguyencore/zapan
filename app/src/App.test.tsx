import { render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { MemoryRouter } from 'react-router-dom'
import { describe, expect, it } from 'vitest'
import { AppServicesProvider } from './app/AppServices'
import { AppRoutes } from './App'

function renderApp() {
  return render(<AppServicesProvider><MemoryRouter><AppRoutes /></MemoryRouter></AppServicesProvider>)
}

describe('ZaPan application shell', () => {
  it('renders Today from the real-data shell', async () => {
    renderApp()
    expect(screen.getByRole('heading', { name: 'Hôm nay học gì?' })).toBeInTheDocument()
    expect(await screen.findByRole('link', { name: 'Bắt đầu phiên hôm nay' })).toBeInTheDocument()
  })

  it('navigates through primary learning destinations', async () => {
    const user = userEvent.setup()
    renderApp()
    await user.click(screen.getAllByRole('link', { name: 'Learn' })[0])
    expect(screen.getByRole('heading', { name: 'Học theo lộ trình' })).toBeInTheDocument()
    await waitFor(() => expect(screen.getByRole('main')).toHaveFocus())
    await user.click(screen.getAllByRole('link', { name: 'Review' })[0])
    expect(screen.getByRole('heading', { name: 'Ôn đúng thứ cần ôn' })).toBeInTheDocument()
  })
})
