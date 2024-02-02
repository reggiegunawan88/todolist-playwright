import { createSlice, PayloadAction } from '@reduxjs/toolkit';

/* Reducers for task indicator */

// Define a type for the state
type TaskIndicatorType = {
  totalTasks: number
  totalHours: number
  totalDays:  number
};

// Define the initial state
const initialState: TaskIndicatorType = {
  totalTasks: 0,
  totalHours: 0,
  totalDays: 0
};

export const TaskIndicatorSlice = createSlice({
  name: 'taskIndicators',
  initialState,
  reducers: {
    setTotalTasks: (state, action: PayloadAction<number>) => {
      state.totalTasks = action.payload;
    },
    setTotalHours: (state, action: PayloadAction<number>) => {
      state.totalHours = action.payload
    },
    setTotalDays: (state, action: PayloadAction<number>) => {
      state.totalDays = action.payload
    },
  },
});

export const { setTotalTasks, setTotalHours, setTotalDays } = TaskIndicatorSlice.actions;

export default TaskIndicatorSlice.reducer;
