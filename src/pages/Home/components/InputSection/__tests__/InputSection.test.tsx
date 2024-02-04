import InputSection from '../index';
import Snackbar from '@/components/Snackbar';

import { render, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';

import { Provider } from 'react-redux';

import { store } from '@/store';

describe('InputSection.tsx', () => {
  test('test render both error input text', async () => {
    const { getByLabelText, queryByLabelText } = render(
      <Provider store={store}>
          <InputSection />
      </Provider>,
    );

    // 1. Define add button
    const addButton = getByLabelText('add-input-button');

    // 2. Click add button
    fireEvent.click(addButton);

    // 3. Show both error texts if both inputs are empty
    await waitFor(() => {
      const titleInputErrorText = queryByLabelText('title-input-error-text') as HTMLElement;
      const hoursInputErrorText = queryByLabelText('hours-input-error-text') as HTMLElement;
      expect(titleInputErrorText).toBeInTheDocument();
      expect(hoursInputErrorText).toBeInTheDocument();
    });
  });

  test('test input for task title only', async () => {
    const { getByLabelText, queryByLabelText, queryByText } = render(
      <Provider store={store}>
        <InputSection />
        <Snackbar />
      </Provider>,
    );

    // 1. Define add button
    const addButton = getByLabelText('add-input-button');

    // 2. Define task title input
    const taskTitleInput = getByLabelText('task-title-input') as HTMLElement;

    // 3. Fill input with value and validate
    fireEvent.change(taskTitleInput, { target: { value: 'Task-1' } });
    expect(taskTitleInput).toHaveValue('Task-1');

    // 4. Click add button
    fireEvent.click(addButton);

    await waitFor(() => {
      // 5. Expect hours input error text to be displayed
      const hoursInputErrorText = queryByLabelText('hours-input-error-text') as HTMLElement;
      expect(hoursInputErrorText).toBeInTheDocument();

      // 6. Expect error snackbar to be displayed
      const snackbarErrorText = queryByText('Please fill the input value') as HTMLElement;
      expect(snackbarErrorText).toBeInTheDocument()
    });
  });

  test('test input for task hours only', async () => {
    const { getByLabelText, queryByLabelText, queryByText } = render(
      <Provider store={store}>
        <InputSection />
        <Snackbar />
      </Provider>,
    );

    // 1. Define add button
    const addButton = getByLabelText('add-input-button');

    // 2. Define task hours input
    const taskHoursInput = getByLabelText('task-hours-input') as HTMLElement;

    // 3. Fill input with value and validate
    fireEvent.change(taskHoursInput, { target: { value: '20' } });
    expect(taskHoursInput).toHaveValue('20');

    // 4. Click add button
    fireEvent.click(addButton);

    await waitFor(() => {
      // 5. Expect title input error text to be displayed
      const titleInputErrorText = queryByLabelText('title-input-error-text') as HTMLElement;
      expect(titleInputErrorText).toBeInTheDocument();

      // 6. Expect error snackbar to be displayed
      const snackbarErrorText = queryByText('Please fill the input value') as HTMLElement;
      expect(snackbarErrorText).toBeInTheDocument()
    });
  });

  test('test successful flow', async () => {
    const { getByLabelText, queryByLabelText, queryByText } = render(
      <Provider store={store}>
        <InputSection />
        <Snackbar/>
      </Provider>,
    );

    // 1. Define add button
    const addButton = getByLabelText('add-input-button');

    // 2. Define both task title and task hours input
    const taskTitleInput = getByLabelText('task-title-input') as HTMLElement;
    const taskHoursInput = getByLabelText('task-hours-input') as HTMLElement;

    // 3. Fill both input with value
    fireEvent.change(taskTitleInput, { target: { value: 'Task-1' } });
    fireEvent.change(taskHoursInput, { target: { value: '20' } });

    // 4. Click add button
    fireEvent.click(addButton);

    // 5. After firing click button, both inputs value should return to empty
    expect(taskTitleInput).toHaveValue('');
    expect(taskHoursInput).toHaveValue('');

    await waitFor(() => {
      // 6. Expect both error text to be not displayed
      const titleInputErrorText = queryByLabelText('title-input-error-text') as HTMLElement;
      const hoursInputErrorText = queryByLabelText('hours-input-error-text') as HTMLElement;
      expect(titleInputErrorText).not.toBeInTheDocument();
      expect(hoursInputErrorText).not.toBeInTheDocument();
      
      // 7. Expect success snackbar to be displayed
      const snackbarSuccessText = queryByText('Successfully added new to-do') as HTMLElement;
      expect(snackbarSuccessText).toBeInTheDocument();
    });
  });
});
