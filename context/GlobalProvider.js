import { createContext, useReducer } from "react";

import { reducerCounter, initialStateCounter } from "./reducer/counter";

export const GlobalContext = createContext();

export const GlobalProvider = ({ children }) => {
  const [stateCounter, dispatchCounter] = useReducer(
    reducerCounter,
    initialStateCounter
  );
  const value = {
    state: { counter: stateCounter },
    dispatch: { counter: dispatchCounter },
  };

  return (
    <GlobalContext.Provider value={value}>{children}</GlobalContext.Provider>
  );
};
