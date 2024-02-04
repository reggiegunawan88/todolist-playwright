import { fireEvent, render, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Provider } from 'react-redux';
import { store } from '@/store';
import { SuccessSnackbarStory, ErrorSnackbarStory } from '../Snackbar.story';

describe('Snackbar.tsx', () => {
  test('test render success snackbar', async () => {
    const { getByLabelText, queryByLabelText } = render(
      <Provider store={store}>
        <SuccessSnackbarStory />
      </Provider>,
    );

    // 1. Define open snackbar button
    const button = getByLabelText('open-snackbar-button');

    // 2. Click button
    fireEvent.click(button);

    await waitFor(() => {
      // 3. Expect snackbar description to be "Success Snackbar" along with its correct background color
      const snackbarDescription = queryByLabelText('snackbar-description') as HTMLElement;
      const snackbarBackround = queryByLabelText('snackbar-background-color') as HTMLElement;
      expect(snackbarDescription).toHaveTextContent('Success Snackbar');
      expect(snackbarBackround).toHaveStyle('background-color: #34D399');
    });
  });

  test('test render error snackbar', async () => {
    const { getByLabelText, queryByLabelText } = render(
      <Provider store={store}>
        <ErrorSnackbarStory />
      </Provider>,
    );

    // 1. Define open snackbar button
    const button = getByLabelText('open-snackbar-button');

    // 2. Click button
    fireEvent.click(button);

    await waitFor(() => {
      // 3. Expect snackbar description to be "Error Snackbar" along with its correct background color
      const snackbarDescription = queryByLabelText('snackbar-description') as HTMLElement;
      const snackbarBackround = queryByLabelText('snackbar-background-color') as HTMLElement;
      expect(snackbarDescription).toHaveTextContent('Error Snackbar');
      expect(snackbarBackround).toHaveStyle('background-color: #F87171');
    });
  });
});
