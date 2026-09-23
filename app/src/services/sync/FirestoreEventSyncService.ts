import { collection, doc, getDoc, getDocs, setDoc, type Firestore } from 'firebase/firestore'
import type { LearningRepository } from '../../domain/learning/ports'
import type { StudyEvent } from '../../domain/learning/types'
import { parseCloudStudyEvent, serializeStudyEvent } from '../firebase/firestoreSchemas'

export interface SyncResult {
  uploadedEvents: number
  existingEvents: number
  downloadedEvents: number
  mergedCards: number
  uploadedProgress: number
}

function sameEvent(a: StudyEvent, b: StudyEvent): boolean {
  return JSON.stringify(serializeStudyEvent(a)) === JSON.stringify(serializeStudyEvent(b))
}

export class FirestoreEventSyncService {
  private readonly firestore: Firestore
  private readonly userId: string
  private readonly local: LearningRepository

  constructor(firestore: Firestore, userId: string, local: LearningRepository) {
    if (!userId || userId.includes('/')) throw new Error('Invalid Firebase user id')
    this.firestore = firestore
    this.userId = userId
    this.local = local
  }

  async sync(): Promise<SyncResult> {
    const localEvents = await this.local.listEvents()
    let uploadedEvents = 0
    let existingEvents = 0

    for (const event of localEvents) {
      const ref = doc(this.firestore, 'users', this.userId, 'events', event.eventId)
      const snapshot = await getDoc(ref)
      if (snapshot.exists()) {
        const cloudEvent = parseCloudStudyEvent(snapshot.data())
        if (!sameEvent(cloudEvent, event)) throw new Error(`Cloud event conflict: ${event.eventId}`)
        existingEvents += 1
      } else {
        await setDoc(ref, serializeStudyEvent(event))
        uploadedEvents += 1
      }
    }

    const cloudSnapshot = await getDocs(collection(this.firestore, 'users', this.userId, 'events'))
    const cloudEvents = cloudSnapshot.docs.map((item) => parseCloudStudyEvent(item.data()))
    const rebuilt = await this.local.mergeEvents(cloudEvents)
    const progress = await this.local.listProgress()

    for (const record of progress) {
      const ref = doc(this.firestore, 'users', this.userId, 'progress', record.cardId)
      await setDoc(ref, record)
    }

    return {
      uploadedEvents,
      existingEvents,
      downloadedEvents: cloudEvents.length,
      mergedCards: rebuilt.length,
      uploadedProgress: progress.length,
    }
  }
}
