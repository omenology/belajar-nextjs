import React, { useReducer } from "react";
import Link from "next/link";
import { initialState, reducer } from "../../reducer/count";

const Tes = (contex) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <h1
        onClick={() => {
          dispatch({ type: "inc" });
          console.log("alal");
        }}
      >
        Bar: {state.count}
      </h1>
      <Link href="/">
        <a>ad</a>
      </Link>
    </div>
  );
};
export default Tes;
