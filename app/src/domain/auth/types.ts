export interface GuestIdentity {
  kind: 'guest'
  userId: `guest:${string}`
  persistent: boolean
}

export interface AccountUser {
  uid: string
  email: string | null
  displayName: string | null
}

export type AuthState =
  | { kind: 'signed-out' }
  | { kind: 'authenticated'; user: AccountUser }

export type ActiveIdentity = GuestIdentity | { kind: 'account'; userId: string; user: AccountUser }
