import React, { useContext, useState } from "react";
import axios from "axios";

const BASE_URL = "http://localhost:5000/api/v1/";

const GlobalContext = React.createContext();

export const GlobalProvider = ({ children }) => {
  const [incomes, setIncomes] = useState([]);
  const [expenses, setExpenses] = useState([]);
  const [error, setError] = useState(null);
  const [selectedIdIncome, setSelectedIdIncome] = useState(null);
  const [selectedIdExpenses, setSelectedIdExpenses] = useState(null);
  const [resIncomes, setResIncomes] = useState({});
  const [resExpenses, setResExpenses] = useState({});

  //calculate incomes
  const addIncome = async (income) => {
    const response = await axios
      .post(`${BASE_URL}add-income`, income)
      .catch((err) => {
        setError(err.response.data.message);
      });
    getIncomes();
  };
  //calculate incomes
  const updateIncome = async (id, income) => {
    try {
      await axios.patch(`${BASE_URL}update-income/${id}`, income);
    } catch (error) {
      setError(error);
      // console.log(error);
    }
    getIncomes();
  };

  const getIncomes = async (date) => {
    let response;
    if (isNaN(date)) {
      response = await axios.get(`${BASE_URL}get-incomes`);
    } else {
      response = await axios.get(
        `${BASE_URL}get-incomes/?month=${
          new Date(date).getMonth() + 1
        }&year=${new Date(date).getFullYear()}`
      );
    }

    setIncomes(response.data);
    // console.log(response.data);
  };

  const getSingleIncomes = async (id) => {
    const response = await axios.get(`${BASE_URL}get-incomes/${id}`);
    setResIncomes({
      ...resIncomes,
      title: response.data.title,
      amount: response.data.amount,
      date: response.data.date,
      category: response.data.category,
      description: response.data.description,
    });
  };

  const deleteIncome = async (id) => {
    const res = await axios.delete(`${BASE_URL}delete-income/${id}`);
    getIncomes();
  };

  const totalIncome = () => {
    let totalIncome = 0;
    incomes.forEach((income) => {
      totalIncome = totalIncome + income.amount;
    });

    return totalIncome;
  };

  //calculate expenses
  const addExpense = async (income) => {
    const response = await axios
      .post(`${BASE_URL}add-expense`, income)
      .catch((err) => {
        setError(err.response.data.message);
      });
    getExpenses();
  };

  const getExpenses = async (date) => {
    let response;
    if (isNaN(date)) {
      response = await axios.get(`${BASE_URL}get-expenses`);
    } else {
      response = await axios.get(
        `${BASE_URL}get-expenses/?month=${
          new Date(date).getMonth() + 1
        }&year=${new Date(date).getFullYear()}`
      );
    }
    setExpenses(response.data);
    // console.log(response.data);
  };

  const updateExpenses = async (id, income) => {
    try {
      await axios.patch(`${BASE_URL}update-expense/${id}`, income);
    } catch (error) {
      setError(error);
      console.log(error);
    }
    getExpenses();
  };

  const getSigleExpenses = async (id) => {
    const response = await axios.get(`${BASE_URL}get-expenses/${id}`);
    setResExpenses({
      ...resExpenses,
      title: response.data.title,
      amount: response.data.amount,
      date: response.data.date,
      category: response.data.category,
      description: response.data.description,
    });
  };

  const deleteExpense = async (id) => {
    const res = await axios.delete(`${BASE_URL}delete-expense/${id}`);
    getExpenses();
  };

  const totalExpenses = () => {
    let totalIncome = 0;
    expenses.forEach((income) => {
      totalIncome = totalIncome + income.amount;
    });

    return totalIncome;
  };

  const totalBalance = () => {
    return totalIncome() - totalExpenses();
  };

  const transactionHistory = () => {
    const history = [...incomes, ...expenses];
    history.sort((a, b) => {
      return new Date(b.createdAt) - new Date(a.createdAt);
    });

    return history.slice(0, 3);
  };

  return (
    <GlobalContext.Provider
      value={{
        addIncome,
        getIncomes,
        incomes,
        deleteIncome,
        expenses,
        totalIncome,
        addExpense,
        getExpenses,
        deleteExpense,
        totalExpenses,
        totalBalance,
        transactionHistory,
        error,
        setError,
        selectedIdIncome,
        setSelectedIdIncome,
        getSingleIncomes,
        resIncomes,
        updateIncome,
        updateExpenses,
        getSigleExpenses,
        resExpenses,
        setResExpenses,
        selectedIdExpenses,
        setSelectedIdExpenses,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(GlobalContext);
};
