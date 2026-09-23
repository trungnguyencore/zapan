import { deleteApp, type FirebaseApp } from 'firebase/app'
import { afterEach, describe, expect, it } from 'vitest'
import { resolveFirebaseApp } from './appClient'

let app: FirebaseApp | null = null

afterEach(async () => {
  if (app) await deleteApp(app)
  app = null
})

const completeEnv = {
  VITE_FIREBASE_API_KEY: 'public-test-key',
  VITE_FIREBASE_AUTH_DOMAIN: 'example.firebaseapp.com',
  VITE_FIREBASE_PROJECT_ID: 'example-project',
  VITE_FIREBASE_STORAGE_BUCKET: 'example.firebasestorage.app',
  VITE_FIREBASE_MESSAGING_SENDER_ID: '123',
  VITE_FIREBASE_APP_ID: '1:123:web:abc',
}

describe('Firebase app config boundary', () => {
  it('stays disabled when Firebase env is absent', () => {
    expect(resolveFirebaseApp({}, `test-${crypto.randomUUID()}`)).toBeNull()
  })

  it('initializes a named Firebase app from a complete web config', () => {
    app = resolveFirebaseApp(completeEnv, `test-${crypto.randomUUID()}`)
    expect(app?.options.projectId).toBe('example-project')
  })

  it('rejects reusing an app name for a different project', () => {
    const appName = `test-${crypto.randomUUID()}`
    app = resolveFirebaseApp(completeEnv, appName)
    expect(() => resolveFirebaseApp({ ...completeEnv, VITE_FIREBASE_PROJECT_ID: 'other-project' }, appName)).toThrow('different project')
  })
})
