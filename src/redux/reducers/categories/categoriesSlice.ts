import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import fetchExpenses from './actions/fetchExpenses';
import fetchExpensesFulfilled from './actions/handleActions/fetchExpensesFulfilled';
import fetchExpensesPending from './actions/handleActions/fetchExpensesPending';
import fetchExpensesRejected from './actions/handleActions/fetchExpensesRejected';


import createExpense from '../expenses/actions/createExpense';
import createExpenseFulfilled from '../expenses/actions/handleCreateExpense.ts/createExpenseFulfilled';
import createExpensePending from '../expenses/actions/handleCreateExpense.ts/createExpensePending';
import createExpenseRejected from '../expenses/actions/handleCreateExpense.ts/createExpenseRejected';


import editExpense from '../expenses/actions/editExpense';
import editExpenseFulfilled from '../expenses/actions/handleEditExpense/editExpenseFulfilled';
import editExpensePending from '../expenses/actions/handleEditExpense/editExpensePending';
import editExpenseRejected from '../expenses/actions/handleEditExpense/editExpenseRejected';

const initialState= {
  categories : ["Food", "Health", "Utilities"],
  totalSumAllocated: 3000,
  totalExpenses: 0,
  totalRemaining: 3000,
  categoriesNumbers : [
    {
        category: "Food",
        sumAllocated : 1000,
        expenses: 0,
        remaining: 1000,
    },
    {
        category: "Health",
        sumAllocated : 500,
        expenses: 0,
        remaining: 500,
    },
    {
        category: "Utilities",
        sumAllocated : 1500,
        expenses: 0,
        remaining: 1500,
    },
  ],
  purchases : [],
  selectedTab: 0,
};

// Create a counter slice with its reducer and actions
const categoriesSlice = createSlice({
  name: 'categories',
  initialState,
  reducers: {
    changeTab: (state,action) =>{
        state.selectedTab = action.payload
    }
  },
  extraReducers: (builder) => {
    builder.addCase(fetchExpenses.pending, (state, action) =>
        fetchExpensesPending(state, action)
    );
    builder.addCase(fetchExpenses.fulfilled, (state, action) =>
    fetchExpensesFulfilled(state, action)
    );
    builder.addCase(fetchExpenses.rejected, (state, action) =>
    fetchExpensesRejected(state, action)
    );
    builder.addCase(createExpense.pending, (state, action) =>
    createExpensePending(state, action)
);
    builder.addCase(createExpense.fulfilled, (state, action) =>
createExpenseFulfilled(state, action)
);
    builder.addCase(createExpense.rejected, (state, action) =>
createExpenseRejected(state, action)
);
  builder.addCase(editExpense.pending, (state, action) =>
  editExpensePending(state, action)
  );
  builder.addCase(editExpense.fulfilled, (state, action) =>
  editExpenseFulfilled(state, action)
  );
  builder.addCase(editExpense.rejected, (state, action) =>
  editExpenseRejected(state, action)
  );
}
});

// Export the reducer and actions

export const {changeTab}=categoriesSlice.actions;
export default categoriesSlice.reducer;
