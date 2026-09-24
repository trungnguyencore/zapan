import { defineConfig, devices } from '@playwright/test'

export default defineConfig({
  testDir: './e2e-release',
  fullyParallel: false,
  retries: 0,
  reporter: 'list',
  use: {
    baseURL: 'http://127.0.0.1:4175/zapan/',
    trace: 'retain-on-failure',
  },
  webServer: {
    command: 'npm run build && node scripts/serve-pages-artifact.mjs',
    url: 'http://127.0.0.1:4175/zapan/',
    reuseExistingServer: false,
    timeout: 30_000,
  },
  projects: [
    { name: 'pages-desktop', use: { ...devices['Desktop Chrome'] } },
    { name: 'pages-mobile', use: { ...devices['Pixel 5'] } },
  ],
})
