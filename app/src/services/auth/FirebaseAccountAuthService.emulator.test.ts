// @vitest-environment jsdom
import { deleteApp, initializeApp, type FirebaseApp } from 'firebase/app'
import { connectAuthEmulator, getAuth, type Auth } from 'firebase/auth'
import { afterAll, beforeAll, beforeEach, describe, expect, it } from 'vitest'
import { FirebaseAccountAuthService } from './FirebaseAccountAuthService'

const PROJECT_ID = 'zapan-v2-trunk'
let app: FirebaseApp
let auth: Auth
let service: FirebaseAccountAuthService

async function clearAuthEmulator(): Promise<void> {
  const response = await fetch(`http://127.0.0.1:9099/emulator/v1/projects/${PROJECT_ID}/accounts`, { method: 'DELETE' })
  if (!response.ok) throw new Error(`Could not clear Auth emulator: ${response.status}`)
}

beforeAll(() => {
  app = initializeApp({
    apiKey: 'fake-api-key',
    authDomain: 'localhost',
    projectId: PROJECT_ID,
    appId: '1:123:web:test',
  }, `auth-emulator-${crypto.randomUUID()}`)
  auth = getAuth(app)
  connectAuthEmulator(auth, 'http://127.0.0.1:9099', { disableWarnings: true })
  service = new FirebaseAccountAuthService(auth)
})

beforeEach(async () => {
  await service.signOut()
  await clearAuthEmulator()
  window.localStorage.clear()
})

afterAll(async () => {
  await service.signOut()
  await deleteApp(app)
})
describe('FirebaseAccountAuthService against Auth Emulator', () => {
  it('creates, signs out, and signs back into an email/password account', async () => {
    const email = 'learner@example.com'
    const password = 'ValidPass123!'

    const created = await service.signUp(`  ${email}  `, password)
    expect(created.email).toBe(email)
    expect(created.uid).toBeTruthy()
    expect(auth.currentUser?.uid).toBe(created.uid)

    await service.signOut()
    expect(auth.currentUser).toBeNull()

    const signedIn = await service.signIn(email, password)
    expect(signedIn.uid).toBe(created.uid)
    expect(auth.currentUser?.email).toBe(email)
  })

  it('emits authenticated and signed-out auth states', async () => {
    const states: string[] = []
    const unsubscribe = service.subscribe((state) => states.push(state.kind))

    await service.signUp('state@example.com', 'ValidPass123!')
    await new Promise((resolve) => setTimeout(resolve, 30))
    await service.signOut()
    await new Promise((resolve) => setTimeout(resolve, 30))
    unsubscribe()

    expect(states).toContain('authenticated')
    expect(states.at(-1)).toBe('signed-out')
  })

  it('accepts a password reset request for an emulator account', async () => {
    const email = 'reset@example.com'
    await service.signUp(email, 'ValidPass123!')
    await service.signOut()
    await expect(service.sendPasswordReset(email)).resolves.toBeUndefined()
  })
})
