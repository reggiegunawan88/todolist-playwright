// List of reducers for each features
import { combineReducers } from 'redux'

/* Import slicers for each features */
import SnackbarSlice from './slices/Snackbar'
import TodoListSlice from './slices/TodoList'
import ModalDialogSlice from './slices/ModalDialog'
import storage from 'redux-persist/lib/storage'
import { persistReducer } from 'redux-persist'

// Configure Redux Persist
// We just want to persist todoList so we add it to whitelist
export const persistConfig = {
  key: 'root:storage',
  version: 1,
  storage,
  whitelist: ['todoList']
}

// Combine all reducers
const combinedReducers = combineReducers({
  snackbar: SnackbarSlice,
  todoList: TodoListSlice,
  modalDialog: ModalDialogSlice
})

export default persistReducer(persistConfig, combinedReducers)
