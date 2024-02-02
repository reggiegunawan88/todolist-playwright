import { configureStore } from '@reduxjs/toolkit';

// combinedReducers for all RTK slicers
import combinedReducer from '@/store/combinedReducers';

export const store = configureStore({
  reducer: combinedReducer,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
