import { getApps, initializeApp, type FirebaseApp } from 'firebase/app'
import { parseRuntimeEnv } from '../config/env'

export function resolveFirebaseApp(
  env: Record<string, unknown> = import.meta.env as unknown as Record<string, unknown>,
  appName = 'zapan-v2',
): FirebaseApp | null {
  const runtime = parseRuntimeEnv(env)
  if (!runtime.firebase) return null
  const existing = getApps().find((app) => app.name === appName)
  const app = existing ?? initializeApp(runtime.firebase, appName)
  if (app.options.projectId !== runtime.firebase.projectId) {
    throw new Error(`Firebase app ${appName} already exists for a different project`)
  }
  return app
}
