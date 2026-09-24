import { createHash } from 'node:crypto'
import { mkdir, readFile, writeFile } from 'node:fs/promises'
import { dirname, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'

const appRoot = resolve(dirname(fileURLToPath(import.meta.url)), '..')
const sourceDir = resolve(appRoot, 'content-sources', 'openjlpt')
const generatedDir = resolve(appRoot, 'src', 'data', 'openjlpt', 'generated')
await mkdir(generatedDir, { recursive: true })

const commit = (await readFile(resolve(sourceDir, 'SOURCE_COMMIT.txt'), 'utf8')).trim()
if (!/^[0-9a-f]{40}$/.test(commit)) throw new Error('Invalid OpenJLPT source commit')
const shortCommit = commit.slice(0, 12)

const sourceConfigs = [
  { level: 'n4', type: 'vocabulary', file: 'data__json__vocab__n4.json', chunkSize: 100 },
  { level: 'n3', type: 'vocabulary', file: 'data__json__vocab__n3.json', chunkSize: 100 },
  { level: 'n4', type: 'kanji', file: 'data__json__kanji__n4.json', chunkSize: 80 },
  { level: 'n3', type: 'kanji', file: 'data__json__kanji__n3.json', chunkSize: 80 },
]

const unique = (values) => [...new Set(values.filter(Boolean))]
const hasKanji = (value) => /[\u3400-\u9fff]/u.test(value)

function parseCheckedInBundle(relativePath) {
  const text = String.raw`${relativePath}`
  return readFile(resolve(appRoot, text), 'utf8').then((source) => {
    const match = source.match(/parseContentBundle\(([\s\S]*\})\)\s*$/)
    if (!match) throw new Error(`Could not parse checked-in bundle: ${relativePath}`)
    return JSON.parse(match[1])
  })
}

function toHiragana(value) {
  return [...value].map((char) => {
    const code = char.charCodeAt(0)
    return code >= 0x30a1 && code <= 0x30f6 ? String.fromCharCode(code - 0x60) : char
  }).join('')
}

function splitReadings(value) {
  return unique(String(value ?? '').split(/[/,，、]/u).map((item) => item.trim()).filter(Boolean))
}

function cleanKunReading(value) {
  return String(value ?? '').replace(/[.-]/g, '').trim()
}

function sourceVersion(level, type) {
  const kind = type === 'vocabulary' ? 'vocab' : 'kanji'
  return `openjlpt-${shortCommit}-${level}-${kind}-v1`
}

function sourceKey(level, type) {
  const kind = type === 'vocabulary' ? 'vocab' : 'kanji'
  return `openjlpt-${shortCommit}-${level}-${kind}-v1`
}

function transformVocabulary(entry, level, index, topicId) {
  if (!entry || typeof entry.word !== 'string' || entry.word.trim().length === 0) {
    throw new Error(`${level} vocabulary #${index + 1}: missing word`)
  }
  if (!Array.isArray(entry.meanings) || entry.meanings.length === 0) {
    throw new Error(`${level} vocabulary ${entry.word}: missing meanings`)
  }
  const word = entry.word.trim()
  const sourceReadings = splitReadings(entry.reading)
  if (sourceReadings.length === 0 && hasKanji(word)) {
    throw new Error(`${level} vocabulary ${word}: kanji term has no source reading`)
  }
  const readings = sourceReadings.length > 0 ? sourceReadings : [word]
  const meanings = entry.meanings.map((value) => String(value).trim()).filter(Boolean)
  if (meanings.length === 0) throw new Error(`${level} vocabulary ${word}: empty meanings`)

  return {
    cardId: `${level}:vocabulary:${sourceKey(level, 'vocabulary')}:${String(index + 1).padStart(4, '0')}`,
    schemaVersion: 1,
    sourceVersion: sourceVersion(level, 'vocabulary'),
    level,
    topicId,
    contentType: 'vocabulary',
    term: word,
    readings,
    meanings: { en: meanings.join('; ') },
  }
}

function transformKanji(entry, level, index, topicId) {
  if (!entry || typeof entry.character !== 'string' || [...entry.character].length !== 1) {
    throw new Error(`${level} kanji #${index + 1}: invalid character`)
  }
  if (!Number.isInteger(entry.strokes) || entry.strokes <= 0) {
    throw new Error(`${level} kanji ${entry.character}: invalid stroke count`)
  }
  const on = Array.isArray(entry.onyomi) ? entry.onyomi.map((value) => String(value).trim()).filter(Boolean) : []
  const kun = Array.isArray(entry.kunyomi) ? entry.kunyomi.map((value) => String(value).trim()).filter(Boolean) : []
  const readings = unique([...on.map(toHiragana), ...kun.map(cleanKunReading)])
  if (readings.length === 0) throw new Error(`${level} kanji ${entry.character}: missing readings`)
  const meanings = Array.isArray(entry.meanings)
    ? entry.meanings.map((value) => String(value).trim()).filter(Boolean)
    : []
  if (meanings.length === 0) throw new Error(`${level} kanji ${entry.character}: missing meanings`)

  return {
    cardId: `${level}:kanji:${sourceKey(level, 'kanji')}:${String(index + 1).padStart(4, '0')}`,
    schemaVersion: 1,
    sourceVersion: sourceVersion(level, 'kanji'),
    level,
    topicId,
    contentType: 'kanji',
    character: entry.character,
    readings,
    onYomi: on.join('・'),
    kunYomi: kun.join('・'),
    meanings: { en: meanings.join('; ') },
    strokeCount: entry.strokes,
  }
}

function chunked(values, size) {
  const chunks = []
  for (let index = 0; index < values.length; index += size) chunks.push(values.slice(index, index + size))
  return chunks
}

function topicMeta(level, type, partIndex, count, rawStartIndex, rawEndIndex) {
  const prefix = type === 'vocabulary' ? 'vocab' : 'kanji'
  return {
    topicId: `${prefix}-${level}-open-${String(partIndex + 1).padStart(2, '0')}`,
    label: `${level.toUpperCase()} ${type === 'vocabulary' ? 'Vocabulary' : 'Kanji'} source ${String(rawStartIndex).padStart(3, '0')}–${String(rawEndIndex).padStart(3, '0')}`,
    count,
  }
}

function moduleName(level, type, partIndex) {
  return `${level}-${type}-${String(partIndex + 1).padStart(2, '0')}`
}

function exportName(level, type, partIndex) {
  return `OPENJLPT_${level.toUpperCase()}_${type.toUpperCase()}_${String(partIndex + 1).padStart(2, '0')}_BUNDLE`
}

function dedupeKey(entry, type) {
  const value = type === 'vocabulary' ? entry.word : entry.character
  if (typeof value !== 'string' || value.trim().length === 0) return ''
  return value.trim()
}

const [n5VocabularyBundle, n5KanjiBundle] = await Promise.all([
  parseCheckedInBundle('src/data/n5/vocabN5.ts'),
  parseCheckedInBundle('src/data/n5/kanjiN5.ts'),
])

const seen = {
  vocabulary: new Set(n5VocabularyBundle.cards.map((card) => card.term)),
  kanji: new Set(n5KanjiBundle.cards.map((card) => card.character)),
}

const sourceManifest = {
  schemaVersion: 1,
  source: 'OpenJLPT',
  sourceCommit: commit,
  license: 'CC BY-SA 4.0',
  upstreamNotice: 'NOTICE.md',
  deduplication: {
    rule: 'lower-level prompt wins: N5 existing > N4 OpenJLPT > N3 OpenJLPT',
    rationale: 'ZaPan currently quizzes vocabulary by term and kanji by character; duplicate prompts must not create parallel SRS records.',
  },
  files: {},
}

const deduplicationReport = {
  schemaVersion: 1,
  sourceCommit: commit,
  rule: sourceManifest.deduplication.rule,
  excluded: [],
}

const catalogs = {
  n4: { vocabulary: [], kanji: [] },
  n3: { vocabulary: [], kanji: [] },
}
const moduleSpecs = []

for (const config of sourceConfigs) {
  const raw = await readFile(resolve(sourceDir, config.file))
  const entries = JSON.parse(raw.toString('utf8'))
  if (!Array.isArray(entries) || entries.length === 0) throw new Error(`${config.file}: expected non-empty array`)

  sourceManifest.files[config.file] = {
    sha256: createHash('sha256').update(raw).digest('hex'),
    bytes: raw.length,
    rawEntries: entries.length,
    retainedEntries: 0,
    excludedDuplicates: 0,
  }

  const indexedEntries = entries.map((entry, index) => ({ entry, index }))
  const chunks = chunked(indexedEntries, config.chunkSize)

  for (let partIndex = 0; partIndex < chunks.length; partIndex += 1) {
    const rawChunk = chunks[partIndex]
    const retained = []

    for (const item of rawChunk) {
      const key = dedupeKey(item.entry, config.type)
      if (!key) throw new Error(`${config.file} #${item.index + 1}: missing dedupe key`)
      if (seen[config.type].has(key)) {
        sourceManifest.files[config.file].excludedDuplicates += 1
        deduplicationReport.excluded.push({
          level: config.level,
          contentType: config.type,
          key,
          rawIndex: item.index + 1,
        })
        continue
      }
      seen[config.type].add(key)
      retained.push(item)
    }

    sourceManifest.files[config.file].retainedEntries += retained.length
    const rawStartIndex = rawChunk[0].index + 1
    const rawEndIndex = rawChunk[rawChunk.length - 1].index + 1
    const topic = topicMeta(config.level, config.type, partIndex, retained.length, rawStartIndex, rawEndIndex)
    catalogs[config.level][config.type].push(topic)

    const cards = retained.map(({ entry, index }) =>
      config.type === 'vocabulary'
        ? transformVocabulary(entry, config.level, index, topic.topicId)
        : transformKanji(entry, config.level, index, topic.topicId),
    )

    const bundle = {
      bundleId: `openjlpt-${config.level}-${config.type}-part-${String(partIndex + 1).padStart(2, '0')}`,
      schemaVersion: 1,
      sourceVersion: sourceVersion(config.level, config.type),
      cards,
    }
    const name = moduleName(config.level, config.type, partIndex)
    const exported = exportName(config.level, config.type, partIndex)
    const moduleText = `// Generated by scripts/generate-openjlpt-content.mjs from OpenJLPT commit ${commit}.\n// Derived dataset: CC BY-SA 4.0; see app/content-sources/openjlpt/NOTICE.md.\nimport { parseContentBundle } from '../../schema'\n\nexport const ${exported} = parseContentBundle(${JSON.stringify(bundle, null, 2)})\n`
    await writeFile(resolve(generatedDir, `${name}.ts`), moduleText, 'utf8')
    moduleSpecs.push({ name, exported })
  }
}

const loaders = moduleSpecs.map(({ name, exported }) =>
  `  () => import('./${name}').then((module) => module.${exported}),`
).join('\n')

const catalogText = `// Generated by scripts/generate-openjlpt-content.mjs from OpenJLPT commit ${commit}.\nimport type { LearningTopicMeta } from '../../n5/topicCatalog'\n\nexport const OPENJLPT_SOURCE_COMMIT = '${commit}' as const\nexport const OPENJLPT_SOURCE_VERSION = 'openjlpt-${shortCommit}' as const\n\nexport const VOCAB_N4_TOPIC_CATALOG: readonly LearningTopicMeta[] = ${JSON.stringify(catalogs.n4.vocabulary, null, 2)}\nexport const KANJI_N4_TOPIC_CATALOG: readonly LearningTopicMeta[] = ${JSON.stringify(catalogs.n4.kanji, null, 2)}\nexport const VOCAB_N3_TOPIC_CATALOG: readonly LearningTopicMeta[] = ${JSON.stringify(catalogs.n3.vocabulary, null, 2)}\nexport const KANJI_N3_TOPIC_CATALOG: readonly LearningTopicMeta[] = ${JSON.stringify(catalogs.n3.kanji, null, 2)}\n`

const loaderText = `// Generated by scripts/generate-openjlpt-content.mjs from OpenJLPT commit ${commit}.\nimport type { ContentBundle } from '../../../domain/content/types'\n\nconst BATCH_SIZE = 8\nconst bundleLoaders: Array<() => Promise<ContentBundle>> = [\n${loaders}\n]\n\nexport async function loadOpenJlptBundles(): Promise<ContentBundle[]> {\n  const bundles: ContentBundle[] = []\n  for (let index = 0; index < bundleLoaders.length; index += BATCH_SIZE) {\n    const batch = bundleLoaders.slice(index, index + BATCH_SIZE)\n    bundles.push(...await Promise.all(batch.map((load) => load())))\n  }\n  return bundles\n}\n`

const indexText = `// Compatibility barrel generated by scripts/generate-openjlpt-content.mjs.\nexport * from './catalog'\nexport { loadOpenJlptBundles } from './loader'\n`

await writeFile(resolve(generatedDir, 'catalog.ts'), catalogText, 'utf8')
await writeFile(resolve(generatedDir, 'loader.ts'), loaderText, 'utf8')
await writeFile(resolve(generatedDir, 'index.ts'), indexText, 'utf8')
await writeFile(resolve(sourceDir, 'SOURCE_MANIFEST.json'), JSON.stringify(sourceManifest, null, 2) + '\n', 'utf8')
await writeFile(resolve(sourceDir, 'DEDUPLICATION_REPORT.json'), JSON.stringify(deduplicationReport, null, 2) + '\n', 'utf8')

const n4Vocab = catalogs.n4.vocabulary.reduce((sum, topic) => sum + topic.count, 0)
const n4Kanji = catalogs.n4.kanji.reduce((sum, topic) => sum + topic.count, 0)
const n3Vocab = catalogs.n3.vocabulary.reduce((sum, topic) => sum + topic.count, 0)
const n3Kanji = catalogs.n3.kanji.reduce((sum, topic) => sum + topic.count, 0)
console.log(`OpenJLPT generated from ${commit}`)
console.log(`N4 retained=${n4Vocab + n4Kanji} vocab=${n4Vocab} kanji=${n4Kanji}`)
console.log(`N3 retained=${n3Vocab + n3Kanji} vocab=${n3Vocab} kanji=${n3Kanji}`)
console.log(`Excluded duplicates=${deduplicationReport.excluded.length}`)
console.log(`Generated modules=${moduleSpecs.length}`)
