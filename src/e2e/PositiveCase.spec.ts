import { test, expect } from '@playwright/test'

test.beforeEach(async ({page}) => {
  await page.goto('/')
})


test.describe('Test Positive cases', () => {
  test('Test success submit', async ({ page }) => {
    // 1. Define both input and submit button
    const titleInput = page.getByLabel('task-title-input')
    const hoursInput = page.getByLabel('task-hours-input')
    const submitInputBtn = page.getByLabel('add-input-button')

    // 2. Define tbody content
    let tableTodoValue = await page.locator("//table/tbody/tr[1]/td[1]").innerText()
    
    // 3. For initial state, table content should contains "You don't have any to-do item."
    await expect(tableTodoValue).toBe("You don't have any to-do item.")

    // 4. Fill both inputs
    await titleInput.fill('Task Title 1')
    await hoursInput.fill('12')
    await expect(hoursInput).toHaveValue(/[0-9]/)

    // 5. Click submit button
    await submitInputBtn.click()

    // 6. Both error text should not appear
    const errTitleInput = page.getByLabel('title-input-error-text')
    const errHoursInput = page.getByLabel('hours-input-error-text')
    const successSnackbar = page.getByLabel('snackbar-ui')

    await expect(errTitleInput).not.toBeVisible()
    await expect(errHoursInput).not.toBeVisible()
    
    // 7. Show success snackbar
    await expect(successSnackbar).toBeVisible()

    // 8. Table tbody should contains the newest data entry
    tableTodoValue = await page.locator("//table/tbody/tr[1]/td[1]").innerText()
    await expect(tableTodoValue).toBe("Task Title 1")
  })

  test('Test delete todo', async ({ page }) => {
    // 1. Define both input and submit button
    const titleInput = page.getByLabel('task-title-input')
    const hoursInput = page.getByLabel('task-hours-input')
    const submitInputBtn = page.getByLabel('add-input-button')

    // 2. Fill both input
    await titleInput.fill('Task Title 1')
    await hoursInput.fill('12')

    // 3. Click submit button
    await submitInputBtn.click()

    // 4. Define delete button and click action
    const deleteButton = page.getByLabel('delete-todo-button')

    await deleteButton.click()

    // 5. Delete dialog modal should appear
    const deleteDialog = page.getByLabel('delete-modal-dialog')
    await expect(deleteDialog).toBeVisible()
    
    // 6. Define delete confirmation input, task title, and submit button
    const deleteConfirmationInput = await page.getByLabel('confirmation-input')
    const deleteDialogTaskTitle = await page.getByLabel('delete-dialog-task-title').innerText()
    const deleteSubmitButton = await page.getByLabel('delete-dialog-submit-button')
    
    // 7. On initial condition, delete submit button should be disabled
    await expect(deleteSubmitButton).toBeDisabled()
    
    // 8. Fill confirmation input
    deleteConfirmationInput.fill('Task Title 1')
    await expect(deleteConfirmationInput).toHaveValue(deleteDialogTaskTitle)

    // 9. After confirmation input is filled, delete button should not be disabled anymore
    await expect(deleteSubmitButton).not.toBeDisabled()

    // 10. Click delete submit button
    deleteSubmitButton.click()

    // 11. After deletion success, delete dialog modal should disappear
    await expect(deleteDialog).not.toBeVisible()

    // 12. Table tbody back to empty state
    const tableContent = await page.locator("//table/tbody/tr[1]/td[1]").innerText()
    await expect(tableContent).toBe("You don't have any to-do item.")
  })
})