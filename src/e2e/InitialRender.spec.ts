import { test, expect } from '@playwright/test'

test.beforeEach(async({page}) => {
  await page.goto('/')
})

test('Test page render', async ({ page }) => {
  await expect(page).toHaveTitle('Task Management App')
  const authorName = page.getByLabel('author-name')
  await expect(authorName).toHaveText('By Reggie Gunawan')
})
