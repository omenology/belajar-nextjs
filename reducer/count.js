import { createContext, useContext, useReducer } from "react";

export const initialState = { count: 0 };
export const reducer = (state, action) => {
  switch (action.type) {
    case "inc":
      return { count: state.count + 1 };
    case "dec":
      return { count: state.count - 1 };
    default:
      return state;
  }
};

const CountContext = createContext();

export const CountProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const value = { state, dispatch };

  return (
    <CountContext.Provider value={value}>{children}</CountContext.Provider>
  );
};

export const useCount = () => {
  const context = useContext(CountContext);

  if (context == undefined) throw new Error("context undefined");
  return context;
};
