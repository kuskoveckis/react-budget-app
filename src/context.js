import React, { useState, useContext, useReducer, useEffect, useRef } from "react";
import ExpensesOptions from "./data";
import reducer from "./reducer";

const AppContext = React.createContext();

const getLocalStorageIncome = () => {
  let income = localStorage.getItem("budget_income");
  if (income) {
    return (income = JSON.parse(localStorage.getItem("budget_income")));
  } else {
    return [];
  }
};

const getLocalStorageExpenses = () => {
  let expenses = localStorage.getItem("budget_expenses");
  if (expenses) {
    return (expenses = JSON.parse(localStorage.getItem("budget_expenses")));
  } else {
    return [];
  }
};

const initialState = {
  alert: { show: false, msg: "", type: "" },
  income: getLocalStorageIncome(),
  expenses: getLocalStorageExpenses(),
  savingsYTD: 1000,
  totalIncome: 0,
  totalExpenses: 0,
  currentSavings: 0,
  cashflowValue: 0,
  edit: false,
  editId: null,
};

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const incomeData = (incomeText, incomeAmount) => {
    const newId = new Date().getTime().toString();
    if (!incomeText) {
      const newAlert = { show: true, msg: "Please enter description", type: "income_text" };
      dispatch({ type: "INPUT_ALERT", payload: newAlert });
    } else if (!incomeAmount) {
      const newAlert = { show: true, msg: "Please enter amount", type: "income_amount" };
      dispatch({ type: "INPUT_ALERT", payload: newAlert });
    } else if (incomeText && incomeAmount && state.edit) {
      let updatedIncome = state.income.map((item) => {
        if (item.id === state.editId) {
          return { ...item, description: incomeText, amount: parseFloat(incomeAmount) };
        }
        return item;
      });
      dispatch({ type: "EDIT_INCOME", payload: updatedIncome });
    } else {
      const newIncome = {
        id: newId,
        description: incomeText,
        amount: parseFloat(incomeAmount),
      };
      newIncome.amount = parseFloat(newIncome.amount.toFixed(2));
      const newAlert = { show: false, msg: "", type: "" };
      dispatch({ type: "ADD_INCOME", payload: [newIncome, newAlert] });
    }
  };

  const expenseData = (expenseText, expenseAmount) => {
    const newId = new Date().getTime().toString();
    if (!expenseText) {
      const newAlert = { show: true, msg: "Please enter description", type: "expense_text" };
      dispatch({ type: "INPUT_ALERT", payload: newAlert });
    } else if (!expenseAmount) {
      const newAlert = { show: true, msg: "Please enter amount", type: "expense_amount" };
      dispatch({ type: "INPUT_ALERT", payload: newAlert });
    } else if (expenseText && expenseAmount && state.edit) {
      let updatedExpenses = state.expenses.map((item) => {
        if (item.id === state.editId) {
          return { ...item, description: expenseText, amount: parseFloat(expenseAmount) };
        }
        return item;
      });
      dispatch({ type: "EDIT_EXPENSE", payload: updatedExpenses });
    } else {
      const newExpense = {
        id: newId,
        description: expenseText,
        amount: parseFloat(expenseAmount),
      };
      newExpense.amount = parseFloat(newExpense.amount.toFixed(2));
      const newAlert = { show: false, msg: "", type: "" };
      dispatch({ type: "ADD_EXPENSE", payload: [newExpense, newAlert] });
    }
  };

  const editItem = (id) => {
    dispatch({ type: "EDIT_AND_ID", payload: id });
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

  useEffect(() => {
    localStorage.setItem("budget_income", JSON.stringify(state.income));
  }, [state.income]);

  useEffect(() => {
    localStorage.setItem("budget_expenses", JSON.stringify(state.expenses));
  }, [state.expenses]);

  return (
    <AppContext.Provider value={{ ...state, state, incomeData, expenseData, removeIncome, removeExpense, editItem }}>{children}</AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
