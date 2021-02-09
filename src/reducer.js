const reducer = (state, action) => {
  if (action.type === "ADD_INCOME") {
    return { ...state, income: [...state.income, action.payload] };
  }
  if (action.type === "ADD_EXPENSE") {
    return { ...state, expenses: [...state.expenses, action.payload] };
  }
  if (action.type === "GET_TOTALS") {
    const newIncomeTotal = state.income.reduce(
      (incomeTotal, incomeEntry) => {
        const { description, amount, id } = incomeEntry;
        incomeTotal.total += amount;
        return incomeTotal;
      },
      { total: 0 }
    );
    newIncomeTotal.total = parseFloat(newIncomeTotal.total.toFixed(2));

    const newExpensesTotal = state.expenses.reduce(
      (expensesTotal, expenseEntry) => {
        const { description, amount, id } = expenseEntry;
        expensesTotal.total += amount;
        return expensesTotal;
      },
      { total: 0 }
    );
    newExpensesTotal.total = parseFloat(newExpensesTotal.total.toFixed(2));

    const newTotalCashFlow = totalIncome - totalExpenses;

    return { ...state, totalIncome: newIncomeTotal.total, totalExpenses: newExpensesTotal.total, cashflowValue: newTotalCashFlow };
  }
  throw new Error("no matching action type");
};

export default reducer;
