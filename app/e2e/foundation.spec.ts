import { expect, test } from '@playwright/test'

test('desktop shell, navigation, owner branding, theme and keyboard focus work', async ({ page }, testInfo) => {
  test.skip(testInfo.project.name !== 'chromium-desktop', 'desktop-only smoke test')
  await page.goto('/')
  await expect(page.getByRole('heading', { name: 'Hôm nay học gì?' })).toBeVisible()
  await expect(page.locator('.sidebar')).toBeVisible()

  await page.keyboard.press('Tab')
  await expect(page.getByRole('link', { name: 'Bỏ qua điều hướng' })).toBeFocused()
  await page.keyboard.press('Enter')
  await expect(page.locator('#main-content')).toBeFocused()

  const sidebar = page.locator('.sidebar')
  const instagram = sidebar.getByRole('link', { name: 'Instagram của trunk.ng' })
  await expect(instagram).toHaveAttribute('href', 'https://www.instagram.com/trunk.ng/')
  await expect(instagram).toHaveAttribute('target', '_blank')

  let theme = sidebar.getByRole('button', { name: /Giao diện: Theo hệ thống/ })
  await theme.click()
  await expect(page.locator('html')).toHaveAttribute('data-theme', 'light')
  theme = sidebar.getByRole('button', { name: /Giao diện: Sáng/ })
  await theme.click()
  await expect(page.locator('html')).toHaveAttribute('data-theme', 'dark')
  expect(await page.evaluate(() => getComputedStyle(document.documentElement).getPropertyValue('--bg').trim())).toBe('#10141d')

  await page.reload()
  await expect(page.locator('html')).toHaveAttribute('data-theme', 'dark')
  await expect(sidebar.getByRole('button', { name: /Giao diện: Tối/ })).toBeVisible()

  await page.getByRole('navigation', { name: 'Điều hướng chính' }).getByRole('link', { name: 'Learn' }).click()
  await expect(page).toHaveURL(/\/learn$/)
  await expect(page.getByRole('heading', { name: 'Học theo lộ trình' })).toBeVisible()
  await expect(page.locator('#main-content')).toBeFocused()

  await page.getByRole('navigation', { name: 'Điều hướng chính' }).getByRole('link', { name: 'Review' }).click()
  await expect(page.getByRole('heading', { name: 'Ôn đúng thứ cần ôn' })).toBeVisible()
  await expect(page.locator('#main-content')).toBeFocused()
})

test('mobile shell uses touch-safe controls without horizontal overflow', async ({ page }, testInfo) => {
  test.skip(testInfo.project.name !== 'chromium-mobile', 'mobile-only smoke test')
  await page.goto('/')
  await expect(page.locator('.sidebar')).toBeHidden()
  await expect(page.getByRole('navigation', { name: 'Điều hướng chính trên di động' })).toBeVisible()

  const topbar = page.locator('.mobile-topbar')
  const instagram = topbar.getByRole('link', { name: 'Instagram của trunk.ng' })
  const account = topbar.getByRole('link', { name: 'Account' })
  const theme = topbar.getByRole('button', { name: /Giao diện: Theo hệ thống/ })
  await expect(instagram).toHaveAttribute('href', 'https://www.instagram.com/trunk.ng/')

  for (const control of [instagram, account, theme]) {
    const box = await control.boundingBox()
    expect(box).not.toBeNull()
    expect(box!.height).toBeGreaterThanOrEqual(44)
    expect(box!.width).toBeGreaterThanOrEqual(44)
  }

  await theme.tap()
  await expect(page.locator('html')).toHaveAttribute('data-theme', 'light')
  const overflow = await page.evaluate(() => document.documentElement.scrollWidth > document.documentElement.clientWidth)
  expect(overflow).toBe(false)

  const progressLink = page.getByRole('navigation', { name: 'Điều hướng chính trên di động' }).getByRole('link', { name: 'Progress' })
  await progressLink.tap()
  await expect(page.getByRole('heading', { name: 'Tiến độ từ dữ liệu thật' })).toBeVisible()
  await expect(page.locator('#main-content')).toBeFocused()
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

  await page.goto('/roadmap')
  const hiraganaStage = page.locator('.roadmap-stage').filter({ has: page.getByRole('heading', { name: 'Hiragana' }) })
  await expect(hiraganaStage).toContainText('0/46')
  await expect(hiraganaStage).toContainText('5 đã học')
  await expect(hiraganaStage).toContainText('Gợi ý tiếp theo')
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
  await expect(page.getByRole('heading', { name: 'Tiến độ từ dữ liệu thật' })).toBeVisible()
  await expect(page.locator('.metric-card').filter({ hasText: 'Ngày streak hiện tại' })).toContainText('1')
  await expect(page.locator('.heat-cell.has-activity')).toHaveCount(1)
  await expect(page.locator('.heat-cell.has-activity')).toHaveAttribute('aria-label', /5 lượt/)
})

test('Writing Recall records self-grade drawing events and survives stroke-order network failure', async ({ page }) => {
  await page.route('https://raw.githubusercontent.com/**', (route) => route.abort())
  await page.goto('/learn')
  await page.getByRole('link', { name: 'Luyện Writing' }).click()
  await expect(page).toHaveURL(/\/practice\/writing$/)
  await expect(page.getByRole('heading', { name: 'Trace · Copy · Recall' })).toBeVisible()
  await expect(page.getByLabel('Trace')).toBeVisible()
  await expect(page.getByLabel('Copy')).toBeVisible()
  await expect(page.getByLabel('Recall')).toBeVisible()

  await page.getByLabel('Recall').check()
  await page.getByRole('button', { name: 'Bắt đầu Writing · 5 cards' }).click()
  await expect(page).toHaveURL(/\/practice\/writing\?/)
  await expect(page.getByText('Viết từ trí nhớ')).toBeVisible()

  const canvas = page.getByLabel('Ô luyện viết')
  const box = await canvas.boundingBox()
  expect(box).not.toBeNull()
  if (!box) return
  await page.mouse.move(box.x + box.width * 0.3, box.y + box.height * 0.35)
  await page.mouse.down()
  await page.mouse.move(box.x + box.width * 0.7, box.y + box.height * 0.65, { steps: 6 })
  await page.mouse.up()

  await page.getByRole('button', { name: 'Hiện đáp án' }).click()
  await expect(page.locator('.writing-reference-char')).toHaveText('あ')
  await expect(page.getByText('Không tải được thứ tự nét')).toBeVisible()
  await page.getByRole('button', { name: 'Viết đạt' }).click()
  await expect(page.getByText(/2 \/ 5 · RECALL/)).toBeVisible()

  const events = await page.evaluate(async () => {
    const output: Array<Record<string, unknown>> = []
    for (const info of await indexedDB.databases()) {
      if (!info.name?.startsWith('zapan-v2:')) continue
      const db = await new Promise<IDBDatabase>((resolve, reject) => {
        const request = indexedDB.open(info.name!)
        request.onsuccess = () => resolve(request.result)
        request.onerror = () => reject(request.error)
      })
      if (!db.objectStoreNames.contains('events')) { db.close(); continue }
      const rows = await new Promise<Array<Record<string, unknown>>>((resolve, reject) => {
        const request = db.transaction('events', 'readonly').objectStore('events').getAll()
        request.onsuccess = () => resolve(request.result as Array<Record<string, unknown>>)
        request.onerror = () => reject(request.error)
      })
      output.push(...rows)
      db.close()
    }
    return output
  })

  expect(events).toHaveLength(1)
  expect(events[0]).toMatchObject({ mode: 'writing', inputKind: 'drawing', result: 'correct' })
  expect(events[0]).not.toHaveProperty('responseTimeMs')
})

test('Time Attack records measured canonical events and ends on the real countdown', async ({ page }) => {
  await page.clock.install()
  await page.goto('/learn')
  await page.getByRole('link', { name: 'Time Attack' }).click()
  await expect(page).toHaveURL(/\/practice\/time-attack$/)
  await expect(page.getByRole('heading', { name: 'Time Attack' })).toBeVisible()

  await page.getByLabel('30s').check()
  await page.getByRole('button', { name: 'Bắt đầu Time Attack' }).click()
  await expect(page).toHaveURL(/\/practice\/time-attack\?/)
  await expect(page.locator('.question-glyph')).toHaveText('あ')
  await expect(page.getByText('30s', { exact: true })).toBeVisible()
  await expect(page.getByLabel('Câu trả lời')).toBeFocused()

  await page.getByLabel('Câu trả lời').fill('a')
  await page.getByRole('button', { name: 'Trả lời' }).click()
  await expect(page.getByRole('status')).toContainText('Đúng')
  await expect(page.locator('.question-glyph')).toHaveText('い')

  await page.clock.runFor(31_000)
  await expect(page.getByRole('heading', { name: 'Time Attack kết thúc' })).toBeVisible()

  const events = await page.evaluate(async () => {
    const output: Array<Record<string, unknown>> = []
    for (const info of await indexedDB.databases()) {
      if (!info.name?.startsWith('zapan-v2:')) continue
      const db = await new Promise<IDBDatabase>((resolve, reject) => {
        const request = indexedDB.open(info.name!)
        request.onsuccess = () => resolve(request.result)
        request.onerror = () => reject(request.error)
      })
      if (!db.objectStoreNames.contains('events')) { db.close(); continue }
      const rows = await new Promise<Array<Record<string, unknown>>>((resolve, reject) => {
        const request = db.transaction('events', 'readonly').objectStore('events').getAll()
        request.onsuccess = () => resolve(request.result as Array<Record<string, unknown>>)
        request.onerror = () => reject(request.error)
      })
      output.push(...rows)
      db.close()
    }
    return output
  })

  expect(events).toHaveLength(1)
  expect(events[0]).toMatchObject({ mode: 'time-attack', inputKind: 'typing', result: 'correct' })
  expect(typeof events[0].responseTimeMs).toBe('number')
  expect(events[0].responseTimeMs).toBeGreaterThanOrEqual(0)
})

test('Survival consumes lives on mistakes and records canonical measured events', async ({ page }) => {
  await page.goto('/learn')
  await page.getByRole('link', { name: 'Survival' }).click()
  await expect(page).toHaveURL(/\/practice\/survival$/)
  await expect(page.getByRole('heading', { name: 'Survival' })).toBeVisible()

  await page.getByRole('button', { name: 'Bắt đầu Survival' }).click()
  await expect(page).toHaveURL(/\/practice\/survival\?/)
  await expect(page.getByText('♥♥♥', { exact: true })).toBeVisible()

  for (const expectedLives of ['♥♥♡', '♥♡♡']) {
    await page.getByLabel('Câu trả lời').fill('x')
    await page.getByRole('button', { name: 'Trả lời' }).click()
    await expect(page.getByRole('status')).toContainText('Sai')
    await expect(page.getByText(expectedLives, { exact: true })).toBeVisible()
  }

  await page.getByLabel('Câu trả lời').fill('x')
  await page.getByRole('button', { name: 'Trả lời' }).click()
  await expect(page.getByRole('heading', { name: 'Survival kết thúc' })).toBeVisible()
  await expect(page.getByText('3', { exact: true }).first()).toBeVisible()

  const events = await page.evaluate(async () => {
    const output: Array<Record<string, unknown>> = []
    for (const info of await indexedDB.databases()) {
      if (!info.name?.startsWith('zapan-v2:')) continue
      const db = await new Promise<IDBDatabase>((resolve, reject) => {
        const request = indexedDB.open(info.name!)
        request.onsuccess = () => resolve(request.result)
        request.onerror = () => reject(request.error)
      })
      if (!db.objectStoreNames.contains('events')) { db.close(); continue }
      const rows = await new Promise<Array<Record<string, unknown>>>((resolve, reject) => {
        const request = db.transaction('events', 'readonly').objectStore('events').getAll()
        request.onsuccess = () => resolve(request.result as Array<Record<string, unknown>>)
        request.onerror = () => reject(request.error)
      })
      output.push(...rows)
      db.close()
    }
    return output
  })

  expect(events).toHaveLength(3)
  expect(events.every((event) => event.mode === 'survival' && event.inputKind === 'typing' && event.result === 'incorrect')).toBe(true)
  expect(events.every((event) => typeof event.responseTimeMs === 'number' && Number(event.responseTimeMs) >= 0)).toBe(true)
})

test('Match records wrong and correct pair attempts in the canonical matching pipeline', async ({ page }) => {
  await page.goto('/learn')
  await page.getByRole('link', { name: 'Match' }).click()
  await expect(page).toHaveURL(/\/practice\/match$/)
  await expect(page.getByRole('heading', { name: 'Ghép prompt với đáp án' })).toBeVisible()
  await page.getByRole('button', { name: 'Bắt đầu Match' }).click()
  await expect(page).toHaveURL(/\/practice\/match\?/)

  await page.getByRole('button', { name: 'Prompt あ' }).click()
  await page.getByRole('button', { name: 'Đáp án u' }).click()
  await expect(page.getByRole('status')).toContainText('Chưa đúng')

  for (const [prompt, answer] of [['あ', 'a'], ['い', 'i'], ['う', 'u'], ['え', 'e'], ['お', 'o'], ['か', 'ka']]) {
    await page.getByRole('button', { name: 'Prompt ' + prompt }).click()
    await page.getByRole('button', { name: 'Đáp án ' + answer }).click()
    if (prompt !== 'か') await expect(page.getByRole('status')).toContainText('Ghép đúng')
  }

  await expect(page.getByRole('heading', { name: 'Hoàn thành Match' })).toBeVisible()
  const events = await page.evaluate(async () => {
    const output: Array<Record<string, unknown>> = []
    for (const info of await indexedDB.databases()) {
      if (!info.name?.startsWith('zapan-v2:')) continue
      const db = await new Promise<IDBDatabase>((resolve, reject) => {
        const request = indexedDB.open(info.name!)
        request.onsuccess = () => resolve(request.result)
        request.onerror = () => reject(request.error)
      })
      if (!db.objectStoreNames.contains('events')) { db.close(); continue }
      const rows = await new Promise<Array<Record<string, unknown>>>((resolve, reject) => {
        const request = db.transaction('events', 'readonly').objectStore('events').getAll()
        request.onsuccess = () => resolve(request.result as Array<Record<string, unknown>>)
        request.onerror = () => reject(request.error)
      })
      output.push(...rows)
      db.close()
    }
    return output
  })

  expect(events).toHaveLength(7)
  expect(events.filter((event) => event.result === 'incorrect')).toHaveLength(1)
  expect(events.filter((event) => event.result === 'correct')).toHaveLength(6)
  expect(events.every((event) => event.mode === 'match' && event.inputKind === 'matching')).toBe(true)
  expect(events.every((event) => typeof event.responseTimeMs === 'number' && Number(event.responseTimeMs) >= 0)).toBe(true)
})

test('Confusables uses the verified legacy Kana groups with measured canonical events', async ({ page }) => {
  await page.goto('/learn')
  await page.getByRole('link', { name: 'Confusables' }).click()
  await expect(page).toHaveURL(/\/practice\/confusables$/)
  await expect(page.getByRole('heading', { name: 'Phân biệt Kana dễ nhầm' })).toBeVisible()
  await page.getByRole('button', { name: 'Bắt đầu Confusables · 10 câu' }).click()
  await expect(page).toHaveURL(/\/practice\/confusables\?/)
  await expect(page.getByText('shi', { exact: true })).toBeVisible()

  await page.getByRole('button', { name: 'Chọn ツ' }).click()
  await expect(page.getByRole('status')).toContainText('Đáp án: シ (shi)')
  await page.getByRole('button', { name: 'Câu tiếp theo' }).click()

  const remainingTargets = [
    ['tsu', 'ツ'],
    ['so', 'ソ'],
    ['n', 'ン'],
    ['a', 'ア'],
    ['ya', 'ヤ'],
    ['u', 'ウ'],
    ['wa', 'ワ'],
    ['ku', 'ク'],
    ['ta', 'タ'],
  ] as const

  for (const [romaji, character] of remainingTargets) {
    await expect(page.getByText(romaji, { exact: true })).toBeVisible()
    await page.getByRole('button', { name: 'Chọn ' + character }).click()
    await expect(page.getByRole('status')).toContainText('Đúng')
    await page.getByRole('button', { name: romaji === 'ta' ? 'Xem kết quả' : 'Câu tiếp theo' }).click()
  }

  await expect(page.getByRole('heading', { name: 'Hoàn thành Confusables' })).toBeVisible()
  await expect(page.getByText('90%')).toBeVisible()

  const events = await page.evaluate(async () => {
    const output: Array<Record<string, unknown>> = []
    for (const info of await indexedDB.databases()) {
      if (!info.name?.startsWith('zapan-v2:')) continue
      const db = await new Promise<IDBDatabase>((resolve, reject) => {
        const request = indexedDB.open(info.name!)
        request.onsuccess = () => resolve(request.result)
        request.onerror = () => reject(request.error)
      })
      if (!db.objectStoreNames.contains('events')) { db.close(); continue }
      const rows = await new Promise<Array<Record<string, unknown>>>((resolve, reject) => {
        const request = db.transaction('events', 'readonly').objectStore('events').getAll()
        request.onsuccess = () => resolve(request.result as Array<Record<string, unknown>>)
        request.onerror = () => reject(request.error)
      })
      output.push(...rows)
      db.close()
    }
    return output
  })

  expect(events).toHaveLength(10)
  expect(events.filter((event) => event.result === 'incorrect')).toHaveLength(1)
  expect(events.filter((event) => event.result === 'correct')).toHaveLength(9)
  expect(events.every((event) => event.mode === 'confusable' && event.inputKind === 'multiple-choice')).toBe(true)
  expect(events.every((event) => typeof event.responseTimeMs === 'number' && Number(event.responseTimeMs) >= 0)).toBe(true)
})

test('Roadmap exposes only verified learner stages on desktop and mobile', async ({ page }) => {
  await page.goto('/learn')
  await page.getByRole('link', { name: 'Mở Roadmap' }).click()
  await expect(page).toHaveURL(/\/roadmap$/)
  await expect(page.getByRole('heading', { name: 'Lộ trình dựa trên mastery thật' })).toBeVisible()
  await expect(page.locator('.roadmap-stage')).toHaveCount(4)
  await expect(page.getByRole('heading', { name: '0/4 stage complete' })).toBeVisible()
  await expect(page.getByText('1124 cards hiện có trong learner path.')).toBeVisible()

  const hiraganaStage = page.locator('.roadmap-stage').filter({ has: page.getByRole('heading', { name: 'Hiragana' }) })
  await expect(hiraganaStage).toContainText('Gợi ý tiếp theo')
  await expect(hiraganaStage).toContainText('0/46')
  await expect(page.locator('.roadmap-deferred')).toContainText('Grammar · Reading/Listening · N5 consolidation/exam · N4/N3')
  await expect(page.locator('.roadmap-deferred').getByRole('link')).toHaveCount(0)
})

test('Roadmap exposes only verified stages and derives status from canonical progress', async ({ page }) => {
  await page.goto('/roadmap')
  await expect(page.getByRole('heading', { name: 'Lộ trình dựa trên mastery thật' })).toBeVisible()
  await expect(page.getByText('0/4 stage complete')).toBeVisible()
  await expect(page.getByText('1124 cards hiện có trong learner path.')).toBeVisible()
  await expect(page.locator('.roadmap-stage')).toHaveCount(4)

  const hiraganaStage = page.locator('.roadmap-stage').filter({ hasText: 'Hiragana' })
  await expect(hiraganaStage).toContainText('Gợi ý tiếp theo')
  await expect(hiraganaStage).toContainText('Chưa bắt đầu')
  await expect(hiraganaStage).toContainText('0/46')
  await expect(hiraganaStage).toContainText('0 đã học')
  await expect(page.getByRole('heading', { name: 'Grammar · Reading/Listening · N5 consolidation/exam · N4/N3' })).toBeVisible()

  await hiraganaStage.getByRole('link', { name: 'Bắt đầu stage' }).click()
  await expect(page).toHaveURL(/\/session\/learn\/kana-hiragana-main$/)

  for (const answer of ['a', 'i', 'u', 'e', 'o']) {
    await page.getByLabel('Câu trả lời').fill(answer)
    await page.getByRole('button', { name: 'Kiểm tra' }).click()
    await expect(page.getByRole('status')).toContainText('Đúng')
    await page.getByRole('button', { name: answer === 'o' ? 'Xem kết quả' : 'Câu tiếp theo' }).click()
  }

  await expect(page.getByRole('heading', { name: 'Hoàn thành phiên học' })).toBeVisible()
  await page.goto('/roadmap')

  const updatedHiragana = page.locator('.roadmap-stage').filter({ hasText: 'Hiragana' })
  await expect(updatedHiragana).toContainText('Đang học')
  await expect(updatedHiragana).toContainText('Gợi ý tiếp theo')
  await expect(updatedHiragana).toContainText('5 đã học')
  await expect(updatedHiragana).toContainText('0/46')
  await expect(page.getByText('0/4 stage complete')).toBeVisible()
})

test('keyboard focus path exposes skip navigation and activates secondary routes', async ({ page }) => {
  await page.goto('/learn')
  const skipLink = page.getByRole('link', { name: 'Bỏ qua điều hướng' })
  await skipLink.focus()
  await expect(skipLink).toBeFocused()
  await expect(skipLink).toBeVisible()
  const skipOutline = await skipLink.evaluate((element) => getComputedStyle(element).outlineStyle)
  expect(skipOutline).not.toBe('none')

  await page.keyboard.press('Enter')
  await expect(page.locator('#main-content')).toBeFocused()

  const roadmapLink = page.getByRole('link', { name: 'Mở Roadmap' })
  await roadmapLink.focus()
  await expect(roadmapLink).toBeFocused()
  const outline = await roadmapLink.evaluate((element) => getComputedStyle(element).outlineStyle)
  expect(outline).not.toBe('none')
  await page.keyboard.press('Enter')
  await expect(page).toHaveURL(/\/roadmap$/)
  await expect(page.getByRole('heading', { name: 'Lộ trình dựa trên mastery thật' })).toBeVisible()
  await expect(page.locator('#main-content')).toBeFocused()
})

test('Phase 3 secondary routes stay within mobile viewport and expose 44px touch targets', async ({ page }, testInfo) => {
  test.skip(testInfo.project.name !== 'chromium-mobile', 'mobile touch/layout audit')

  const routes = [
    '/library',
    '/progress',
    '/roadmap',
    '/practice/custom',
    '/practice/writing',
    '/practice/time-attack',
    '/practice/survival',
    '/practice/match',
    '/practice/confusables',
  ]

  for (const route of routes) {
    await page.goto(route)
    await expect(page.locator('#main-content')).toBeVisible()
    await expect.poll(() => page.evaluate(() => document.documentElement.scrollWidth - window.innerWidth)).toBeLessThanOrEqual(1)

    const tooSmall = await page.evaluate(() => {
      const selectors = [
        'button:not([disabled])',
        'a[href]:not(.skip-link)',
        'select',
        'input:not([type="hidden"]):not([type="checkbox"]):not([type="radio"])',
        'label:has(input[type="checkbox"])',
        'label:has(input[type="radio"])',
      ]
      const elements = Array.from(document.querySelectorAll<HTMLElement>(selectors.join(',')))
      return elements.flatMap((element) => {
        const rect = element.getBoundingClientRect()
        const style = getComputedStyle(element)
        const visible = rect.width > 0 && rect.height > 0 &&
          rect.bottom > 0 && rect.right > 0 && rect.top < window.innerHeight && rect.left < window.innerWidth &&
          style.visibility !== 'hidden' && style.display !== 'none'
        if (!visible || rect.height >= 44) return []
        return [{
          tag: element.tagName,
          text: (element.textContent ?? element.getAttribute('aria-label') ?? '').trim().slice(0, 80),
          height: Math.round(rect.height * 10) / 10,
        }]
      })
    })

    expect(tooSmall, route + ' has undersized touch targets').toEqual([])
  }
})

test('Phase 3 visual baselines remain stable', async ({ page }) => {
  const routes = [
    ['/learn', 'learn-overview.png', 'Học theo lộ trình'],
    ['/roadmap', 'roadmap.png', 'Lộ trình dựa trên mastery thật'],
    ['/practice/match', 'match-setup.png', 'Ghép prompt với đáp án'],
    ['/practice/writing', 'writing-setup.png', 'Trace · Copy · Recall'],
  ] as const

  for (const [route, snapshot, heading] of routes) {
    await page.goto(route)
    await expect(page.getByRole('heading', { name: heading })).toBeVisible()
    await expect(page).toHaveScreenshot(snapshot, { fullPage: true, animations: 'disabled', maxDiffPixels: 30 })
  }
})

test('theme preference cycles system light dark and persists across reload', async ({ page }) => {
  await page.goto('/')
  const toggle = page.locator('.theme-toggle:visible')
  await expect(toggle).toHaveCount(1)
  await expect(toggle).toHaveAttribute('aria-label', /Giao diện: Theo hệ thống/)

  await toggle.click()
  await expect(page.locator('html')).toHaveAttribute('data-theme', 'light')
  expect(await page.evaluate(() => localStorage.getItem('zapan-v2:theme'))).toBe('light')

  await toggle.click()
  await expect(page.locator('html')).toHaveAttribute('data-theme', 'dark')
  expect(await page.evaluate(() => localStorage.getItem('zapan-v2:theme'))).toBe('dark')

  await page.reload()
  const reloadedToggle = page.locator('.theme-toggle:visible')
  await expect(reloadedToggle).toHaveAttribute('aria-label', /Giao diện: Tối/)
  await expect(page.locator('html')).toHaveAttribute('data-theme', 'dark')

  await reloadedToggle.click()
  await expect(page.locator('html')).not.toHaveAttribute('data-theme')
  expect(await page.evaluate(() => localStorage.getItem('zapan-v2:theme'))).toBe('system')
})

test('loaded study session remains local-first while the browser is offline', async ({ page, context }, testInfo) => {
  test.skip(testInfo.project.name !== 'chromium-desktop', 'desktop offline local-first stress')

  await page.goto('/')
  await page.getByRole('link', { name: 'Bắt đầu phiên hôm nay' }).click()
  await expect(page).toHaveURL(/\/session\/today$/)
  await expect(page.locator('.question-glyph')).toHaveText('あ')

  await context.setOffline(true)

  for (const answer of ['a', 'i', 'u', 'e', 'o']) {
    await page.getByLabel('Câu trả lời').fill(answer)
    await page.getByRole('button', { name: 'Kiểm tra' }).click()
    await expect(page.getByRole('status')).toContainText('Đúng')
    await page.getByRole('button', { name: answer === 'o' ? 'Xem kết quả' : 'Câu tiếp theo' }).click()
  }

  await expect(page.getByRole('heading', { name: 'Hoàn thành phiên học' })).toBeVisible()

  const offlineEventCount = await page.evaluate(async () => {
    let total = 0
    for (const info of await indexedDB.databases()) {
      if (!info.name?.startsWith('zapan-v2:')) continue
      const db = await new Promise<IDBDatabase>((resolve, reject) => {
        const request = indexedDB.open(info.name!)
        request.onsuccess = () => resolve(request.result)
        request.onerror = () => reject(request.error)
      })
      if (!db.objectStoreNames.contains('events')) { db.close(); continue }
      total += await new Promise<number>((resolve, reject) => {
        const request = db.transaction('events', 'readonly').objectStore('events').count()
        request.onsuccess = () => resolve(request.result)
        request.onerror = () => reject(request.error)
      })
      db.close()
    }
    return total
  })

  expect(offlineEventCount).toBe(5)

  await context.setOffline(false)
  await page.getByRole('link', { name: 'Về Today' }).click()
  await page.getByRole('navigation', { name: 'Điều hướng chính' }).getByRole('link', { name: 'Progress' }).click()
  await expect(page.getByText('5/1124')).toBeVisible()
})
