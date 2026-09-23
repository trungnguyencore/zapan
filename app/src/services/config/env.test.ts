import { describe, expect, it } from 'vitest'
import { parseRuntimeEnv } from './env'

describe('runtime environment validation', () => {
  it('allows a local-only app when Firebase is not configured', () => {
    expect(parseRuntimeEnv({})).toEqual({ firebase: null })
  })

  it('accepts a complete Firebase web configuration', () => {
    const parsed = parseRuntimeEnv({
      VITE_FIREBASE_API_KEY: 'public-api-key',
      VITE_FIREBASE_AUTH_DOMAIN: 'example.firebaseapp.com',
      VITE_FIREBASE_PROJECT_ID: 'example',
      VITE_FIREBASE_STORAGE_BUCKET: 'example.appspot.com',
      VITE_FIREBASE_MESSAGING_SENDER_ID: '123',
      VITE_FIREBASE_APP_ID: '1:123:web:abc',
    })
    expect(parsed.firebase?.projectId).toBe('example')
  })

  it('rejects a partially configured Firebase environment', () => {
    expect(() => parseRuntimeEnv({ VITE_FIREBASE_PROJECT_ID: 'example' })).toThrow()
  })
})
