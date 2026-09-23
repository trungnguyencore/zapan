import fs from 'node:fs'

const sourcePath = 'D:\\STUDY\\JAPANESE\\WEB\\gd9\\src\\data\\vocab_data.js'
const outPath = 'D:\\OTHERS\\LATVAT\\japan\\app\\src\\data\\n5\\vocabN5.ts'
const prefix = 'export const VOCAB_N5_FULL = '
const sourceVersion = 'vocab-n5-legacy-audit-v1'
const sourceKey = 'vocab-n5-v1'

const text = fs.readFileSync(sourcePath, 'utf8')
if (!text.includes(prefix)) throw new Error('Legacy vocab wrapper not found')
const data = JSON.parse(text.slice(text.indexOf(prefix) + prefix.length).trim().replace(/;\s*$/, ''))

function slug(value) {
  return value.toLowerCase().replace(/^n5_/, '').replace(/_/g, '-').replace(/[^a-z0-9-]/g, '')
}

function normalizeReadings(readings) {
  const values = readings.flatMap((reading) => String(reading).split(/[,，、]/g))
    .map((reading) => reading.trim())
    .filter(Boolean)
  return [...new Set(values)]
}

const topics = []
const cards = []
const termSet = new Set()

for (const [groupKey, group] of Object.entries(data)) {
  if (group.id !== groupKey || !Array.isArray(group.items) || typeof group.label !== 'string') {
    throw new Error(`Invalid legacy group: ${groupKey}`)
  }

  const groupSlug = slug(groupKey)
  const topicId = `vocab-n5-${groupSlug}`
  topics.push({ topicId, legacyGroupId: groupKey, label: group.label.trim(), count: group.items.length })

  group.items.forEach((item, index) => {
    if (typeof item.q !== 'string' || !item.q.trim()) throw new Error(`Missing term: ${groupKey}#${index}`)
    if (!Array.isArray(item.a) || item.a.length === 0) throw new Error(`Missing readings: ${groupKey}#${index}`)
    if (typeof item.m?.vi !== 'string' || !item.m.vi.trim()) throw new Error(`Missing meaning: ${groupKey}#${index}`)
    const term = item.q.trim()
    if (termSet.has(term)) throw new Error(`Duplicate term requires manual identity review: ${term}`)
    termSet.add(term)

    const readings = normalizeReadings(item.a)
    if (readings.length === 0) throw new Error(`Normalized readings empty: ${groupKey}#${index}`)
    const itemKey = `${groupSlug}-${String(index + 1).padStart(3, '0')}`
    cards.push({
      cardId: `n5:vocabulary:${sourceKey}:${itemKey}`,
      schemaVersion: 1,
      sourceVersion,
      level: 'n5',
      topicId,
      contentType: 'vocabulary',
      term,
      readings,
      meanings: { vi: item.m.vi.trim() },
    })
  })
}

if (topics.length !== 15) throw new Error(`Expected 15 topics, got ${topics.length}`)
if (cards.length !== 923) throw new Error(`Expected 923 cards, got ${cards.length}`)

const moduleText = [
  "import { parseContentBundle } from '../schema'",
  '',
  `export const VOCAB_N5_SOURCE_VERSION = '${sourceVersion}' as const`,
  '',
  `export const VOCAB_N5_TOPICS = ${JSON.stringify(topics, null, 2)} as const`,
  '',
  'export const VOCAB_N5_BUNDLE = parseContentBundle(' + JSON.stringify({
    bundleId: 'n5-vocabulary-v1',
    schemaVersion: 1,
    sourceVersion,
    cards,
  }, null, 2) + ')',
  '',
].join('\n')

fs.writeFileSync(outPath, moduleText, 'utf8')
console.log(JSON.stringify({
  sourceVersion,
  topicCount: topics.length,
  cardCount: cards.length,
  normalizedReadingCount: cards.reduce((sum, card) => sum + card.readings.length, 0),
}, null, 2))
