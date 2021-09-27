import { createContext, useReducer } from 'react';
import AppReducer from './AppReducer';

// const dummyTransactions = [
//   { id: 1, text: 'Flower', amount: -20 },
//   { id: 2, text: 'Salary', amount: 300 },
//   { id: 3, text: 'Book', amount: -10 },
//   { id: 4, text: 'Camera', amount: 150 },
// ];

const initialState = {
  transactions: [],
};

export const Context = createContext(initialState);

const Provider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  const deleteTransaction = (id) => {
    dispatch({ type: 'DELETE_TRANSACTION', payload: id });
  };

  const addTransaction = (transaction) => {
    dispatch({ type: 'ADD_TRANSACTION', payload: transaction });
  };

  return (
    <Context.Provider
      value={{
        transactions: state.transactions,
        deleteTransaction,
        addTransaction,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export default Provider;
