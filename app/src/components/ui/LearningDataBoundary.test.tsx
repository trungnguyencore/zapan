import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it, vi } from 'vitest'
import { LearningDataBoundary } from './LearningDataBoundary'

describe('LearningDataBoundary', () => {
  it('shows an accessible loading state instead of stale children', () => {
    render(
      <LearningDataBoundary loading error={null} onRetry={vi.fn()}>
        <div>stale content</div>
      </LearningDataBoundary>,
    )

    expect(screen.getByRole('status')).toHaveTextContent('Đang đọc dữ liệu học')
    expect(screen.queryByText('stale content')).not.toBeInTheDocument()
  })

  it('shows a retry action on failure and hides misleading children', async () => {
    const user = userEvent.setup()
    const retry = vi.fn(async () => undefined)

    render(
      <LearningDataBoundary loading={false} error="IndexedDB blocked" onRetry={retry}>
        <div>misleading zero metrics</div>
      </LearningDataBoundary>,
    )

    expect(screen.getByRole('alert')).toHaveTextContent('IndexedDB blocked')
    expect(screen.queryByText('misleading zero metrics')).not.toBeInTheDocument()
    await user.click(screen.getByRole('button', { name: 'Thử lại' }))
    expect(retry).toHaveBeenCalledTimes(1)
  })
})
