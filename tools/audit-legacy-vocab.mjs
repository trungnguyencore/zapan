import fs from 'node:fs'
import path from 'node:path'

const sourcePath = 'D:\\STUDY\\JAPANESE\\WEB\\gd9\\src\\data\\vocab_data.js'
const outPath = 'D:\\OTHERS\\LATVAT\\japan\\docs\\content\\VOCAB_N5_AUDIT.json'

const text = fs.readFileSync(sourcePath, 'utf8')
const prefix = 'export const VOCAB_N5_FULL = '
if (!text.includes(prefix)) throw new Error('Legacy vocab export wrapper not found')
const jsonText = text.slice(text.indexOf(prefix) + prefix.length).trim().replace(/;\s*$/, '')
const data = JSON.parse(jsonText)

const groups = []
const termOccurrences = new Map()
const exactOccurrences = new Map()
const issues = []
let totalItems = 0
let commaPackedReadings = 0
const commaPackedItems = []
let emptyReadings = 0
let missingMeaning = 0
let nonArrayReadings = 0

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
    const term = typeof item?.q === 'string' ? item.q.trim() : ''
    const readings = Array.isArray(item?.a) ? item.a : null
    const meaning = typeof item?.m?.vi === 'string' ? item.m.vi.trim() : ''

    if (!term) issues.push({ type: 'missing-term', groupKey, index })
    if (!readings) {
      nonArrayReadings += 1
      issues.push({ type: 'readings-not-array', groupKey, index, term })
    } else {
      if (readings.length === 0 || readings.every((value) => typeof value !== 'string' || !value.trim())) {
        emptyReadings += 1
        issues.push({ type: 'empty-readings', groupKey, index, term })
      }
      if (readings.some((value) => typeof value === 'string' && /[,，、]/.test(value))) {
        commaPackedReadings += 1
        commaPackedItems.push({ groupKey, index, term, readings })
      }
    }
    if (!meaning) {
      missingMeaning += 1
      issues.push({ type: 'missing-vi-meaning', groupKey, index, term })
    }

    if (term) {
      const positions = termOccurrences.get(term) ?? []
      positions.push({ groupKey, index })
      termOccurrences.set(term, positions)
    }
    const normalizedReadings = readings?.filter((value) => typeof value === 'string').map((value) => value.trim()).join('|') ?? ''
    const exactKey = `${term}\u0000${normalizedReadings}\u0000${meaning}`
    const exact = exactOccurrences.get(exactKey) ?? []
    exact.push({ groupKey, index, term })
    exactOccurrences.set(exactKey, exact)
  })
}

const duplicateTerms = [...termOccurrences.entries()]
  .filter(([, positions]) => positions.length > 1)
  .map(([term, positions]) => ({ term, count: positions.length, positions }))

const exactDuplicates = [...exactOccurrences.values()]
  .filter((positions) => positions.length > 1)
  .map((positions) => ({ term: positions[0].term, count: positions.length, positions }))

const report = {
  sourcePath,
  generatedAt: new Date().toISOString(),
  parser: 'JSON.parse after removing the static ESM export wrapper; legacy source was not executed',
  groupCount: groups.length,
  totalItems,
  commaPackedReadings,
  commaPackedItems,
  emptyReadings,
  nonArrayReadings,
  missingMeaning,
  duplicateTermCount: duplicateTerms.length,
  exactDuplicateCount: exactDuplicates.length,
  groups,
  duplicateTerms,
  exactDuplicates,
  issues,
}

fs.mkdirSync(path.dirname(outPath), { recursive: true })
fs.writeFileSync(outPath, JSON.stringify(report, null, 2) + '\n', 'utf8')
console.log(JSON.stringify({
  groupCount: report.groupCount,
  totalItems: report.totalItems,
  commaPackedReadings,
  emptyReadings,
  nonArrayReadings,
  missingMeaning,
  duplicateTermCount: duplicateTerms.length,
  exactDuplicateCount: exactDuplicates.length,
  issueCount: issues.length,
}, null, 2))
