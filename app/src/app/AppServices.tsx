import { useState, type ReactNode } from 'react'
import { KANA_BASIC_BUNDLE } from '../data/n5/kanaBasic'
import { getBrowserGuestIdentity } from '../services/auth/guestIdentity'
import { StaticContentRepository } from '../services/content/StaticContentRepository'
import { createLocalDatabase } from '../services/persistence/database'
import { LocalLearningRepository } from '../services/persistence/LocalLearningRepository'
import { AppServicesContext, type AppServices } from './AppServicesContext'

function createBrowserServices(): AppServices {
  const content = new StaticContentRepository([KANA_BASIC_BUNDLE])
  const database = createLocalDatabase('zapan-v2')
  return { content, learning: new LocalLearningRepository(database), guest: getBrowserGuestIdentity() }
}

export function AppServicesProvider({ children, services }: { children: ReactNode; services?: AppServices }) {
  const [value] = useState<AppServices>(() => services ?? createBrowserServices())
  return <AppServicesContext.Provider value={value}>{children}</AppServicesContext.Provider>
}
