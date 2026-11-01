import { readFile } from 'node:fs/promises'
import { resolve } from 'node:path'

/**
 * ZaPan Academic Progress Inspector
 * Inspects a learner's cloud-synced progress & events from Firebase Firestore
 * Usage: node tools/inspect-progress.mjs <email> <password>
 */

const envPath = resolve(process.cwd(), 'app/.env.local')
let apiKey = process.env.VITE_FIREBASE_API_KEY
let projectId = process.env.VITE_FIREBASE_PROJECT_ID || 'zapan-v2-trunk'

try {
  const envContent = await readFile(envPath, 'utf8')
  for (const line of envContent.split(/\r?\n/)) {
    const match = line.match(/^([^#=]+)=(.*)$/)
    if (match) {
      const key = match[1].trim()
      const val = match[2].trim()
      if (key === 'VITE_FIREBASE_API_KEY') apiKey = val
      if (key === 'VITE_FIREBASE_PROJECT_ID') projectId = val
    }
  }
} catch {
  // Use fallback or environment variables
}

const [email, password] = process.argv.slice(2)

if (!apiKey) {
  console.error('Error: VITE_FIREBASE_API_KEY not found.')
  process.exit(1)
}

if (!email || !password) {
  console.log(JSON.stringify({
    status: 'need_credentials',
    message: 'Vui lòng cung cấp email và password: node tools/inspect-progress.mjs <email> <password>',
  }, null, 2))
  process.exit(0)
}

try {
  // 1. Sign in to Firebase Auth via REST
  const authRes = await fetch(
    `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${apiKey}`,
    {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password, returnSecureToken: true }),
    }
  )

  if (!authRes.ok) {
    const errData = await authRes.json()
    console.log(JSON.stringify({
      status: 'auth_failed',
      error: errData.error?.message || 'Đăng nhập không thành công',
    }, null, 2))
    process.exit(0)
  }

  const { idToken, localId: uid } = await authRes.json()

  // 2. Fetch Progress documents
  const progressRes = await fetch(
    `https://firestore.googleapis.com/v1/projects/${projectId}/databases/(default)/documents/users/${uid}/progress?pageSize=1000`,
    {
      headers: { Authorization: `Bearer ${idToken}` },
    }
  )

  const progressDocs = progressRes.ok ? (await progressRes.json()).documents || [] : []

  // 3. Fetch Recent Events
  const eventsRes = await fetch(
    `https://firestore.googleapis.com/v1/projects/${projectId}/databases/(default)/documents/users/${uid}/events?pageSize=300`,
    {
      headers: { Authorization: `Bearer ${idToken}` },
    }
  )

  const eventDocs = eventsRes.ok ? (await eventsRes.json()).documents || [] : []

  // Parse Firestore fields helper
  function parseFirestoreFields(fields = {}) {
    const result = {}
    for (const [k, v] of Object.entries(fields)) {
      if ('stringValue' in v) result[k] = v.stringValue
      else if ('integerValue' in v) result[k] = Number(v.integerValue)
      else if ('doubleValue' in v) result[k] = v.doubleValue
      else if ('booleanValue' in v) result[k] = v.booleanValue
      else if ('mapValue' in v) result[k] = parseFirestoreFields(v.mapValue.fields)
    }
    return result
  }

  const progressRecords = progressDocs.map((doc) => parseFirestoreFields(doc.fields))
  const events = eventDocs.map((doc) => parseFirestoreFields(doc.fields))

  // Aggregate Metrics
  let totalAttempts = 0
  let totalCorrect = 0
  let totalIncorrect = 0
  const mistakeCards = []

  for (const prog of progressRecords) {
    totalAttempts += prog.attempts || 0
    totalCorrect += prog.correctCount || 0
    totalIncorrect += prog.incorrectCount || 0
    if ((prog.incorrectCount || 0) > 0) {
      mistakeCards.push({
        cardId: prog.cardId,
        incorrectCount: prog.incorrectCount,
        attempts: prog.attempts,
        streak: prog.currentCorrectStreak || 0,
        srsLevel: prog.srs?.level ?? 0,
      })
    }
  }

  mistakeCards.sort((a, b) => b.incorrectCount - a.incorrectCount)

  const report = {
    status: 'success',
    user: { email, uid },
    overview: {
      totalCardsStudied: progressRecords.length,
      totalAttempts,
      totalCorrect,
      totalIncorrect,
      accuracy: totalAttempts > 0 ? Math.round((totalCorrect / totalAttempts) * 100) : 0,
      totalEventsRecorded: events.length,
    },
    topMistakes: mistakeCards.slice(0, 15),
  }

  console.log(JSON.stringify(report, null, 2))
} catch (err) {
  console.error('Inspection failed:', err)
  process.exit(1)
}
