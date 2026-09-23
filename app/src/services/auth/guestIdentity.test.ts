import { describe, expect, it } from 'vitest'
import { getOrCreateGuestIdentity, type IdentityStorage } from './guestIdentity'

class MemoryStorage implements IdentityStorage {
  private readonly data = new Map<string, string>()
  getItem(key: string): string | null { return this.data.get(key) ?? null }
  setItem(key: string, value: string): void { this.data.set(key, value) }
}

const UUID_A = '123e4567-e89b-42d3-a456-426614174000'
const UUID_B = '123e4567-e89b-42d3-b456-426614174001'

describe('guest identity', () => {
  it('creates and persists a stable guest id', () => {
    const storage = new MemoryStorage()
    const first = getOrCreateGuestIdentity(storage, () => UUID_A)
    const second = getOrCreateGuestIdentity(storage, () => UUID_B)
    expect(first).toEqual({ kind: 'guest', userId: `guest:${UUID_A}`, persistent: true })
    expect(second.userId).toBe(first.userId)
  })

  it('replaces invalid stored identity rather than trusting it', () => {
    const storage = new MemoryStorage()
    storage.setItem('zapan-v2:guest-id', 'guest:not-a-uuid')
    expect(getOrCreateGuestIdentity(storage, () => UUID_A).userId).toBe(`guest:${UUID_A}`)
  })

  it('falls back to an ephemeral identity when storage is unavailable', () => {
    const broken: IdentityStorage = {
      getItem: () => { throw new Error('blocked') },
      setItem: () => { throw new Error('blocked') },
    }
    expect(getOrCreateGuestIdentity(broken, () => UUID_A)).toEqual({ kind: 'guest', userId: `guest:${UUID_A}`, persistent: false })
  })
})
