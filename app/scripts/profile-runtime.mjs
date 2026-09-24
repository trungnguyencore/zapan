import { writeFile } from 'node:fs/promises'
import net from 'node:net'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { chromium } from '@playwright/test'
import { preview } from 'vite'

const appRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..')
const host = '127.0.0.1'
const sampleCount = 3
const routes = [
  { path: '/', label: 'today' },
  { path: '/learn', label: 'learn' },
  { path: '/progress', label: 'progress' },
  { path: '/roadmap', label: 'roadmap' },
  { path: '/practice/writing', label: 'writing-setup' },
  { path: '/practice/match', label: 'match-setup' },
]

function parseOutputPath() {
  const index = process.argv.indexOf('--out')
  if (index === -1) return null
  const value = process.argv[index + 1]
  if (!value) throw new Error('--out requires a file path')
  return path.resolve(appRoot, value)
}

async function findFreePort() {
  return new Promise((resolve, reject) => {
    const server = net.createServer()
    server.unref()
    server.on('error', reject)
    server.listen(0, host, () => {
      const address = server.address()
      if (!address || typeof address === 'string') {
        server.close()
        reject(new Error('Could not resolve a local preview port'))
        return
      }
      const port = address.port
      server.close((error) => error ? reject(error) : resolve(port))
    })
  })
}

function median(values) {
  const sorted = [...values].sort((a, b) => a - b)
  const middle = Math.floor(sorted.length / 2)
  return sorted.length % 2 === 0
    ? (sorted[middle - 1] + sorted[middle]) / 2
    : sorted[middle]
}

function round(value, digits = 2) {
  const factor = 10 ** digits
  return Math.round(value * factor) / factor
}

function aggregate(samples) {
  const numericKeys = Object.keys(samples[0]).filter((key) => typeof samples[0][key] === 'number')
  return Object.fromEntries(numericKeys.map((key) => [key, round(median(samples.map((sample) => sample[key])))]))
}

function cdpMetricMap(metrics) {
  return new Map(metrics.map((metric) => [metric.name, metric.value]))
}

async function collectSample(browser, baseUrl, route) {
  const context = await browser.newContext()
  const page = await context.newPage()
  const cdp = await context.newCDPSession(page)
  await cdp.send('Network.enable')
  await cdp.send('Network.setCacheDisabled', { cacheDisabled: true })
  await cdp.send('Performance.enable')

  try {
    await page.goto(baseUrl + route.path, { waitUntil: 'domcontentloaded' })
    await page.locator('#main-content').waitFor({ state: 'visible' })
    await page.waitForLoadState('networkidle')

    const browserMetrics = await page.evaluate(() => {
      const navigation = performance.getEntriesByType('navigation')[0]
      const paints = performance.getEntriesByType('paint')
      const resources = performance.getEntriesByType('resource')
      const fcp = paints.find((entry) => entry.name === 'first-contentful-paint')
      const jsResources = resources.filter((entry) => {
        try {
          return new URL(entry.name).pathname.endsWith('.js')
        } catch {
          return false
        }
      })

      const sum = (entries, key) => entries.reduce((total, entry) => total + (Number(entry[key]) || 0), 0)

      return {
        firstContentfulPaintMs: fcp?.startTime ?? -1,
        domContentLoadedMs: navigation?.domContentLoadedEventEnd ?? -1,
        loadEventMs: navigation?.loadEventEnd ?? -1,
        resourceCount: resources.length,
        transferBytes: sum(resources, 'transferSize'),
        encodedBodyBytes: sum(resources, 'encodedBodySize'),
        jsResourceCount: jsResources.length,
        jsTransferBytes: sum(jsResources, 'transferSize'),
        jsEncodedBodyBytes: sum(jsResources, 'encodedBodySize'),
      }
    })

    const cdpMetrics = cdpMetricMap((await cdp.send('Performance.getMetrics')).metrics)
    return {
      ...browserMetrics,
      taskDurationMs: (cdpMetrics.get('TaskDuration') ?? 0) * 1000,
      scriptDurationMs: (cdpMetrics.get('ScriptDuration') ?? 0) * 1000,
      layoutDurationMs: (cdpMetrics.get('LayoutDuration') ?? 0) * 1000,
      recalcStyleDurationMs: (cdpMetrics.get('RecalcStyleDuration') ?? 0) * 1000,
      jsHeapUsedBytes: cdpMetrics.get('JSHeapUsedSize') ?? 0,
      nodes: cdpMetrics.get('Nodes') ?? 0,
      layoutCount: cdpMetrics.get('LayoutCount') ?? 0,
      recalcStyleCount: cdpMetrics.get('RecalcStyleCount') ?? 0,
    }
  } finally {
    await context.close()
  }
}

const outputPath = parseOutputPath()
const port = await findFreePort()
const server = await preview({
  root: appRoot,
  preview: { host, port, strictPort: true },
})
const browser = await chromium.launch({ headless: true })

try {
  const baseUrl = `http://${host}:${port}`
  const routeResults = []

  for (const route of routes) {
    const samples = []
    for (let index = 0; index < sampleCount; index += 1) {
      samples.push(await collectSample(browser, baseUrl, route))
    }
    routeResults.push({
      ...route,
      median: aggregate(samples),
      samples: samples.map((sample) => Object.fromEntries(
        Object.entries(sample).map(([key, value]) => [key, typeof value === 'number' ? round(value) : value]),
      )),
    })
  }

  const result = {
    schemaVersion: 1,
    measuredAt: new Date().toISOString(),
    environment: {
      kind: 'local-production-preview',
      browser: `Chromium ${browser.version()}`,
      node: process.version,
      platform: process.platform,
      cache: 'disabled per browser context',
      samplesPerRoute: sampleCount,
    },
    caveat: 'Local lab baseline only. These measurements are not production Web Vitals and do not represent real-user network/device performance.',
    routes: routeResults,
  }

  const json = JSON.stringify(result, null, 2) + '\n'
  process.stdout.write(json)

  if (outputPath) {
    await writeFile(outputPath, json, 'utf8')
    console.error(`Runtime profile written to ${outputPath}`)
  }
} finally {
  await browser.close()
  await new Promise((resolve, reject) => {
    server.httpServer.close((error) => error ? reject(error) : resolve())
  })
}
