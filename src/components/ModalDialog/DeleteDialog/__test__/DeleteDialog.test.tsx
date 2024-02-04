import { render, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';

import { Provider } from 'react-redux';

import { store } from '@/store';
import { DeleteDialogStory } from '../DeleteDialog.story';

describe('DeleteDialog.tsx', () => {
  test('Test render delete modal dialog and its behavior', async () => {
    const { getByLabelText, queryByLabelText } = render(
      <Provider store={store}>
        <DeleteDialogStory />
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
