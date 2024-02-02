import { configureStore, AnyAction } from '@reduxjs/toolkit';

// combinedReducers for each features
import combinedReducer from '@/store/combinedReducers';

const reducer = (state: ReturnType<typeof combinedReducer>, action: AnyAction) => {
  return combinedReducer(state, action);
};

// add reducer to configureStore
// export const store = () =>
//   configureStore({
//     reducer,
//   } as any);

export const store = configureStore({
  reducer: combinedReducer,
});

// type Store = ReturnType<typeof store>;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
