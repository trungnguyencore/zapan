import { createContext, useContext } from 'react'
import type { GuestIdentity } from '../domain/auth/types'
import type { ContentRepository } from '../domain/content/ports'
import type { LearningRepository } from '../domain/learning/ports'

export interface AppServices {
  content: ContentRepository
  learning: LearningRepository
  guest: GuestIdentity
}

export const AppServicesContext = createContext<AppServices | null>(null)

export function useAppServices(): AppServices {
  const value = useContext(AppServicesContext)
  if (!value) throw new Error('useAppServices must be used inside AppServicesProvider')
  return value
}
