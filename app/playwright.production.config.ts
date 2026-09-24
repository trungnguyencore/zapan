import { defineConfig, devices } from '@playwright/test'

export default defineConfig({
  testDir: './e2e-production',
  fullyParallel: false,
  workers: 1,
  retries: 0,
  reporter: 'list',
  use: {
    baseURL: 'http://127.0.0.1:4174/zapan/',
    trace: 'retain-on-failure',
  },
  webServer: {
    command: 'npm run build && npm run preview -- --host 127.0.0.1 --port 4174',
    url: 'http://127.0.0.1:4174/zapan/',
    reuseExistingServer: false,
    timeout: 30_000,
  },
  projects: [
    { name: 'chromium-production', use: { ...devices['Desktop Chrome'] } },
  ],
})
