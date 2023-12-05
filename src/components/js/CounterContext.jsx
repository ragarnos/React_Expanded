/* eslint-disable react/prop-types */
import { createContext, useReducer } from 'react';
import counterReducer from './counterReducer';

const CounterContext = createContext();

const CounterProvider = ({ children }) => {
  const [state, dispatch] = useReducer(counterReducer, { count: 0 });

  return (
    <CounterContext.Provider value={{ state, dispatch }}>
      {children}
    </CounterContext.Provider>
  );
};

export { CounterContext, CounterProvider };