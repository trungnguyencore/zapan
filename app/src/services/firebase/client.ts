import { getApp, getApps, initializeApp, type FirebaseApp } from 'firebase/app'
import { connectAuthEmulator, getAuth, type Auth } from 'firebase/auth'
import { connectFirestoreEmulator, getFirestore, type Firestore } from 'firebase/firestore'
import { parseRuntimeEnv, type FirebaseRuntimeConfig } from '../config/env'

export interface FirebaseServices {
  app: FirebaseApp
  auth: Auth
  firestore: Firestore
}

export function createFirebaseServices(config: FirebaseRuntimeConfig, appName = 'zapan-v2'): FirebaseServices {
  const existing = getApps().find((app) => app.name === appName)
  const app = existing ?? initializeApp(config, appName)
  if (app.options.projectId !== config.projectId) {
    throw new Error(`Firebase app ${appName} already exists for a different project`)
  }
  return { app, auth: getAuth(app), firestore: getFirestore(app) }
}

export function resolveFirebaseServices(
  env: Record<string, unknown> = import.meta.env as unknown as Record<string, unknown>,
  appName = 'zapan-v2',
): FirebaseServices | null {
  const runtime = parseRuntimeEnv(env)
  return runtime.firebase ? createFirebaseServices(runtime.firebase, appName) : null
}

export function getConfiguredFirebaseApp(appName = 'zapan-v2'): FirebaseApp | null {
  return getApps().some((app) => app.name === appName) ? getApp(appName) : null
}

export interface FirebaseEmulatorOptions {
  authUrl?: string
  firestoreHost?: string
  firestorePort?: number
}

export function connectFirebaseEmulators(
  services: FirebaseServices,
  options: FirebaseEmulatorOptions = {},
): void {
  const authUrl = options.authUrl ?? 'http://127.0.0.1:9099'
  const firestoreHost = options.firestoreHost ?? '127.0.0.1'
  const firestorePort = options.firestorePort ?? 8080
  connectAuthEmulator(services.auth, authUrl, { disableWarnings: true })
  connectFirestoreEmulator(services.firestore, firestoreHost, firestorePort)
}
