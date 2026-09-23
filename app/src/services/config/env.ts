import { z } from 'zod'

const firebaseSchema = z.object({
  apiKey: z.string().min(1),
  authDomain: z.string().min(1),
  projectId: z.string().min(1),
  storageBucket: z.string().min(1),
  messagingSenderId: z.string().min(1),
  appId: z.string().min(1),
})

export type FirebaseRuntimeConfig = z.infer<typeof firebaseSchema>

export interface RuntimeConfig {
  firebase: FirebaseRuntimeConfig | null
}

export function parseRuntimeEnv(env: Record<string, unknown>): RuntimeConfig {
  const candidate = {
    apiKey: env.VITE_FIREBASE_API_KEY,
    authDomain: env.VITE_FIREBASE_AUTH_DOMAIN,
    projectId: env.VITE_FIREBASE_PROJECT_ID,
    storageBucket: env.VITE_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: env.VITE_FIREBASE_MESSAGING_SENDER_ID,
    appId: env.VITE_FIREBASE_APP_ID,
  }
  const values = Object.values(candidate)
  const hasAnyFirebaseValue = values.some((value) => typeof value === 'string' && value.trim().length > 0)
  if (!hasAnyFirebaseValue) return { firebase: null }
  return { firebase: firebaseSchema.parse(candidate) }
}
