import { useContext } from "react";
import { GlobalContext } from "../GlobalProvider";
import { INC, DEC } from "./actionTypes";

const asyncInc = async (dispatch, payload) => {
  console.log("click", dispatch);
  try {
    setTimeout(() => {
      console.log("timeout");
      dispatch({ type: INC });
    }, 3000);
  } catch (error) {
    console.log("async inc faild");
  }
};

export const useCount = () => {
  const context = useContext(GlobalContext);

  if (context == undefined) throw new Error("context undefined");
  return {
    state: context.state.counter,
    asyncIncrement: (payload) => asyncInc(context.dispatch.counter),
    inc: (payload) => context.dispatch.counter({ type: INC }),
    dec: (payload) => context.dispatch.counter({ type: DEC }),
  };
};
