import { render, fireEvent, waitFor, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

import { Provider } from 'react-redux';

import { store } from '@/store';
import { useAppDispatch, useAppSelector } from '@/hooks/useRTK';
import { TodoItem } from '@/types/ui-type';
import { addTodoItem } from '@/store/slices/TodoList';
import ToDoList from '@/pages/Home/components/ToDoList';
import { useEffect } from 'react';

// Mocking TodoList component, DeleteDialog component is already within TodoList as child component
const TodoListMock = () => {
  const {} = useAppSelector(state => state.todoList);
  const dispatch = useAppDispatch();

  useEffect(() => {
    // Add mock data to redux store
    const todoListMockData: TodoItem = {
      id: 1,
      todo: {
        title: 'Mock Task-1',
        hours: 20,
      },
    };

    dispatch(addTodoItem(todoListMockData));
  }, []);

  return <ToDoList />;
};

describe('DeleteDialog.tsx', () => {
  test('test render delete modal dialog and its behavior', async () => {
    const { getByLabelText, queryByLabelText } = render(
      <Provider store={store}>
        <TodoListMock />
      </Provider>,
    );

    // 1. Define delete button on table
    const deleteButton = getByLabelText('delete-todo-button');
    expect(deleteButton).toBeInTheDocument();

    // 2. Click delete button
    fireEvent.click(deleteButton);

    // 3. Show delete modal dialog
    await waitFor(() => {
      const dialogTitleText = queryByLabelText('delete-modal-title') as HTMLElement;
      expect(dialogTitleText).toBeInTheDocument();
    });

    // 4. Cancel button flow
    const cancelButton = getByLabelText('delete-dialog-cancel-button');
    fireEvent.click(cancelButton);

    await waitFor(() => {
      // 5. Expect dialog to be closed
      const dialogTitleText = queryByLabelText('delete-modal-title') as HTMLElement;
      expect(dialogTitleText).not.toBeInTheDocument();
    });

    // 5. Re-click delete button to show delete modal dialog
    fireEvent.click(deleteButton);

    // 6. Check on submit button is disabled if confirmation input is empty
    const confirmationInput = getByLabelText('confirmation-input');
    expect(confirmationInput).toHaveValue('');

    const submitDeleteButton = getByLabelText('delete-dialog-submit-button');
    expect(submitDeleteButton).toBeDisabled();

    // 7. Fill confirmation input not equal to task title
    fireEvent.change(confirmationInput, { target: { value: 'Task-1' } });
    expect(submitDeleteButton).toBeDisabled();

    // 8. Fill confirmation input equal to task title
    fireEvent.change(confirmationInput, { target: { value: 'Mock Task-1' } });
    expect(submitDeleteButton).not.toBeDisabled();

    // 9. Click on submit delete button
    fireEvent.click(submitDeleteButton);

    await waitFor(() => {
      // 10. Expect to close dialog after delete submission
      const dialogTitleText = queryByLabelText('delete-modal-title') as HTMLElement;
      expect(dialogTitleText).not.toBeInTheDocument();
    });
  });
});
