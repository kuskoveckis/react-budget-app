const reducer = (state, action) => {
  if (action.type === "ADD_INCOME") {
    return { ...state, income: [...state.income, action.payload] };
  }
  if (action.type === "ADD_EXPENSE") {
    return { ...state, expenses: [...state.expenses, action.payload] };
  }
  if (action.type === "GET_TOTALS") {
    // Total Income
    const newIncomeTotal = state.income.reduce(
      (incomeTotal, incomeEntry) => {
        const { description, amount, id } = incomeEntry;
        incomeTotal.total += amount;
        return incomeTotal;
      },
      { total: 0 }
    );
    newIncomeTotal.total = parseFloat(newIncomeTotal.total.toFixed(2));

    // Total Expense
    const newExpensesTotal = state.expenses.reduce(
      (expensesTotal, expenseEntry) => {
        const { description, amount, id } = expenseEntry;
        expensesTotal.total += amount;
        return expensesTotal;
      },
      { total: 0 }
    );
    newExpensesTotal.total = parseFloat(newExpensesTotal.total.toFixed(2));

    return { ...state, totalIncome: newIncomeTotal.total, totalExpenses: newExpensesTotal.total };
  }
  if (action.type === "REMOVE_INCOME") {
    const updatedIncome = state.income.filter((income) => income.id !== action.payload);
    return { ...state, income: updatedIncome };
  }
  if (action.type === "REMOVE_EXPENSE") {
    const updatedExpenses = state.expenses.filter((expense) => expense.id !== action.payload);
    return { ...state, expenses: updatedExpenses };
  }
  if (action.type === "CASHFLOW_TOTAL") {
    let newTotalCashFlow = state.totalIncome - state.totalExpenses;
    newTotalCashFlow = parseFloat(newTotalCashFlow.toFixed(2));
    return { ...state, cashflowValue: newTotalCashFlow };
  }
  if (action.type === "CURRENT_SAVINGS") {
    let monthlySavings = state.savingsYTD + state.cashflowValue;
    //monthlySavings = parseFloat(monthlySavings.toFixed(2));
    return { ...state, currentSavings: monthlySavings };
  }

  throw new Error("no matching action type");
};

export default reducer;
