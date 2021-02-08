import React, { useState, useContext, useReducer, useEffect } from "react";
import ExpensesOptions from "./data";
import reducer from "./reducer";

const AppContext = React.createContext();

const initialState = {
  selectOptions: ExpensesOptions,
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

  return <AppContext.Provider value={{ ...state }}>{children}</AppContext.Provider>;
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
