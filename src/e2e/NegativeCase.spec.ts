import { test, expect } from '@playwright/test'

test.beforeEach(async ({ page }) => {
  await page.goto('/')
})

test.describe('Test negative cases', () => {
  test('Test submit if both input are empty', async ({ page }) => {
    // 1. Define input fields and submit button
    const titleInput = page.getByLabel('task-title-input')
    const hoursInput = page.getByLabel('task-hours-input')
    const submitInputBtn = page.getByLabel('add-input-button')

    // 2. Both input fields should have empty value
    await expect(titleInput).toHaveValue('')
    await expect(hoursInput).toHaveValue('')

    // 3. Click submit button
    await submitInputBtn.click()

    // 4. Define error text for both inputs
    const errTitleInput = page.getByLabel('title-input-error-text')
    const errHoursInput = page.getByLabel('hours-input-error-text')

    // 5. Define error snackbar
    const errSnackbar = page.getByLabel('snackbar-ui')

    // 6. Error text and snackbar should appear
    await expect(errTitleInput).toBeVisible()
    await expect(errHoursInput).toBeVisible()
    await expect(errSnackbar).toBeVisible()
    await expect(errSnackbar).toHaveText('Please fill the input value')

    // 7. Snackbar should disappear after 3s
    await expect(errSnackbar).not.toBeVisible({ timeout: 3000 })
  })

  test('Test filled title input and empty hours input or vice-versa', async ({ page }) => {
    // 1. Define input fields and submit button
    const titleInput = page.getByLabel('task-title-input')
    const hoursInput = page.getByLabel('task-hours-input')
    const submitInputBtn = page.getByLabel('add-input-button')

    // 2. Fill title input only
    titleInput.fill('Task Title 1')
    expect(hoursInput).toHaveValue('')

    // 3. Click submit button
    await submitInputBtn.click()

    // 4. Define error text for both input and error snackbar
    const errTitleInput = page.getByLabel('title-input-error-text')
    const errHoursInput = page.getByLabel('hours-input-error-text')
    const errSnackbar = page.getByLabel('snackbar-ui')

    // 5. Since we already fill title input, error text should appear on hours input
    await expect(errTitleInput).not.toBeVisible()
    await expect(errHoursInput).toBeVisible()
    await expect(errSnackbar).toBeVisible()
    await expect(errSnackbar).toHaveText('Please fill the input value')

    // 6. Snackbar should disappear after 3s
    await expect(errSnackbar).not.toBeVisible({ timeout: 3000 })
  })
})
