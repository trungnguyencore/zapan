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
  await expect(page.getByRole('heading', { name: 'Học theo lộ trình' })).toBeVisible()

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
  await expect(page.getByRole('heading', { name: 'Tiến độ từ dữ liệu thật' })).toBeVisible()
})

test('account surface lazy-loads Firebase Auth without blocking Guest', async ({ page }, testInfo) => {
  test.skip(testInfo.project.name !== 'chromium-desktop', 'desktop account smoke test')
  await page.goto('/')
  await page.locator('.sidebar').getByRole('link', { name: 'Account' }).click()
  await expect(page).toHaveURL(/\/account$/)
  await expect(page.getByRole('heading', { name: 'Guest hoặc tài khoản' })).toBeVisible()
  await expect(page.getByText(/không tự trộn progress Guest vào account/i)).toBeVisible()
  await expect(page.getByRole('button', { name: 'Đăng nhập' })).toBeVisible({ timeout: 10_000 })
})

test('a real Kana session persists progress across reload', async ({ page }, testInfo) => {
  test.skip(testInfo.project.name !== 'chromium-desktop', 'desktop persistence flow')
  await page.goto('/')
  await page.getByRole('link', { name: 'Bắt đầu phiên hôm nay' }).click()
  await expect(page).toHaveURL(/\/session\/today$/)

  for (const answer of ['a', 'i', 'u', 'e', 'o']) {
    const input = page.getByLabel('Câu trả lời')
    await input.fill(answer)
    await page.getByRole('button', { name: 'Kiểm tra' }).click()
    await expect(page.getByRole('status')).toContainText('Đúng')
    const nextLabel = answer === 'o' ? 'Xem kết quả' : 'Câu tiếp theo'
    await page.getByRole('button', { name: nextLabel }).click()
  }

  await expect(page.getByRole('heading', { name: 'Hoàn thành phiên học' })).toBeVisible()
  await expect(page.getByText('100%')).toBeVisible()
  await page.getByRole('link', { name: 'Về Today' }).click()
  await page.getByRole('navigation', { name: 'Điều hướng chính' }).getByRole('link', { name: 'Progress' }).click()
  await expect(page.getByText('5/92')).toBeVisible()
  await page.reload()
  await expect(page.getByText('5/92')).toBeVisible()
})
