import { createContext, useContext, useReducer } from "react";

export const initialStateCounter = { count: 0 };
export const reducerCounter = (state, action) => {
  switch (action.type) {
    case "inc":
      return { count: state.count + 1 };
    case "dec":
      return { count: state.count - 1 };
    default:
      return state;
  }
};

export const asyncInc = async (dispatch, payload) => {
  console.log("click", dispatch);
  try {
    setTimeout(() => {
      console.log("timeout");
      dispatch({ type: "inc" });
    }, 5000);
  } catch (error) {
    dispatch("faild");
  }
};

const CountContext = createContext();

export const CountProvider = ({ children }) => {
  const [stateCounter, dispatchCounter] = useReducer(
    reducerCounter,
    initialStateCounter
  );
  const value = {
    state: { counter: stateCounter },
    dispatch: { counter: dispatchCounter },
  };

  return (
    <CountContext.Provider value={value}>{children}</CountContext.Provider>
  );
};

export const useCount = () => {
  const context = useContext(CountContext);

  if (context == undefined) throw new Error("context undefined");
  return {
    state: context.state.counter,
    increment: (payload) => asyncInc(context.dispatch.counter),
  };
};
