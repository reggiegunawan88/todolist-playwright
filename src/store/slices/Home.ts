import { createSlice, PayloadAction } from '@reduxjs/toolkit';

/* Reducers for dialog confirmation component */

// Define a type for the state
type IHome = {
  title: string;
};

// Define the initial state using that type
const initialState: IHome = {
  title: '',
};

export const DialogConfirmation = createSlice({
  name: 'dialogConfirmation',
  initialState,
  reducers: {
    setHomeTitle: (state, action: PayloadAction<string>) => {
      state.title = action.payload;
    },
  },
});

export const { setHomeTitle } = DialogConfirmation.actions;

export default DialogConfirmation.reducer;
