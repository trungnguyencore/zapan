import { expect, test } from '@playwright/test'

test('desktop shell, navigation, and owner branding work', async ({ page }, testInfo) => {
  test.skip(testInfo.project.name !== 'chromium-desktop', 'desktop-only smoke test')
  await page.goto('/')
  await expect(page.getByRole('heading', { name: 'Hôm nay học gì?' })).toBeVisible()
  await expect(page.locator('.sidebar')).toBeVisible()
  const instagram = page.locator('.sidebar').getByRole('link', { name: 'Instagram của trunk.ng' })
  await expect(instagram).toHaveAttribute('href', 'https://www.instagram.com/trunk.ng/')
  await expect(instagram).toHaveAttribute('target', '_blank')

  await page.getByRole('navigation', { name: 'Điều hướng chính' }).getByRole('link', { name: 'Learn' }).click()
  await expect(page).toHaveURL(/\/learn$/)
  await expect(page.getByRole('heading', { name: 'Học theo lộ trình, không theo menu rời rạc' })).toBeVisible()

  await page.getByRole('navigation', { name: 'Điều hướng chính' }).getByRole('link', { name: 'Review' }).click()
  await expect(page.getByRole('heading', { name: 'Ôn đúng thứ cần ôn' })).toBeVisible()
})

test('mobile shell uses bottom navigation without horizontal overflow', async ({ page }, testInfo) => {
  test.skip(testInfo.project.name !== 'chromium-mobile', 'mobile-only smoke test')
  await page.goto('/')
  await expect(page.locator('.sidebar')).toBeHidden()
  await expect(page.getByRole('navigation', { name: 'Điều hướng chính trên di động' })).toBeVisible()
  const instagram = page.locator('.mobile-topbar').getByRole('link', { name: 'Instagram của trunk.ng' })
  await expect(instagram).toHaveAttribute('href', 'https://www.instagram.com/trunk.ng/')
  const overflow = await page.evaluate(() => document.documentElement.scrollWidth > document.documentElement.clientWidth)
  expect(overflow).toBe(false)
  await page.getByRole('navigation', { name: 'Điều hướng chính trên di động' }).getByRole('link', { name: 'Progress' }).click()
  await expect(page.getByRole('heading', { name: 'Chỉ hiển thị số liệu có bằng chứng' })).toBeVisible()
})
