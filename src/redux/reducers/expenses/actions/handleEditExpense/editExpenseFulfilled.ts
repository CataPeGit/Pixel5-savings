const editExpenseFulfilled= (state: any,action: any) => {
    state.loading = false;
    state.message = "Expense Edited";
}

export default  editExpenseFulfilled