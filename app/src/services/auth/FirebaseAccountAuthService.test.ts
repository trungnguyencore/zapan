import { describe, expect, it } from 'vitest'
import { toAccountUser } from './FirebaseAccountAuthService'

describe('Firebase account mapping', () => {
  it('maps only stable account fields into the domain user', () => {
    expect(toAccountUser({ uid: 'uid-1', email: 'user@example.com', displayName: 'User' })).toEqual({
      uid: 'uid-1', email: 'user@example.com', displayName: 'User',
    })
  })
})
