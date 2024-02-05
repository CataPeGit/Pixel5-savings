const createExpenseFulfilled = (state: any,action: any) => {
    state.loading = false;
    state.message = "Created expense succesfull";
}

export default createExpenseFulfilled