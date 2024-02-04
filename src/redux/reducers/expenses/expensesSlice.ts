import { createSlice, PayloadAction } from '@reduxjs/toolkit';

// Define the initial state for the counter slice
interface expensesState {
  value: number;
}

const initialState: expensesState = {
  value: 0,
};

// Create a counter slice with its reducer and actions
const expensesSlice = createSlice({
  name: 'expenses',
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    set: (state, action: PayloadAction<number>) => {
      state.value = action.payload;
    },
  },
});

// Export the reducer and actions
export const { increment, decrement, set } = expensesSlice.actions;
export default expensesSlice.reducer;
