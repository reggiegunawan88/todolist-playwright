// list of reducers for each features
import { combineReducers } from 'redux';

/* import slicers for each features */
import TaskIndicatorSlice from './slices/TaskIndicator';
import SnackbarSlice from './slices/Snackbar';
import TodoListSlice from './slices/TodoList'
import ModalDialogSlice from './slices/ModalDialog'

// combine all reducers
const combinedReducer = combineReducers({
  taskIndicator: TaskIndicatorSlice,
  snackbar: SnackbarSlice,
  todoList: TodoListSlice,
  modalDialog: ModalDialogSlice
});

export default combinedReducer;
