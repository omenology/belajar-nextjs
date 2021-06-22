import React, { useReducer } from "react";
import Link from "next/link";
import { useCount } from "../../context";

const Tes = (contex) => {
  const { state, inc } = useCount();

  return (
    <div>
      <h1 onClick={() => inc()}>Bar: {state.count}</h1>
      <Link href="/">
        <a>ad</a>
      </Link>
    </div>
  );
};
export default Tes;
