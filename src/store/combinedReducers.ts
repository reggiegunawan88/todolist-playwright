// List of reducers for each features
import { combineReducers } from 'redux'

/* Import slicers for each features */
import SnackbarSlice from './slices/Snackbar'
import TodoListSlice from './slices/TodoList'
import ModalDialogSlice from './slices/ModalDialog'
import { persistReducer } from 'redux-persist'
import createPersistorStorage from './redux-persist-storage/storage'

// Configure Redux Persist
// We just want to persist todoList so we add it to whitelist
export const persistConfig = {
  key: 'root:storage',
  version: 1,
  storage: createPersistorStorage(), // this one will prevent log error: "create sync storage. falling back to noop storage."
  whitelist: ['todoList']
}

// Combine all reducers
const combinedReducers = combineReducers({
  snackbar: SnackbarSlice,
  todoList: TodoListSlice,
  modalDialog: ModalDialogSlice
})

export default persistReducer(persistConfig, combinedReducers)
