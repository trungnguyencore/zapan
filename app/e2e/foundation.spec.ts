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
  await expect(page.getByText('5/1124')).toBeVisible()
  await expect(page.locator('.metric-card').filter({ hasText: 'Ngày streak hiện tại' })).toContainText('1')
  await expect(page.locator('.heat-cell.has-activity')).toHaveCount(1)
  await expect(page.locator('.heat-cell.has-activity')).toHaveAttribute('aria-label', /5 lượt/)
  await page.reload()
  await expect(page.getByText('5/1124')).toBeVisible()
  await expect(page.locator('.metric-card').filter({ hasText: 'Ngày streak hiện tại' })).toContainText('1')
})

test('verified N5 Vocabulary topic runs through the real study pipeline', async ({ page }, testInfo) => {
  test.skip(testInfo.project.name !== 'chromium-desktop', 'desktop vocabulary learning flow')
  await page.goto('/learn')
  await expect(page.getByRole('heading', { name: 'Vocabulary' })).toBeVisible()
  await page.getByRole('link', { name: 'Học Số đếm & Lượng từ' }).click()
  await expect(page).toHaveURL(/\/session\/learn\/vocab-n5-numbers$/)
  await expect(page.getByText('五つ', { exact: true })).toBeVisible()
  await expect(page.getByText('Nhập cách đọc bằng kana')).toBeVisible()

  await page.getByLabel('Câu trả lời').fill('いつつ')
  await page.getByRole('button', { name: 'Kiểm tra' }).click()
  const feedback = page.getByRole('status')
  await expect(feedback).toContainText('Đúng')
  await expect(feedback).toContainText('Đáp án: いつつ')
  await expect(feedback).toContainText(/Nghĩa: năm cái/)
})

test('verified N5 Kanji topic reveals audited metadata after answer', async ({ page }, testInfo) => {
  test.skip(testInfo.project.name !== 'chromium-desktop', 'desktop kanji learning flow')
  await page.goto('/learn')
  await expect(page.getByRole('heading', { name: 'Kanji' })).toBeVisible()
  await page.getByRole('link', { name: 'Học Số đếm', exact: true }).click()
  await expect(page).toHaveURL(/\/session\/learn\/kanji-n5-numbers$/)
  await expect(page.getByText('一', { exact: true })).toBeVisible()

  await page.getByLabel('Câu trả lời').fill('いち')
  await page.getByRole('button', { name: 'Kiểm tra' }).click()
  const feedback = page.getByRole('status')
  await expect(feedback).toContainText('Đúng')
  await expect(feedback).toContainText('Hán Việt: Nhất')
  await expect(feedback).toContainText('1 nét')
  await expect(feedback).toContainText('Gợi nhớ:')
})

test('Library searches the complete verified repository and filters content types', async ({ page }) => {
  await page.goto('/library')
  await expect(page.getByRole('heading', { name: 'Tra cứu nội dung đã xác minh' })).toBeVisible()
  await expect(page.getByText('1124 kết quả')).toBeVisible()

  const search = page.getByLabel('Tìm ký tự, từ, reading hoặc nghĩa')
  await search.fill('いつつ')
  await expect(page.getByText('1 kết quả')).toBeVisible()
  await expect(page.getByText('五つ', { exact: true })).toBeVisible()
  await expect(page.getByText(/năm cái/)).toBeVisible()

  await search.fill('')
  await page.getByRole('button', { name: 'Kanji' }).click()
  await expect(page.getByText('109 kết quả')).toBeVisible()
  await search.fill('Nhất')
  await expect(page.getByText('一', { exact: true })).toBeVisible()
  await expect(page.getByText(/Hán Việt: Nhất/)).toBeVisible()
})

test('Custom Practice uses the canonical custom StudyEvent pipeline', async ({ page }) => {
  await page.goto('/learn')
  await page.getByRole('link', { name: 'Tạo Custom Practice' }).click()
  await expect(page).toHaveURL(/\/practice\/custom$/)
  await expect(page.getByRole('heading', { name: 'Tạo phiên Custom Practice' })).toBeVisible()

  await page.getByLabel(/Hiragana/).check()
  await page.getByLabel('Số câu').selectOption('5')
  await expect(page.getByText('1 topic · 46 cards khả dụng')).toBeVisible()
  await page.getByRole('button', { name: 'Bắt đầu Custom Practice' }).click()

  await expect(page).toHaveURL(/\/session\/custom\?/)
  await expect(page.locator('.question-glyph')).toHaveText('あ')

  for (const answer of ['a', 'i', 'u', 'e', 'o']) {
    await page.getByLabel('Câu trả lời').fill(answer)
    await page.getByRole('button', { name: 'Kiểm tra' }).click()
    await expect(page.getByRole('status')).toContainText('Đúng')
    await page.getByRole('button', { name: answer === 'o' ? 'Xem kết quả' : 'Câu tiếp theo' }).click()
  }

  await expect(page.getByRole('heading', { name: 'Hoàn thành phiên học' })).toBeVisible()
  await expect(page.getByText('5', { exact: true }).first()).toBeVisible()

  const events = await page.evaluate(async () => {
    const output: Array<{ mode: string; inputKind: string }> = []
    for (const info of await indexedDB.databases()) {
      if (!info.name?.startsWith('zapan-v2:')) continue
      const db = await new Promise<IDBDatabase>((resolve, reject) => {
        const request = indexedDB.open(info.name!)
        request.onsuccess = () => resolve(request.result)
        request.onerror = () => reject(request.error)
      })
      if (!db.objectStoreNames.contains('events')) { db.close(); continue }
      const rows = await new Promise<Array<{ mode: string; inputKind: string }>>((resolve, reject) => {
        const request = db.transaction('events', 'readonly').objectStore('events').getAll()
        request.onsuccess = () => resolve(request.result as Array<{ mode: string; inputKind: string }>)
        request.onerror = () => reject(request.error)
      })
      output.push(...rows)
      db.close()
    }
    return output
  })

  expect(events).toHaveLength(5)
  expect(events.every((event) => event.mode === 'custom' && event.inputKind === 'typing')).toBe(true)

  await page.goto('/progress')
  await expect(page.locator('.metric-card').filter({ hasText: 'Ngày streak hiện tại' })).toContainText('1')
  await expect(page.locator('.heat-cell.has-activity')).toHaveCount(1)
  await expect(page.locator('.heat-cell.has-activity')).toHaveAttribute('aria-label', /5 lượt/)
})
