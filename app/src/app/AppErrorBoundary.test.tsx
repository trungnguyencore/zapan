import { render, screen } from '@testing-library/react'
import type { ReactNode } from 'react'
import { afterEach, describe, expect, it, vi } from 'vitest'
import { AppErrorBoundary } from './AppErrorBoundary'

function Crash(): ReactNode {
  throw new Error('lazy chunk exploded')
}

afterEach(() => {
  vi.restoreAllMocks()
})

describe('AppErrorBoundary', () => {
  it('keeps a recovery surface visible when rendering crashes', () => {
    vi.spyOn(console, 'error').mockImplementation(() => undefined)

    render(
      <AppErrorBoundary>
        <Crash />
      </AppErrorBoundary>,
    )

    expect(screen.getByRole('alert')).toHaveTextContent('ZaPan gặp lỗi khi hiển thị')
    expect(screen.getByText('lazy chunk exploded')).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Tải lại ZaPan' })).toBeInTheDocument()
  })
})
