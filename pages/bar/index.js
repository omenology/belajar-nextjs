import React, { useReducer } from "react";
import Link from "next/link";
import { useCount } from "../../reducer/count";

const Tes = (contex) => {
  const { state, dispatch } = useCount();

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
