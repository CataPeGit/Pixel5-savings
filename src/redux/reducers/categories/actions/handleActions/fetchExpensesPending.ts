const fetchExpensesPending =  (state: any,action: any) => {
    const user = action.payload;
    state.user = user;
    state.isLoggedIn = true;
}

export default fetchExpensesPending;