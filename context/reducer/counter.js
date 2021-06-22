import { INC, DEC } from "../actions/actionTypes";

export const initialStateCounter = { count: 0 };
export const reducerCounter = (state, action) => {
  switch (action.type) {
    case INC:
      return { count: state.count + 1 };
    case DEC:
      return { count: state.count - 1 };
    default:
      return state;
  }
};
