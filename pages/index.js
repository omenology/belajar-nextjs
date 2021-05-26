import React, { useReducer } from "react";
import Link from "next/link";
import { initialState, reducer } from "../reducer/count";

export default function Home() {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <div>
      <h1>Count:{state.count}</h1>
      <button onClick={() => dispatch({ type: "inc" })}>+</button>
      <button onClick={() => dispatch({ type: "dec" })}>-</button>
      <Link href="/bar">
        <a>bar</a>
      </Link>
    </div>
  );
}
