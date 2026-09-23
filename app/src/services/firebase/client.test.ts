import { deleteApp } from 'firebase/app'
import { afterEach, describe, expect, it } from 'vitest'
import { createFirebaseServices, resolveFirebaseServices, type FirebaseServices } from './client'

let services: FirebaseServices | null = null

afterEach(async () => {
  if (services) await deleteApp(services.app)
  services = null
})

describe('Firebase client adapter', () => {
  it('stays disabled when Firebase env is absent', () => {
    expect(resolveFirebaseServices({}, `test-${crypto.randomUUID()}`)).toBeNull()
  })

  it('initializes a named Firebase app from a complete web config', () => {
    services = createFirebaseServices({
      apiKey: 'public-test-key',
      authDomain: 'example.firebaseapp.com',
      projectId: 'example-project',
      storageBucket: 'example.firebasestorage.app',
      messagingSenderId: '123',
      appId: '1:123:web:abc',
    }, `test-${crypto.randomUUID()}`)
    expect(services.app.options.projectId).toBe('example-project')
    expect(services.auth.app).toBe(services.app)
    expect(services.firestore.app).toBe(services.app)
  })

  it('rejects reusing an app name for a different project', () => {
    const appName = `test-${crypto.randomUUID()}`
    services = createFirebaseServices({
      apiKey: 'a', authDomain: 'one.firebaseapp.com', projectId: 'one', storageBucket: 'one', messagingSenderId: '1', appId: 'one',
    }, appName)
    expect(() => createFirebaseServices({
      apiKey: 'b', authDomain: 'two.firebaseapp.com', projectId: 'two', storageBucket: 'two', messagingSenderId: '2', appId: 'two',
    }, appName)).toThrow('different project')
  })
})
