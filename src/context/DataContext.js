import { createContext, useReducer } from 'react';

const DataContext = createContext();

const reducer = (state, action) => {
  switch (action.type) {
    case 'ADD_ENTRY':
      return { ...state, tableData: [...state.tableData, action.payload] };
    case 'SET_FILTER':
      return { ...state, filter: action.payload };
    default:
      return state;
  }
};

export const DataProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, {
    tableData: loanData,
    filter: ''
  });

  return (
    <DataContext.Provider value={{ state, dispatch }}>
      {children}
    </DataContext.Provider>
  );
};
