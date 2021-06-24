import {
  LOGIN_START,
  LOGIN_SUCCESS,
  LOGIN_FAILD,
} from "../actions/actionTypes";

export const initialStateLogin = {
  isLogin: false,
  token: null,
  loading,
  error: false,
};
export const reducerLogin = (state, action) => {
  switch (action.type) {
    case LOGIN_START:
      return { ...state, loading: true, error: false };

    case LOGIN_SUCCESS:
      return { ...state, isLogin: true, token: action.token, loading: false };

    case LOGIN_FAILD:
      return { ...state, error: action.error, token: null, loading: false };
    default:
      return state;
  }
};
