import { createContext, useReducer } from "react";

import { reducerCounter, initialStateCounter } from "./reducer/counter";
import { reducerLogin, initialStateLogin } from "./reducer/login";

export const GlobalContext = createContext();

export const GlobalProvider = ({ children }) => {
  const [stateCounter, dispatchCounter] = useReducer(
    reducerCounter,
    initialStateCounter
  );
  const [stateLogin, dispatchLogin] = useReducer(
    reducerLogin,
    initialStateLogin
  );

  const value = {
    state: { counter: stateCounter, login: stateLogin },
    dispatch: { counter: dispatchCounter, login: dispatchLogin },
  };

  return (
    <GlobalContext.Provider value={value}>{children}</GlobalContext.Provider>
  );
};
