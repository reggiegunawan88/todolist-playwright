import { test, expect } from '@playwright/test'

test.beforeEach(async ({ page }) => {
  await page.goto('/')
})

test.describe('Test negative cases', () => {
  test('Test submit if both input are empty', async ({ page }) => {
    const titleInput = page.getByLabel('task-title-input')
    const hoursInput = page.getByLabel('task-hours-input')
    const submitInputBtn = page.getByLabel('add-input-button')

    await expect(titleInput).toHaveValue('')
    await expect(hoursInput).toHaveValue('')

    await submitInputBtn.click()

    const errTitleInput = page.getByLabel('title-input-error-text')
    const errHoursInput = page.getByLabel('hours-input-error-text')
    const errSnackbar = page.getByLabel('snackbar-ui')

    await expect(errTitleInput).toBeVisible()
    await expect(errHoursInput).toBeVisible()
    await expect(errSnackbar).toBeVisible()

    await expect(errSnackbar).not.toBeVisible({ timeout: 3000 })
  })

  test('Test filled title input and empty hours input or vice-versa', async ({ page }) => {
    const titleInput = page.getByLabel('task-title-input')
    const hoursInput = page.getByLabel('task-hours-input')
    const submitInputBtn = page.getByLabel('add-input-button')

    titleInput.fill('Task Title 1')
    expect(hoursInput).toHaveValue('')

    await submitInputBtn.click()

    const errTitleInput = page.getByLabel('title-input-error-text')
    const errHoursInput = page.getByLabel('hours-input-error-text')
    const errSnackbar = page.getByLabel('snackbar-ui')

    await expect(errTitleInput).not.toBeVisible()
    await expect(errHoursInput).toBeVisible()
    await expect(errSnackbar).toBeVisible()

    await expect(errSnackbar).not.toBeVisible({ timeout: 3000 })
  })
})
