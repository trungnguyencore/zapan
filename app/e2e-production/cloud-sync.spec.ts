import { expect, test } from '@playwright/test'

const email = process.env.ZAPAN_SMOKE_EMAIL
const password = process.env.ZAPAN_SMOKE_PASSWORD

if (!email || !password) throw new Error('ZAPAN_SMOKE_EMAIL and ZAPAN_SMOKE_PASSWORD are required')

async function registerAccount(page: import('@playwright/test').Page) {
  await page.goto('account')
  await expect(page.getByRole('heading', { name: 'Guest hoặc tài khoản' })).toBeVisible()
  await page.getByRole('button', { name: 'Tạo tài khoản mới' }).click()
  await page.getByLabel('Email').fill(email!)
  await page.getByLabel('Mật khẩu').fill(password!)
  await page.getByRole('button', { name: 'Đăng ký' }).click()
  await expect(page.getByRole('heading', { name: 'Tài khoản ZaPan' })).toBeVisible({ timeout: 15_000 })
  await expect(page.getByRole('button', { name: 'Sync ngay' })).toBeEnabled({ timeout: 15_000 })
}

async function signInAccount(page: import('@playwright/test').Page) {
  await page.goto('account')
  await expect(page.getByRole('heading', { name: 'Guest hoặc tài khoản' })).toBeVisible()
  await page.getByLabel('Email').fill(email!)
  await page.getByLabel('Mật khẩu').fill(password!)
  await page.getByRole('button', { name: 'Đăng nhập' }).click()
  await expect(page.getByRole('heading', { name: 'Tài khoản ZaPan' })).toBeVisible({ timeout: 15_000 })
  await expect(page.getByRole('button', { name: 'Sync ngay' })).toBeEnabled({ timeout: 15_000 })
}

test('production account sync converges across two isolated browser contexts', async ({ browser }) => {
  const contextA = await browser.newContext()
  const pageA = await contextA.newPage()
  await registerAccount(pageA)
  await pageA.waitForTimeout(1500)
  console.log('production-account-stable', await pageA.getByRole('heading', { name: 'Tài khoản ZaPan' }).isVisible())
  await expect(pageA.getByRole('heading', { name: 'Tài khoản ZaPan' })).toBeVisible()

  await pageA.goto('learn')
  await pageA.getByRole('link', { name: 'Học Hiragana' }).click()
  await expect(pageA).toHaveURL(/\/session\/learn\/kana-hiragana-main$/)

  for (const answer of ['a', 'i', 'u', 'e', 'o']) {
    await pageA.getByLabel('Câu trả lời').fill(answer)
    await pageA.getByRole('button', { name: 'Kiểm tra' }).click()
    await expect(pageA.getByRole('status')).toContainText('Đúng')
    if (answer !== 'o') await pageA.getByRole('button', { name: 'Câu tiếp theo' }).click()
  }

  const localEventCounts = await pageA.evaluate(async () => {
    const databases = await indexedDB.databases()
    const results: Array<{ name: string; events: number }> = []
    for (const info of databases) {
      if (!info.name?.startsWith('zapan-v2:')) continue
      const db = await new Promise<IDBDatabase>((resolve, reject) => {
        const request = indexedDB.open(info.name!)
        request.onsuccess = () => resolve(request.result)
        request.onerror = () => reject(request.error)
      })
      if (!db.objectStoreNames.contains('events')) { db.close(); continue }
      const events = await new Promise<number>((resolve, reject) => {
        const request = db.transaction('events', 'readonly').objectStore('events').count()
        request.onsuccess = () => resolve(request.result)
        request.onerror = () => reject(request.error)
      })
      results.push({ name: info.name, events })
      db.close()
    }
    return results
  })
  console.log('production-local-event-counts', JSON.stringify(localEventCounts))
  expect(Math.max(...localEventCounts.map((item) => item.events), 0)).toBe(5)

  await pageA.getByRole('button', { name: 'Xem kết quả' }).click()
  await expect(pageA.getByRole('heading', { name: 'Hoàn thành phiên học' })).toBeVisible()
  await expect(pageA.getByRole('status')).toContainText('Đã đồng bộ với cloud', { timeout: 20_000 })

  const contextB = await browser.newContext()
  const pageB = await contextB.newPage()
  await signInAccount(pageB)
  await pageB.getByRole('button', { name: 'Sync ngay' }).click()
  await expect(pageB.getByRole('status')).toContainText('Đã sync 5 event cloud', { timeout: 20_000 })

  await pageB.goto('progress')
  await expect(pageB.getByText('5/1124')).toBeVisible({ timeout: 10_000 })
  await expect(pageB.getByText('100%')).toBeVisible()

  await contextB.close()
  await contextA.close()
})
