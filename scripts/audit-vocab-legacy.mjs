import { readFile, writeFile } from 'node:fs/promises'
import path from 'node:path'

const sourcePath = 'D:\\STUDY\\JAPANESE\\WEB\\gd9\\src\\data\\vocab_data.js'
const root = 'D:\\OTHERS\\LATVAT\\japan'
const reportDir = path.join(root, 'docs', 'content', 'audits')

const raw = await readFile(sourcePath, 'utf8')
const marker = 'export const VOCAB_N5_FULL ='
const start = raw.indexOf(marker)
if (start < 0) throw new Error('VOCAB_N5_FULL export marker not found')
const objectStart = raw.indexOf('{', start)
const objectEnd = raw.lastIndexOf('};')
if (objectStart < 0 || objectEnd < objectStart) throw new Error('Could not isolate VOCAB_N5_FULL object')
const groups = JSON.parse(raw.slice(objectStart, objectEnd + 1))

const issue = {
  groupKeyMismatch: [],
  badGroupPrefix: [],
  missingLabel: [],
  missingItems: [],
  missingQuestion: [],
  missingReadings: [],
  badReadingType: [],
  missingMeaningVi: [],
  questionWhitespace: [],
  readingWhitespace: [],
  meaningWhitespace: [],
  compoundReadingSeparators: [],
  duplicateExact: [],
  duplicateQuestionWithinGroup: [],
  duplicateQuestionAcrossGroups: [],
}

const groupStats = []
const exactSeen = new Map()
const questionSeen = new Map()

for (const [groupKey, group] of Object.entries(groups)) {
  const items = Array.isArray(group?.items) ? group.items : []
  groupStats.push({ key: groupKey, id: group?.id ?? null, label: group?.label ?? null, items: items.length })
  if (group?.id !== groupKey) issue.groupKeyMismatch.push({ groupKey, id: group?.id ?? null })
  if (!String(groupKey).startsWith('n5_')) issue.badGroupPrefix.push(groupKey)
  if (typeof group?.label !== 'string' || !group.label.trim()) issue.missingLabel.push(groupKey)
  if (!Array.isArray(group?.items)) issue.missingItems.push(groupKey)

  const within = new Map()
  for (let index = 0; index < items.length; index += 1) {
    const item = items[index]
    const loc = `${groupKey}[${index}]`
    const q = item?.q
    const readings = item?.a
    const meaning = item?.m?.vi

    if (typeof q !== 'string' || !q.trim()) issue.missingQuestion.push(loc)
    if (!Array.isArray(readings) || readings.length === 0) issue.missingReadings.push({ loc, q: q ?? null })
    if (Array.isArray(readings) && readings.some((value) => typeof value !== 'string' || !value.trim())) {
      issue.badReadingType.push({ loc, q: q ?? null, readings })
    }
    if (typeof meaning !== 'string' || !meaning.trim()) issue.missingMeaningVi.push({ loc, q: q ?? null })

    if (typeof q === 'string' && q !== q.trim()) issue.questionWhitespace.push({ loc, q })
    if (Array.isArray(readings)) {
      readings.forEach((reading, readingIndex) => {
        if (typeof reading !== 'string') return
        if (reading !== reading.trim()) issue.readingWhitespace.push({ loc, readingIndex, reading })
        if (/[,，、/]/u.test(reading)) issue.compoundReadingSeparators.push({ loc, q, readingIndex, reading })
      })
    }
    if (typeof meaning === 'string' && meaning !== meaning.trim()) issue.meaningWhitespace.push({ loc, q, meaning })

    const normalizedQ = typeof q === 'string' ? q.trim() : ''
    const normalizedReadings = Array.isArray(readings)
      ? readings.filter((value) => typeof value === 'string').map((value) => value.trim()).sort()
      : []
    const exactKey = JSON.stringify([normalizedQ, normalizedReadings, typeof meaning === 'string' ? meaning.trim() : ''])
    if (exactSeen.has(exactKey)) issue.duplicateExact.push({ first: exactSeen.get(exactKey), duplicate: loc, q: normalizedQ })
    else exactSeen.set(exactKey, loc)

    if (normalizedQ) {
      const previousWithin = within.get(normalizedQ)
      if (previousWithin !== undefined) issue.duplicateQuestionWithinGroup.push({ group: groupKey, q: normalizedQ, firstIndex: previousWithin, duplicateIndex: index })
      else within.set(normalizedQ, index)

      const locations = questionSeen.get(normalizedQ) ?? []
      locations.push(loc)
      questionSeen.set(normalizedQ, locations)
    }
  }
}

for (const [q, locations] of questionSeen.entries()) {
  const groupsForQuestion = new Set(locations.map((loc) => loc.slice(0, loc.indexOf('['))))
  if (groupsForQuestion.size > 1) issue.duplicateQuestionAcrossGroups.push({ q, locations })
}

const totalItems = groupStats.reduce((sum, group) => sum + group.items, 0)
const report = {
  sourcePath,
  auditedAt: new Date().toISOString(),
  groups: groupStats.length,
  totalItems,
  uniqueQuestions: questionSeen.size,
  groupStats,
  issueCounts: Object.fromEntries(Object.entries(issue).map(([key, value]) => [key, value.length])),
  issues: issue,
}

await writeFile(path.join(reportDir, 'VOCAB_N5_LEGACY_AUDIT.json'), JSON.stringify(report, null, 2) + '\n', 'utf8')

const issueRows = Object.entries(report.issueCounts).map(([name, count]) => `| ${name} | ${count} |`).join('\n')
const groupRows = groupStats.map((group) => `| ${group.key} | ${group.label ?? '—'} | ${group.items} |`).join('\n')
const compoundSamples = issue.compoundReadingSeparators.slice(0, 30).map((entry) => `- ${entry.loc}: **${entry.q}** → \`${entry.reading}\``).join('\n') || '- None'
const duplicateSamples = issue.duplicateQuestionAcrossGroups.slice(0, 30).map((entry) => `- **${entry.q}**: ${entry.locations.join(', ')}`).join('\n') || '- None'

const md = `# N5 Vocabulary Legacy Audit

## Scope
Read-only source: \`${sourcePath}\`.
This report audits the legacy dataset as input material only. It does not certify JLPT level accuracy, translation quality, or pedagogical quality.

## Inventory
- Groups: **${groupStats.length}**
- Items: **${totalItems}**
- Unique written forms/questions: **${questionSeen.size}**

| Group | Legacy label | Items |
| --- | --- | ---: |
${groupRows}

## Structural issue counts
| Check | Count |
| --- | ---: |
${issueRows}

## Reading entries containing separators
These require normalization review because a single legacy \`a[]\` element may encode multiple readings.

${compoundSamples}

## Written forms appearing across multiple groups
These are not automatically errors; they require semantic review before deduplication.

${duplicateSamples}

## Audit boundary
This automated pass checks structure and normalization hazards only.
Before ZaPan v2 marks the vocabulary bundle VERIFIED, normalization must preserve meanings/readings, stable IDs must be assigned, duplicate semantics must be reviewed, and the resulting bundle must pass runtime schema + regression tests.
`

await writeFile(path.join(reportDir, 'VOCAB_N5_LEGACY_AUDIT.md'), md, 'utf8')
console.log(JSON.stringify({ groups: report.groups, totalItems, uniqueQuestions: report.uniqueQuestions, issueCounts: report.issueCounts }, null, 2))
