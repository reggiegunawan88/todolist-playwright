import { createSlice, PayloadAction } from '@reduxjs/toolkit'

/* Reducers for snackbar */

// Define a type for the state
type SnackbarType = {
  isOpen: boolean
  description: string
  type: 'success' | 'error'
}

// Define the initial state
const initialState: SnackbarType = {
  isOpen: false,
  description: '',
  type: 'success'
}

export const SnackbarSlice = createSlice({
  name: 'snackbar',
  initialState,
  reducers: {
    openSnackbar: state => {
      state.isOpen = true
    },
    closeSnackbar: state => {
      state.isOpen = false
    },
    setSnackbarDescription: (state, action: PayloadAction<string>) => {
      state.description = action.payload
    },
    setSnackbarType: (state, action: PayloadAction<'success' | 'error'>) => {
      state.type = action.payload
    }
  }
})

export const { openSnackbar, closeSnackbar, setSnackbarDescription, setSnackbarType } = SnackbarSlice.actions

export default SnackbarSlice.reducer
