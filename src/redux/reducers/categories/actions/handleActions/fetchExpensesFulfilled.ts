const fetchExpensesFulfilled = (state: any,action: any) => {
    state.loading = false;
    state.message = "Fetch expenses succesfull";
    console.log("FETCH EXPENSES SUCCESFULL");
    let expenses = action.payload;
    let totalSum = state.totalSumAllocated;
    let expensesTotal = 0;
    let remainingTotal = totalSum;
    let categoriesNumbers = state.categoriesNumbers;


    for(let i=0; i< categoriesNumbers.length; i++){
        categoriesNumbers[i].expenses = 0;
        categoriesNumbers[i].remaining = categoriesNumbers[i].sumAllocated;
    }

    for(let i=0; i< expenses.length; i++){
        let item = expenses[i];
        console.log("item");
        console.log(item);
        let field = item.field;
        console.log("field " + field);
        for(let j=0 ; j < categoriesNumbers.length; j++){
            if(categoriesNumbers[j].category === field){
                console.log("found " + categoriesNumbers[j].category + " equals " + field);
                categoriesNumbers[j].expenses = categoriesNumbers[j].expenses + item.amount;
                categoriesNumbers[j].remaining = categoriesNumbers[j].remaining -  item.amount;
            }
        }
        expensesTotal += item.amount;
        remainingTotal -= item.amount;
    }

    state.expenses = expenses;
    state.categoriesNumbers = categoriesNumbers;
    state.totalExpenses = expensesTotal;
    state.totalRemaining = remainingTotal;

}

export default fetchExpensesFulfilled