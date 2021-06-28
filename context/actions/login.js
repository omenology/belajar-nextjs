import { useContext } from "react";
import { GlobalContext } from "../GlobalProvider";
import { LOGIN_START, LOGIN_SUCCESS, LOGIN_FAILD } from "./actionTypes";

const loginHandler = async (dispatch, payload) => {
  console.log("sadasd", payload);
  try {
    dispatch({ type: LOGIN_START });
    // fetch to endpoint login
    // payload.email, payload.password
    setTimeout(() => {
      dispatch({ type: LOGIN_SUCCESS, token: "kjl867asdjhj6sadjg" });
      console.log("login success");
    }, 2000);
  } catch (error) {
    dispatch({ type: LOGIN_FAILD, error: "sometihings went worng" });
  }
};

export const useLogin = () => {
  const context = useContext(GlobalContext);
  if (context == undefined) throw new Error("context undefined");
  return {
    state: context.state.login,
    login: (email, password) =>
      loginHandler(context.dispatch.login, { email, password }),
  };
};
