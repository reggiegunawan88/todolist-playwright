// list of reducers for each features
import { combineReducers } from 'redux';

/* import slicers for each features */
import TaskIndicatorSlice from '@/store/slices/TaskIndicator';

// combine all reducers
const combinedReducer = combineReducers({
  taskIndicator: TaskIndicatorSlice,
});

export default combinedReducer;
