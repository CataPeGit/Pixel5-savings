const createExpenseRejected =  (state: any,action: any) => {
    state.isLoggedIn = false;
    state.message = "There was an error while deleting an expense";
}

export default createExpenseRejected;