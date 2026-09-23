import fs from 'node:fs'

const sourcePath = 'D:\\STUDY\\JAPANESE\\WEB\\gd9\\src\\data\\kanji_data.js'
const outPath = 'D:\\OTHERS\\LATVAT\\japan\\app\\src\\data\\n5\\kanjiN5.ts'
const prefix = 'export const KANJI_N5_FULL = '
const sourceVersion = 'kanji-n5-legacy-audit-v1'
const sourceKey = 'kanji-n5-v1'

const text = fs.readFileSync(sourcePath, 'utf8')
if (!text.includes(prefix)) throw new Error('Legacy kanji wrapper not found')
const data = JSON.parse(text.slice(text.indexOf(prefix) + prefix.length).trim().replace(/;\s*$/, ''))

function slug(value) {
  return value.toLowerCase().replace(/^k5_/, '').replace(/_/g, '-').replace(/[^a-z0-9-]/g, '')
}

const topics = []
const cards = []
const charSet = new Set()

for (const [groupKey, group] of Object.entries(data)) {
  if (group.id !== groupKey || !Array.isArray(group.items) || typeof group.label !== 'string') {
    throw new Error(`Invalid legacy group: ${groupKey}`)
  }

  const groupSlug = slug(groupKey)
  const topicId = `kanji-n5-${groupSlug}`
  topics.push({ topicId, legacyGroupId: groupKey, label: group.label.trim(), count: group.items.length })

  group.items.forEach((item, index) => {
    const character = typeof item.q === 'string' ? item.q.trim() : ''
    if (Array.from(character).length !== 1) throw new Error(`Expected one Kanji character: ${groupKey}#${index}`)
    if (charSet.has(character)) throw new Error(`Duplicate Kanji requires manual identity review: ${character}`)
    charSet.add(character)

    if (!Array.isArray(item.a) || item.a.length === 0 || item.a.some((r) => typeof r !== 'string' || !r.trim())) {
      throw new Error(`Invalid accepted readings: ${groupKey}#${index}`)
    }
    if (typeof item.on !== 'string' || typeof item.kun !== 'string') throw new Error(`Missing on/kun: ${groupKey}#${index}`)
    if (typeof item.m?.vi !== 'string' || !item.m.vi.trim()) throw new Error(`Missing vi meaning: ${groupKey}#${index}`)
    if (typeof item.m?.en !== 'string' || !item.m.en.trim()) throw new Error(`Missing en meaning: ${groupKey}#${index}`)
    if (typeof item.hv !== 'string' || !item.hv.trim()) throw new Error(`Missing Hán Việt: ${groupKey}#${index}`)
    if (typeof item.hint !== 'string' || !item.hint.trim()) throw new Error(`Missing mnemonic: ${groupKey}#${index}`)
    if (!Number.isInteger(item.strokes) || item.strokes <= 0) throw new Error(`Invalid strokes: ${groupKey}#${index}`)

    const itemKey = `${groupSlug}-${String(index + 1).padStart(3, '0')}`
    cards.push({
      cardId: `n5:kanji:${sourceKey}:${itemKey}`,
      schemaVersion: 1,
      sourceVersion,
      level: 'n5',
      topicId,
      contentType: 'kanji',
      character,
      readings: [...new Set(item.a.map((r) => r.trim()))],
      onYomi: item.on.trim(),
      kunYomi: item.kun.trim(),
      meanings: { vi: item.m.vi.trim(), en: item.m.en.trim() },
      hanViet: item.hv.trim(),
      strokeCount: item.strokes,
      mnemonic: item.hint.trim(),
    })
  })
}

if (topics.length !== 10) throw new Error(`Expected 10 topics, got ${topics.length}`)
if (cards.length !== 109) throw new Error(`Expected 109 cards, got ${cards.length}`)

const moduleText = [
  "import { parseContentBundle } from '../schema'",
  '',
  `export const KANJI_N5_SOURCE_VERSION = '${sourceVersion}' as const`,
  '',
  `export const KANJI_N5_TOPICS = ${JSON.stringify(topics, null, 2)} as const`,
  '',
  'export const KANJI_N5_BUNDLE = parseContentBundle(' + JSON.stringify({
    bundleId: 'n5-kanji-v1',
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
  emptyKunCount: cards.filter((card) => !card.kunYomi).length,
}, null, 2))
