import { useEffect, useState, type ReactNode } from 'react'
import type { AccountAuthService } from '../domain/auth/ports'
import type { ActiveIdentity } from '../domain/auth/types'
import type { LearningRepository } from '../domain/learning/ports'
import { KANA_BASIC_BUNDLE } from '../data/n5/kanaBasic'
import { getBrowserGuestIdentity } from '../services/auth/guestIdentity'
import { StaticContentRepository } from '../services/content/StaticContentRepository'
import { loadVerifiedContentRepository } from '../services/content/loadVerifiedContentRepository'
import { createLocalDatabase } from '../services/persistence/database'
import { LocalLearningRepository } from '../services/persistence/LocalLearningRepository'
import { databaseNameForUser } from '../services/persistence/profileDatabase'
import type { FirestoreEventSyncService } from '../services/sync/FirestoreEventSyncService'
import { AppServicesContext, type AppServices } from './AppServicesContext'

interface BrowserInfrastructure {
  content: StaticContentRepository
  guest: AppServices['guest']
  accountAuth: AccountAuthService | null
  repositories: Map<string, LearningRepository>
}

function repositoryFor(base: BrowserInfrastructure, userId: string): LearningRepository {
  const existing = base.repositories.get(userId)
  if (existing) return existing
  const created = new LocalLearningRepository(createLocalDatabase(databaseNameForUser(userId)))
  base.repositories.set(userId, created)
  return created
}

function createBrowserInfrastructure(): BrowserInfrastructure {
  return {
    content: new StaticContentRepository([KANA_BASIC_BUNDLE]),
    guest: getBrowserGuestIdentity(),
    accountAuth: null,
    repositories: new Map(),
  }
}

function guestServices(base: BrowserInfrastructure): AppServices {
  const learning = repositoryFor(base, base.guest.userId)
  return { content: base.content, learning, guest: base.guest, identity: base.guest, accountAuth: base.accountAuth, sync: null }
}

function accountServices(
  base: BrowserInfrastructure,
  identity: ActiveIdentity,
  sync: FirestoreEventSyncService | null = null,
): AppServices {
  if (identity.kind !== 'account') return guestServices(base)
  const learning = repositoryFor(base, identity.userId)
  return { content: base.content, learning, guest: base.guest, identity, accountAuth: base.accountAuth, sync }
}

export function AppServicesProvider({ children, services }: { children: ReactNode; services?: AppServices }) {
  const [base] = useState<BrowserInfrastructure>(() => createBrowserInfrastructure())
  const [value, setValue] = useState<AppServices>(() => services ?? guestServices(base))
  const [contentReady, setContentReady] = useState(() => Boolean(services) || import.meta.env.MODE === 'test')
  const [contentError, setContentError] = useState<string | null>(null)

  useEffect(() => {
    if (services || import.meta.env.MODE === 'test') return undefined
    let cancelled = false

    void loadVerifiedContentRepository()
      .then((content) => {
        if (cancelled) return
        base.content = content
        setValue((current) => ({ ...current, content }))
        setContentReady(true)
      })
      .catch((reason) => {
        if (cancelled) return
        setContentError(reason instanceof Error ? reason.message : 'Không thể tải dữ liệu học đã kiểm chứng.')
      })

    return () => { cancelled = true }
  }, [base, services])

  useEffect(() => {
    if (services || import.meta.env.MODE === 'test') return undefined
    let cancelled = false
    let activeUid: string | null = null
    let unsubscribe: (() => void) | undefined

    void import('../services/firebase/accountInfrastructure').then(({ createAccountInfrastructure }) => {
      if (cancelled) return
      const cloud = createAccountInfrastructure()
      if (!cloud) return
      base.accountAuth = cloud.accountAuth
      unsubscribe = cloud.accountAuth.subscribe((state) => {
        if (state.kind === 'signed-out') {
          activeUid = null
          setValue(guestServices(base))
          return
        }

        const identity: ActiveIdentity = { kind: 'account', userId: state.user.uid, user: state.user }
        activeUid = state.user.uid
        const learning = repositoryFor(base, state.user.uid)
        setValue(accountServices(base, identity))

        void import('../services/firebase/syncInfrastructure').then(({ createAccountSync }) => {
          if (cancelled || activeUid !== state.user.uid) return
          const sync = createAccountSync(state.user.uid, learning)
          setValue(accountServices(base, identity, sync))
        }).catch(() => undefined)
      })
    }).catch(() => {
      if (!cancelled) setValue(guestServices(base))
    })

    return () => {
      cancelled = true
      unsubscribe?.()
    }
  }, [base, services])

  if (!services && !contentReady) {
    return (
      <div className="content-bootstrap" role={contentError ? 'alert' : 'status'}>
        <div className="brand-mark" aria-hidden="true">あ</div>
        <div>
          <strong>{contentError ? 'Không thể tải nội dung học' : 'Đang tải ZaPan…'}</strong>
          <p>{contentError ?? 'Đang kiểm tra và nạp các content bundle đã được xác minh.'}</p>
        </div>
      </div>
    )
  }

  return <AppServicesContext.Provider value={services ?? value}>{children}</AppServicesContext.Provider>
}
