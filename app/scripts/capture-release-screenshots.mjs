import { chromium, devices } from '@playwright/test'
import { resolve } from 'node:path'

const baseUrl = process.env.ZAPAN_RELEASE_URL ?? 'http://127.0.0.1:4175/zapan/'
const outputRoot = resolve(process.cwd(), '..', 'docs', 'screenshots')

const browser = await chromium.launch()
try {
  const desktop = await browser.newContext({ viewport: { width: 1440, height: 1000 } })
  const desktopPage = await desktop.newPage()
  await desktopPage.goto(baseUrl)
  await desktopPage.getByRole('main').waitFor()
  await desktopPage.screenshot({ path: resolve(outputRoot, 'zapan-v2-today-desktop.png'), fullPage: true })
  await desktop.close()

  const mobile = await browser.newContext({ ...devices['Pixel 5'] })
  const mobilePage = await mobile.newPage()
  await mobilePage.goto(new URL('learn', baseUrl).toString())
  await mobilePage.getByRole('heading', { name: 'Học theo lộ trình' }).waitFor()
  await mobilePage.screenshot({ path: resolve(outputRoot, 'zapan-v2-learn-mobile.png') })
  await mobile.close()

  console.log('releaseScreenshots=2')
} finally {
  await browser.close()
}
