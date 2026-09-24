import { expect, test } from '@playwright/test'

test('built Pages artifact loads from the /zapan/ project prefix', async ({ page }) => {
  const response = await page.goto('')
  expect(response?.status()).toBe(200)
  await expect(page).toHaveTitle('ZaPan — Japanese Learning')
  await expect(page.getByRole('main')).toBeVisible()

  const html = await response!.text()
  expect(html).toContain('href="/zapan/favicon.svg"')
  expect(html).toMatch(/href="\/zapan\/assets\/[^"]+\.css"/)
  expect(html).toMatch(/src="\/zapan\/assets\/[^"]+\.js"/)
})

test('GitHub Pages 404 fallback preserves and renders a deep route', async ({ page }) => {
  const response = await page.goto('learn')
  expect(response?.status()).toBe(404)
  await expect(page).toHaveURL(/\/zapan\/learn$/)
  await expect(page.getByRole('heading', { name: 'Học theo lộ trình' })).toBeVisible()

  const reload = await page.reload()
  expect(reload?.status()).toBe(404)
  await expect(page.getByRole('heading', { name: 'Học theo lộ trình' })).toBeVisible()
})
