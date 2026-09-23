import type { GuestIdentity } from '../../domain/auth/types'

const GUEST_ID_KEY = 'zapan-v2:guest-id'
const GUEST_ID_PATTERN = /^guest:[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i

export interface IdentityStorage {
  getItem(key: string): string | null
  setItem(key: string, value: string): void
}

export type IdFactory = () => string

function createGuestId(makeId: IdFactory): `guest:${string}` {
  return `guest:${makeId()}`
}

export function getOrCreateGuestIdentity(
  storage: IdentityStorage,
  makeId: IdFactory = () => crypto.randomUUID(),
): GuestIdentity {
  try {
    const existing = storage.getItem(GUEST_ID_KEY)
    if (existing && GUEST_ID_PATTERN.test(existing)) {
      return { kind: 'guest', userId: existing as `guest:${string}`, persistent: true }
    }

    const userId = createGuestId(makeId)
    storage.setItem(GUEST_ID_KEY, userId)
    return { kind: 'guest', userId, persistent: true }
  } catch {
    return { kind: 'guest', userId: createGuestId(makeId), persistent: false }
  }
}

export function getBrowserGuestIdentity(): GuestIdentity {
  return getOrCreateGuestIdentity(window.localStorage)
}
