const editExpenseRejected =  (state: any,action: any) => {
    state.isLoggedIn = false;
    state.message = "There was an error while editing the expense";
}

export default editExpenseRejected;