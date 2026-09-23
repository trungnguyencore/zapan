import type { AccountUser, AuthState } from './types'

export type Unsubscribe = () => void

export interface AccountAuthService {
  signUp(email: string, password: string): Promise<AccountUser>
  signIn(email: string, password: string): Promise<AccountUser>
  signOut(): Promise<void>
  sendPasswordReset(email: string): Promise<void>
  subscribe(listener: (state: AuthState) => void): Unsubscribe
}
