import { describe, expect, it } from 'vitest'
import { databaseNameForUser } from './profileDatabase'

describe('databaseNameForUser', () => {
  it('keeps each identity in a separate IndexedDB database', () => {
    expect(databaseNameForUser('guest:abc')).toBe('zapan-v2:guest:abc')
    expect(databaseNameForUser('firebase-uid')).toBe('zapan-v2:firebase-uid')
    expect(databaseNameForUser('guest:abc')).not.toBe(databaseNameForUser('firebase-uid'))
  })

  it('rejects an empty identity', () => {
    expect(() => databaseNameForUser('   ')).toThrow()
  })
})
