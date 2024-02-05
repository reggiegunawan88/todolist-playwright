import { render, fireEvent, waitFor } from '@testing-library/react'
import '@testing-library/jest-dom'
import { BasicTodoList, TodoListWithInput } from '../TodoList.stories'
import { Provider } from 'react-redux'
import { store } from '@/store'

describe('TodoList.tsx test scenario', () => {
  test('render TodoList table with default value', () => {
    const { container } = render(
      <Provider store={store}>
        <BasicTodoList />
      </Provider>
    )

    // At initial state, expect table length to be less than 2
    const todoListTable = container.querySelectorAll('tbody > tr')
    expect(todoListTable.length).toBeLessThan(2)
  })

  test('Test add and delete todo item to table', async () => {
    const copyStore = store
    const { container, getByLabelText, queryByLabelText } = render(
      <Provider store={copyStore}>
        <TodoListWithInput />
      </Provider>
    )

    // 1. At initial state, expect table length to be less than 2
    // The reason is because on initial state, we only have <tr> with "You don't have any to-do item." value
    const todoListTable = container.querySelectorAll('tbody > tr')
    expect(todoListTable.length).toBeLessThan(2)

    /* Add todo item */
    // 2. Define inputs and add button
    const titleInput = getByLabelText('task-title-input')
    const hoursInput = getByLabelText('task-hours-input')
    const addButton = getByLabelText('add-todo-button')

    // 3. Fill inputs
    fireEvent.change(titleInput, { target: { value: 'Mock Task-1' } })
    fireEvent.change(hoursInput, { target: { value: '2' } })
    fireEvent.click(addButton)

    await waitFor(() => {
      // 4. Expect table length is > 1
      expect(todoListTable.length).toBeGreaterThan(0)
    })

    /* Delete todo item */
    // 5. Define delete button on table
    const deleteButton = getByLabelText('delete-todo-button')
    fireEvent.click(deleteButton)

    // 6. Show delete modal dialog
    await waitFor(() => {
      const dialogTitleText = queryByLabelText('delete-modal-title') as HTMLElement
      expect(dialogTitleText).toBeInTheDocument()
    })

    // 7. Define submit delete button
    const submitDeleteButton = getByLabelText('delete-dialog-submit-button')
    expect(submitDeleteButton).toBeDisabled()

    // 8. Define confirmation input on modal
    const confirmationInput = getByLabelText('confirmation-input')

    // 9. Fill confirmation input equal to task title
    fireEvent.change(confirmationInput, { target: { value: 'Mock Task-1' } })
    expect(submitDeleteButton).not.toBeDisabled()

    // 9. Click on submit delete button
    fireEvent.click(submitDeleteButton)

    await waitFor(() => {
      // 10. Expect table tr value is equal to default state
      expect(todoListTable.length).toEqual(1)
    })
  })
})
