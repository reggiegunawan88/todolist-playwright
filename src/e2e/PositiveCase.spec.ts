import { test, expect } from '@playwright/test'

test.beforeEach(async ({page}) => {
  await page.goto('/')
})


test.describe('Test Positive cases', () => {
  test('Test success submit', async ({ page }) => {
    const titleInput = page.getByLabel('task-title-input')
    const hoursInput = page.getByLabel('task-hours-input')
    const submitInputBtn = page.getByLabel('add-input-button')

    let tableTodoValue = await page.locator("//table/tbody/tr[1]/td[1]").innerText()
    await expect(tableTodoValue).toBe("You don't have any to-do item.")

    await titleInput.fill('Task Title 1')
    await hoursInput.fill('12')
    await expect(hoursInput).toHaveValue(/[0-9]/)

    await submitInputBtn.click()

    const errTitleInput = page.getByLabel('title-input-error-text')
    const errHoursInput = page.getByLabel('hours-input-error-text')
    const successSnackbar = page.getByLabel('snackbar-ui')

    await expect(errTitleInput).not.toBeVisible()
    await expect(errHoursInput).not.toBeVisible()
    await expect(successSnackbar).toBeVisible()

    tableTodoValue = await page.locator("//table/tbody/tr[1]/td[1]").innerText()
    await expect(tableTodoValue).toBe("Task Title 1")
  })

  test('Test delete todo', async ({ page }) => {
    const titleInput = page.getByLabel('task-title-input')
    const hoursInput = page.getByLabel('task-hours-input')
    const submitInputBtn = page.getByLabel('add-input-button')

    await titleInput.fill('Task Title 1')
    await hoursInput.fill('12')

    await submitInputBtn.click()

    const deleteButton = page.getByLabel('delete-todo-button')

    await deleteButton.click()

    const deleteDialog = page.getByLabel('delete-modal-dialog')
    await expect(deleteDialog).toBeVisible()
    
    const deleteConfirmationInput = await page.getByLabel('confirmation-input')
    const deleteDialogTaskTitle = await page.getByLabel('delete-dialog-task-title').innerText()
    const deleteSubmitButton = await page.getByLabel('delete-dialog-submit-button')
    
    await expect(deleteSubmitButton).toBeDisabled()
    
    deleteConfirmationInput.fill('Task Title 1')

    await expect(deleteConfirmationInput).toHaveValue(deleteDialogTaskTitle)

    await expect(deleteSubmitButton).not.toBeDisabled()

    deleteSubmitButton.click()

    await expect(deleteDialog).not.toBeVisible()
  })
})