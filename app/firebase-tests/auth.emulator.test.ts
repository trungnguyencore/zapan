import { deleteApp } from 'firebase/app'
import { afterEach, describe, expect, it } from 'vitest'
import { FirebaseAccountAuthService } from '../src/services/auth/FirebaseAccountAuthService'
import { connectFirebaseEmulators, createFirebaseServices, type FirebaseServices } from '../src/services/firebase/client'

let services: FirebaseServices | null = null

afterEach(async () => {
  if (services) await deleteApp(services.app)
  services = null
})

function createEmulatedService(): FirebaseAccountAuthService {
  services = createFirebaseServices({
    apiKey: 'demo-key',
    authDomain: 'demo-zapan-v2.firebaseapp.com',
    projectId: 'demo-zapan-v2',
    storageBucket: 'demo-zapan-v2.appspot.com',
    messagingSenderId: '0',
    appId: 'demo-app',
  }, `auth-test-${crypto.randomUUID()}`)
  connectFirebaseEmulators(services)
  return new FirebaseAccountAuthService(services.auth)
}

describe('FirebaseAccountAuthService against Auth emulator', () => {
  it('signs up, signs out, and signs back in with email/password', async () => {
    const auth = createEmulatedService()
    const email = `learner-${crypto.randomUUID()}@example.test`
    const password = 'ZaPanTest123!'

    const created = await auth.signUp(email, password)
    expect(created.email).toBe(email)

    await auth.signOut()
    const signedIn = await auth.signIn(email, password)
    expect(signedIn.uid).toBe(created.uid)
    expect(signedIn.email).toBe(email)
  })

  it('accepts password-reset requests for an emulator account', async () => {
    const auth = createEmulatedService()
    const email = `reset-${crypto.randomUUID()}@example.test`
    await auth.signUp(email, 'ZaPanTest123!')
    await expect(auth.sendPasswordReset(email)).resolves.toBeUndefined()
  })
})
