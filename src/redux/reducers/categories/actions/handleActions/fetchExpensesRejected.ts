const fetchExpensesRejected =  (state: any,action: any) => {
    state.isLoggedIn = false;
    state.message = "There was an error while fetching the expenses";
}

export default fetchExpensesRejected;