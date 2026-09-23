import { getFirestore } from 'firebase/firestore'
import type { LearningRepository } from '../../domain/learning/ports'
import { FirestoreEventSyncService } from '../sync/FirestoreEventSyncService'
import { resolveFirebaseApp } from './appClient'

export function createAccountSync(
  userId: string,
  learning: LearningRepository,
): FirestoreEventSyncService | null {
  const app = resolveFirebaseApp()
  if (!app) return null
  return new FirestoreEventSyncService(getFirestore(app), userId, learning)
}
