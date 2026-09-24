import 'fake-indexeddb/auto'
import { afterEach, describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { MemoryRouter, Route, Routes } from 'react-router-dom'
import { AppServicesContext, type AppServices } from '../../app/AppServicesContext'
import { KANA_BASIC_BUNDLE } from '../../data/n5/kanaBasic'
import type { GuestIdentity } from '../../domain/auth/types'
import { StaticContentRepository } from '../../services/content/StaticContentRepository'
import { createLocalDatabase, type ZaPanDatabase } from '../../services/persistence/database'
import { LocalLearningRepository } from '../../services/persistence/LocalLearningRepository'
import { SessionPage } from './SessionPage'

const databases: ZaPanDatabase[] = []

afterEach(async () => {
  for (const db of databases.splice(0)) {
    const name = db.name
    db.close()
    await indexedDB.deleteDatabase(name)
  }
})

function makeLearningRepository() {
  const db = createLocalDatabase(`session-scope-${crypto.randomUUID()}`)
  databases.push(db)
  return new LocalLearningRepository(db)
}

function renderSession(services: AppServices) {
  return render(
    <AppServicesContext.Provider value={services}>
      <MemoryRouter initialEntries={['/session/learn/kana-hiragana-main']}>
        <Routes>
          <Route path="/session/:sessionKind/:topicId?" element={<SessionPage />} />
        </Routes>
      </MemoryRouter>
    </AppServicesContext.Provider>,
  )
}

describe('SessionPage identity integrity', () => {
  it('keeps all events in the repository that owned the session at start', async () => {
    const user = userEvent.setup()
    const content = new StaticContentRepository([KANA_BASIC_BUNDLE])
    const accountLearning = makeLearningRepository()
    const guestLearning = makeLearningRepository()
    const guest: GuestIdentity = {
      kind: 'guest',
      userId: 'guest:123e4567-e89b-42d3-a456-426614174000',
      persistent: true,
    }

    const accountServices: AppServices = {
      content,
      learning: accountLearning,
      guest,
      identity: {
        kind: 'account',
        userId: 'account-user-1',
        user: { uid: 'account-user-1', email: 'learner@example.test', displayName: null },
      },
      accountAuth: null,
      sync: null,
    }
    const guestServices: AppServices = {
      content,
      learning: guestLearning,
      guest,
      identity: guest,
      accountAuth: null,
      sync: null,
    }

    const view = renderSession(accountServices)
    const answers = ['a', 'i', 'u', 'e', 'o']

    for (let index = 0; index < answers.length; index += 1) {
      const input = await screen.findByLabelText('Câu trả lời')
      await user.clear(input)
      await user.type(input, answers[index])
      await user.click(screen.getByRole('button', { name: 'Kiểm tra' }))
      expect(await screen.findByRole('status')).toHaveTextContent('Đúng')

      if (index === 1) {
        view.rerender(
          <AppServicesContext.Provider value={guestServices}>
            <MemoryRouter initialEntries={['/session/learn/kana-hiragana-main']}>
              <Routes>
                <Route path="/session/:sessionKind/:topicId?" element={<SessionPage />} />
              </Routes>
            </MemoryRouter>
          </AppServicesContext.Provider>,
        )
      }

      await user.click(screen.getByRole('button', { name: index === answers.length - 1 ? 'Xem kết quả' : 'Câu tiếp theo' }))
    }

    expect(await screen.findByRole('heading', { name: 'Hoàn thành phiên học' })).toBeInTheDocument()
    expect(screen.getByRole('status')).toHaveTextContent('phiên học giữ nguyên hồ sơ ban đầu')
    expect(await accountLearning.listEvents()).toHaveLength(5)
    expect(await guestLearning.listEvents()).toHaveLength(0)
    expect((await accountLearning.listProgress()).filter((record) => record.attempts > 0)).toHaveLength(5)
  })
})
