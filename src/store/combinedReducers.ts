// List of reducers for each features
import { combineReducers } from 'redux';

/* Import slicers for each features */
import TaskIndicatorSlice from './slices/TaskIndicator';
import SnackbarSlice from './slices/Snackbar';
import TodoListSlice from './slices/TodoList'
import ModalDialogSlice from './slices/ModalDialog'
import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';

// Configure Redux Persist
// We just want to persist to-do list so we add it into whitelist
export const persistConfig = {
  key: 'root',
  version: 1,
  storage,
  whitelist: ['todoList']
}

// Combine all reducers
const combinedReducers = combineReducers({
  taskIndicator: TaskIndicatorSlice,
  snackbar: SnackbarSlice,
  todoList: TodoListSlice,
  modalDialog: ModalDialogSlice
});

export default persistReducer(persistConfig, combinedReducers);
