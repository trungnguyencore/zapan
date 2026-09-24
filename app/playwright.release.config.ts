import { defineConfig, devices } from '@playwright/test'

const liveUrl = process.env.ZAPAN_LIVE_URL?.trim()
const localUrl = 'http://127.0.0.1:4175/zapan/'
const baseURL = liveUrl || localUrl

export default defineConfig({
  testDir: './e2e-release',
  fullyParallel: false,
  retries: 0,
  reporter: 'list',
  use: {
    baseURL,
    trace: 'retain-on-failure',
  },
  webServer: liveUrl ? undefined : {
    command: 'npm run build && node scripts/serve-pages-artifact.mjs',
    url: localUrl,
    reuseExistingServer: false,
    timeout: 30_000,
  },
  projects: [
    { name: 'pages-desktop', use: { ...devices['Desktop Chrome'] } },
    { name: 'pages-mobile', use: { ...devices['Pixel 5'] } },
  ],
})
