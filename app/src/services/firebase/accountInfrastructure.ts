import { getAuth } from 'firebase/auth'
import type { AccountAuthService } from '../../domain/auth/ports'
import { FirebaseAccountAuthService } from '../auth/FirebaseAccountAuthService'
import { resolveFirebaseApp } from './appClient'

export interface AccountInfrastructure {
  accountAuth: AccountAuthService
}

export function createAccountInfrastructure(): AccountInfrastructure | null {
  const app = resolveFirebaseApp()
  if (!app) return null
  return { accountAuth: new FirebaseAccountAuthService(getAuth(app)) }
}
