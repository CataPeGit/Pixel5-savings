import { configureStore } from '@reduxjs/toolkit';
import expensesReducer from '../reducers/expenses/expensesSlice';
import authentificationReducer from "../reducers/authentification/authentificationSlice"

// Configure the Redux store
const store = configureStore({
  reducer: {
    expenses: expensesReducer,
    authentification : authentificationReducer
    // Add more slices as needed
  },
//   middleware: (getDefaultMiddleware) =>
//     getDefaultMiddleware({
//       serializableCheck: {
//         // Ignore these action types
//         ignoredActions: ['authentification/loginWithGoogle'],
//       },
//     }),
});

export default store;
