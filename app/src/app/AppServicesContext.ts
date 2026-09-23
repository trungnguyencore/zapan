import { createContext, useContext } from 'react'
import type { AccountAuthService } from '../domain/auth/ports'
import type { ActiveIdentity, GuestIdentity } from '../domain/auth/types'
import type { ContentRepository } from '../domain/content/ports'
import type { LearningRepository } from '../domain/learning/ports'
import type { FirestoreEventSyncService } from '../services/sync/FirestoreEventSyncService'

export interface AppServices {
  content: ContentRepository
  learning: LearningRepository
  guest: GuestIdentity
  identity: ActiveIdentity
  accountAuth: AccountAuthService | null
  sync: FirestoreEventSyncService | null
}

export const AppServicesContext = createContext<AppServices | null>(null)

export function useAppServices(): AppServices {
  const value = useContext(AppServicesContext)
  if (!value) throw new Error('useAppServices must be used inside AppServicesProvider')
  return value
}
