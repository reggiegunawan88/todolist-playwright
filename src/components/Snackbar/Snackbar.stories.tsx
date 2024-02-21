import { useAppDispatch } from '@/hooks/useRTK'
import Snackbar from './index'
import { openSnackbar, setSnackbarDescription, setSnackbarType } from '@/store/slices/Snackbar'
import { batch } from 'react-redux'

// Success snackbar component
export const BasicSuccessSnackbar = () => {
  const dispatch = useAppDispatch()

  function openSuccessSnackbar() {
    batch(() => {
      dispatch(openSnackbar())
      dispatch(setSnackbarType('success'))
      dispatch(setSnackbarDescription('Success Snackbar'))
    })
  }

  return (
    <div>
      <button aria-label="open-snackbar-button" onClick={openSuccessSnackbar}>
        Open Snackbar
      </button>
      <Snackbar />
    </div>
  )
}

// Error snackbar component
export const BasicErrorSnackbar = () => {
  const dispatch = useAppDispatch()

  function openErrorSnackbar() {
    dispatch(openSnackbar())
    dispatch(setSnackbarType('error'))
    dispatch(setSnackbarDescription('Error Snackbar'))
  }

  return (
    <div>
      <button aria-label="open-snackbar-button" onClick={openErrorSnackbar}>
        Open Snackbar
      </button>
      <Snackbar />
    </div>
  )
}
