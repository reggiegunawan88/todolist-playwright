import { TodoItem } from '@/types/ui-type'
import { PayloadAction, createSlice } from '@reduxjs/toolkit'

/* Reducers for modal dialog */

// Define a type for the state
type ModalDialogType = {
  isOpen: boolean
  currentTodoItem: TodoItem | null
}

// Define the initial state
const initialState: ModalDialogType = {
  isOpen: false,
  currentTodoItem: null
}

export const ModalDialogSlice = createSlice({
  name: 'modalDialog',
  initialState,
  reducers: {
    openModalDialog: (state, action: PayloadAction<TodoItem>) => {
      state.isOpen = true
      state.currentTodoItem = action.payload
    },
    closeModalDialog: state => {
      state.isOpen = false
    }
  }
})

export const { openModalDialog, closeModalDialog } = ModalDialogSlice.actions

export default ModalDialogSlice.reducer
