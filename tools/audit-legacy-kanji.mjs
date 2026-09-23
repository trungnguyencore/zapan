import fs from 'node:fs'
import path from 'node:path'

const sourcePath = 'D:\\STUDY\\JAPANESE\\WEB\\gd9\\src\\data\\kanji_data.js'
const outPath = 'D:\\OTHERS\\LATVAT\\japan\\docs\\content\\KANJI_N5_AUDIT.json'
const prefix = 'export const KANJI_N5_FULL = '

const text = fs.readFileSync(sourcePath, 'utf8')
if (!text.includes(prefix)) throw new Error('Legacy kanji export wrapper not found')
const data = JSON.parse(text.slice(text.indexOf(prefix) + prefix.length).trim().replace(/;\s*$/, ''))

const groups = []
const issues = []
const charOccurrences = new Map()
const packedReadingItems = []
const nonSingleCharacterItems = []
let totalItems = 0
let missingOn = 0
let emptyOn = 0
let missingKun = 0
let emptyKun = 0
const emptyKunItems = []
let missingEn = 0
let missingHv = 0
let missingHint = 0
let invalidStrokes = 0

for (const [groupKey, group] of Object.entries(data)) {
  if (!group || typeof group !== 'object') {
    issues.push({ type: 'invalid-group', groupKey })
    continue
  }
  const items = Array.isArray(group.items) ? group.items : []
  groups.push({ key: groupKey, id: group.id ?? null, label: group.label ?? null, count: items.length })
  if (group.id !== groupKey) issues.push({ type: 'group-id-mismatch', groupKey, id: group.id ?? null })

  items.forEach((item, index) => {
    totalItems += 1
    const char = typeof item?.q === 'string' ? item.q.trim() : ''
    const readings = Array.isArray(item?.a) ? item.a : null

    if (!char) issues.push({ type: 'missing-character', groupKey, index })
    else if (Array.from(char).length !== 1) nonSingleCharacterItems.push({ groupKey, index, char })
    if (!readings || readings.length === 0 || readings.some((r) => typeof r !== 'string' || !r.trim())) {
      issues.push({ type: 'invalid-accepted-readings', groupKey, index, char })
    }
    if (readings?.some((r) => /[,，、]/.test(r))) packedReadingItems.push({ groupKey, index, char, readings })

    if (typeof item?.on !== 'string') { missingOn += 1; issues.push({ type: 'missing-on', groupKey, index, char }) }
    else if (!item.on.trim()) emptyOn += 1

    if (typeof item?.kun !== 'string') { missingKun += 1; issues.push({ type: 'missing-kun', groupKey, index, char }) }
    else if (!item.kun.trim()) { emptyKun += 1; emptyKunItems.push({ groupKey, index, char }) }

    if (typeof item?.m?.vi !== 'string' || !item.m.vi.trim()) issues.push({ type: 'missing-vi', groupKey, index, char })
    if (typeof item?.m?.en !== 'string' || !item.m.en.trim()) { missingEn += 1; issues.push({ type: 'missing-en', groupKey, index, char }) }
    if (typeof item?.hv !== 'string' || !item.hv.trim()) { missingHv += 1; issues.push({ type: 'missing-hv', groupKey, index, char }) }
    if (typeof item?.hint !== 'string' || !item.hint.trim()) { missingHint += 1; issues.push({ type: 'missing-hint', groupKey, index, char }) }
    if (!Number.isInteger(item?.strokes) || item.strokes <= 0) { invalidStrokes += 1; issues.push({ type: 'invalid-strokes', groupKey, index, char, strokes: item?.strokes ?? null }) }

    if (char) {
      const positions = charOccurrences.get(char) ?? []
      positions.push({ groupKey, index })
      charOccurrences.set(char, positions)
    }
  })
}

const duplicateCharacters = [...charOccurrences.entries()]
  .filter(([, positions]) => positions.length > 1)
  .map(([character, positions]) => ({ character, count: positions.length, positions }))

const report = {
  sourcePath,
  generatedAt: new Date().toISOString(),
  parser: 'JSON.parse after removing the static ESM export wrapper; legacy source was not executed',
  groupCount: groups.length,
  totalItems,
  duplicateCharacterCount: duplicateCharacters.length,
  packedReadingCount: packedReadingItems.length,
  nonSingleCharacterCount: nonSingleCharacterItems.length,
  nonSingleCharacterItems,
  missingOn,
  emptyOn,
  missingKun,
  emptyKun,
  emptyKunItems,
  missingEn,
  missingHv,
  missingHint,
  invalidStrokes,
  groups,
  duplicateCharacters,
  packedReadingItems,
  issues,
}

fs.mkdirSync(path.dirname(outPath), { recursive: true })
fs.writeFileSync(outPath, JSON.stringify(report, null, 2) + '\n', 'utf8')
console.log(JSON.stringify({
  groupCount: report.groupCount,
  totalItems,
  duplicateCharacterCount: duplicateCharacters.length,
  packedReadingCount: packedReadingItems.length,
  missingOn,
  emptyOn,
  missingKun,
  emptyKun,
  missingEn,
  missingHv,
  missingHint,
  invalidStrokes,
  issueCount: issues.length,
}, null, 2))
