import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { MemoryRouter } from 'react-router-dom'
import { describe, expect, it, vi } from 'vitest'
import { AppServicesProvider } from '../../app/AppServices'
import type { LearningRepository } from '../../domain/learning/ports'
import type { ProgressRecord } from '../../domain/learning/types'
import type { GuestIdentity } from '../../domain/auth/types'
import { KANA_BASIC_BUNDLE } from '../../data/n5/kanaBasic'
import { StaticContentRepository } from '../../services/content/StaticContentRepository'
import { HomePage } from './HomePage'

function failingThenHealthyRepository(): LearningRepository {
  return {
    createSession: vi.fn(),
    getSession: vi.fn(),
    completeSession: vi.fn(),
    recordEvent: vi.fn(),
    getEvent: vi.fn(),
    listEvents: vi.fn().mockResolvedValue([]),
    mergeEvents: vi.fn(),
    getProgress: vi.fn(),
    listProgress: vi.fn().mockRejectedValueOnce(new Error('IndexedDB blocked')).mockResolvedValue([]),
    listDueProgress: vi.fn(),
  }
}

describe('learning snapshot recovery', () => {
  it('retries a failed local snapshot without showing fake zero-state metrics', async () => {
    const user = userEvent.setup()
    const guest: GuestIdentity = { kind: 'guest', userId: 'guest:test', persistent: true }
    const learning = failingThenHealthyRepository()

    render(
      <AppServicesProvider services={{
        content: new StaticContentRepository([KANA_BASIC_BUNDLE]),
        learning,
        guest,
        identity: guest,
        accountAuth: null,
        sync: null,
      }}>
        <MemoryRouter>
          <HomePage />
        </MemoryRouter>
      </AppServicesProvider>,
    )

    expect(await screen.findByRole('alert')).toHaveTextContent('IndexedDB blocked')
    expect(screen.queryByText('Sẵn sàng học Kana mới')).not.toBeInTheDocument()

    await user.click(screen.getByRole('button', { name: 'Thử lại' }))

    expect(await screen.findByRole('heading', { name: 'Sẵn sàng học Kana mới' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Bắt đầu phiên hôm nay' })).toBeInTheDocument()
  })

  it('hides the previous profile snapshot while a new repository is loading', async () => {
    let resolveProgress: (value: ProgressRecord[]) => void = () => undefined
    const pendingProgress = new Promise<ProgressRecord[]>((resolve) => { resolveProgress = resolve })
    const content = new StaticContentRepository([KANA_BASIC_BUNDLE])
    const guestA: GuestIdentity = { kind: 'guest', userId: 'guest:profile-a', persistent: true }
    const guestB: GuestIdentity = { kind: 'guest', userId: 'guest:profile-b', persistent: true }
    const healthy: LearningRepository = {
      ...failingThenHealthyRepository(),
      listProgress: vi.fn().mockResolvedValue([]),
    }
    const delayed: LearningRepository = {
      ...failingThenHealthyRepository(),
      listProgress: vi.fn(() => pendingProgress),
    }

    const view = render(
      <AppServicesProvider services={{ content, learning: healthy, guest: guestA, identity: guestA, accountAuth: null, sync: null }}>
        <MemoryRouter><HomePage /></MemoryRouter>
      </AppServicesProvider>,
    )

    expect(await screen.findByRole('heading', { name: 'Sẵn sàng học Kana mới' })).toBeInTheDocument()

    view.rerender(
      <AppServicesProvider services={{ content, learning: delayed, guest: guestB, identity: guestB, accountAuth: null, sync: null }}>
        <MemoryRouter><HomePage /></MemoryRouter>
      </AppServicesProvider>,
    )

    expect(screen.getByRole('status')).toHaveTextContent('Đang đọc dữ liệu học')
    expect(screen.queryByRole('heading', { name: 'Sẵn sàng học Kana mới' })).not.toBeInTheDocument()

    resolveProgress([])

    expect(await screen.findByRole('heading', { name: 'Sẵn sàng học Kana mới' })).toBeInTheDocument()
  })
})
