import { act, fireEvent, render, waitFor } from '@testing-library/react'
import '@testing-library/jest-dom'
import { Provider } from 'react-redux'
import { store } from '@/store'
import { BasicSuccessSnackbar, BasicErrorSnackbar } from '../Snackbar.stories'

// Mock setTimeout function
jest.useFakeTimers()

describe('Snackbar.tsx', () => {
  test('Test render success snackbar', async () => {
    const { getByLabelText, queryByLabelText } = render(
      <Provider store={store}>
        <BasicSuccessSnackbar />
      </Provider>
    )

    // 1. Define open snackbar button
    const button = getByLabelText('open-snackbar-button')

    // 2. Click button
    fireEvent.click(button)

    await waitFor(() => {
      // 3. Expect snackbar description to be "Success Snackbar" along with its correct background color
      const snackbarDescription = queryByLabelText('snackbar-description') as HTMLElement
      const snackbarBackround = queryByLabelText('snackbar-background-color') as HTMLElement
      expect(snackbarDescription).toHaveTextContent('Success Snackbar')
      expect(snackbarBackround).toHaveStyle('background-color: #34D399')
    })
  })

  test('Test render error snackbar', async () => {
    const { getByLabelText, queryByLabelText } = render(
      <Provider store={store}>
        <BasicErrorSnackbar />
      </Provider>
    )

    // 1. Define open snackbar button
    const button = getByLabelText('open-snackbar-button')

    // 2. Click button
    fireEvent.click(button)

    await waitFor(() => {
      // 3. Expect snackbar description to be "Error Snackbar" along with its correct background color
      const snackbarDescription = queryByLabelText('snackbar-description') as HTMLElement
      const snackbarBackround = queryByLabelText('snackbar-background-color') as HTMLElement
      expect(snackbarDescription).toHaveTextContent('Error Snackbar')
      expect(snackbarBackround).toHaveStyle('background-color: #F87171')
    })
  })

  test('Test hide snackbar after specified duration', async () => {
    const { getByLabelText, queryByLabelText } = render(
      <Provider store={store}>
        <BasicErrorSnackbar />
      </Provider>
    )

    const duration = 2000 // 2 seconds

    // 1. Define open snackbar button
    const button = getByLabelText('open-snackbar-button')

    // 2. Click button
    fireEvent.click(button)

    await waitFor(() => {
      // 3. Expect snackbar is displayed on DOM
      const snackbarDescription = queryByLabelText('snackbar-description') as HTMLElement
      expect(snackbarDescription).toBeInTheDocument()
    })

    // 4. Fast forward time by duration
    act(() => {
      jest.advanceTimersByTime(duration)
    })

    await waitFor(() => {
      // 5. Expect snackbar no longer in the DOM
      const snackbarDescription = queryByLabelText('snackbar-description') as HTMLElement
      expect(snackbarDescription).not.toBeInTheDocument()
    })
  })
})
