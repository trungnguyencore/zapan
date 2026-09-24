import { readFile, stat } from 'node:fs/promises'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const appRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..')
const distRoot = path.join(appRoot, 'dist')
const manifestPath = path.join(distRoot, '.vite', 'manifest.json')

const CORE_LIMIT_BYTES = 490_000
const CHUNK_LIMIT_BYTES = 500_000

const manifest = JSON.parse(await readFile(manifestPath, 'utf8'))
const chunks = []
const seenFiles = new Set()

for (const [source, entry] of Object.entries(manifest)) {
  if (!entry || typeof entry !== 'object' || typeof entry.file !== 'string' || !entry.file.endsWith('.js')) continue
  if (seenFiles.has(entry.file)) continue
  seenFiles.add(entry.file)
  const filePath = path.join(distRoot, entry.file)
  const info = await stat(filePath)
  chunks.push({ source, file: entry.file, bytes: info.size, isEntry: entry.isEntry === true })
}

const entryChunks = chunks.filter((chunk) => chunk.isEntry)
if (entryChunks.length !== 1) {
  throw new Error(`Expected exactly one JS entry chunk, found ${entryChunks.length}`)
}

const core = entryChunks[0]
const formatKb = (bytes) => (bytes / 1000).toFixed(2)

console.log('Bundle budget (decimal kB):')
for (const chunk of [...chunks].sort((a, b) => b.bytes - a.bytes)) {
  console.log(`- ${chunk.isEntry ? '[entry] ' : ''}${chunk.file}: ${formatKb(chunk.bytes)} kB`)
}

const failures = []
if (core.bytes > CORE_LIMIT_BYTES) {
  failures.push(`core entry ${formatKb(core.bytes)} kB > ${formatKb(CORE_LIMIT_BYTES)} kB budget`)
}

for (const chunk of chunks) {
  if (chunk.bytes > CHUNK_LIMIT_BYTES) {
    failures.push(`${chunk.file} ${formatKb(chunk.bytes)} kB > ${formatKb(CHUNK_LIMIT_BYTES)} kB chunk budget`)
  }
}

if (failures.length > 0) {
  console.error('\nBundle budget FAILED:')
  for (const failure of failures) console.error(`- ${failure}`)
  process.exitCode = 1
} else {
  console.log(`Bundle budget PASS: core ${formatKb(core.bytes)} kB <= 490.00 kB; all JS chunks <= 500.00 kB.`)
}
