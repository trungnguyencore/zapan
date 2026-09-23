import {
  browserLocalPersistence,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  sendPasswordResetEmail,
  setPersistence,
  signInWithEmailAndPassword,
  signOut as firebaseSignOut,
  type Auth,
  type User,
} from 'firebase/auth'
import type { AccountAuthService } from '../../domain/auth/ports'
import type { AccountUser, AuthState } from '../../domain/auth/types'

export function toAccountUser(user: Pick<User, 'uid' | 'email' | 'displayName'>): AccountUser {
  return { uid: user.uid, email: user.email, displayName: user.displayName }
}

export class FirebaseAccountAuthService implements AccountAuthService {
  private readonly auth: Auth
  private persistenceReady: Promise<void> | null = null

  constructor(auth: Auth) {
    this.auth = auth
  }

  private ensurePersistence(): Promise<void> {
    this.persistenceReady ??= setPersistence(this.auth, browserLocalPersistence)
    return this.persistenceReady
  }

  async signUp(email: string, password: string): Promise<AccountUser> {
    await this.ensurePersistence()
    const credential = await createUserWithEmailAndPassword(this.auth, email.trim(), password)
    return toAccountUser(credential.user)
  }

  async signIn(email: string, password: string): Promise<AccountUser> {
    await this.ensurePersistence()
    const credential = await signInWithEmailAndPassword(this.auth, email.trim(), password)
    return toAccountUser(credential.user)
  }

  async signOut(): Promise<void> {
    await firebaseSignOut(this.auth)
  }

  async sendPasswordReset(email: string): Promise<void> {
    await sendPasswordResetEmail(this.auth, email.trim())
  }

  subscribe(listener: (state: AuthState) => void): () => void {
    return onAuthStateChanged(this.auth, (user) => {
      listener(user ? { kind: 'authenticated', user: toAccountUser(user) } : { kind: 'signed-out' })
    })
  }
}
