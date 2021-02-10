import React, { useState, useContext, useReducer, useEffect } from "react";
import ExpensesOptions from "./data";
import reducer from "./reducer";

const AppContext = React.createContext();

const initialState = {
  loading: false,
  income: [],
  expenses: [],
  savingsYTD: 1000,
  totalIncome: 0,
  totalExpenses: 0,
  currentSavings: 0,
  cashflowValue: 0,
};

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const incomeData = (incomeText, incomeAmount) => {
    const newId = new Date().getTime().toString();
    const newIncome = {
      id: newId,
      description: incomeText,
      amount: parseFloat(incomeAmount),
    };
    newIncome.amount = parseFloat(newIncome.amount.toFixed(2));
    dispatch({ type: "ADD_INCOME", payload: newIncome });
  };

  const expenseData = (expenseText, expenseAmount) => {
    const newId = new Date().getTime().toString();
    const newExpense = {
      id: newId,
      description: expenseText,
      amount: parseFloat(expenseAmount),
    };
    newExpense.amount = parseFloat(newExpense.amount.toFixed(2));
    dispatch({ type: "ADD_EXPENSE", payload: newExpense });
  };

  const removeIncome = (id) => {
    dispatch({ type: "REMOVE_INCOME", payload: id });
  };

  const removeExpense = (id) => {
    dispatch({ type: "REMOVE_EXPENSE", payload: id });
  };

  useEffect(() => {
    dispatch({ type: "GET_TOTALS" });
  }, [state.income, state.expenses]);

  useEffect(() => {
    dispatch({ type: "CASHFLOW_TOTAL" });
  }, [state.totalIncome, state.totalExpenses]);

  useEffect(() => {
    dispatch({ type: "CURRENT_SAVINGS" });
  }, [state.cashflowValue]);

  return <AppContext.Provider value={{ ...state, incomeData, expenseData, removeIncome, removeExpense }}>{children}</AppContext.Provider>;
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
