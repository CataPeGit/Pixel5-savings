const createExpenseFulfilled = (state: any,action: any) => {
    state.loading = false;
    state.message = "Deleted expense";
}

export default createExpenseFulfilled