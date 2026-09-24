import { defineConfig, devices } from '@playwright/test'

const liveUrl = process.env.ZAPAN_LIVE_URL?.trim()
const localUrl = 'http://127.0.0.1:4174/zapan/'
const baseURL = liveUrl || localUrl

export default defineConfig({
  testDir: './e2e-production',
  fullyParallel: false,
  workers: 1,
  retries: 0,
  reporter: 'list',
  use: {
    baseURL,
    trace: 'retain-on-failure',
  },
  webServer: liveUrl ? undefined : {
    command: 'npm run build && npm run preview -- --host 127.0.0.1 --port 4174',
    url: localUrl,
    reuseExistingServer: false,
    timeout: 30_000,
  },
  projects: [
    { name: 'chromium-production', use: { ...devices['Desktop Chrome'] } },
  ],
})
