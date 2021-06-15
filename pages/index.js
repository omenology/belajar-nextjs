import React, { useReducer } from "react";
import Link from "next/link";
import { useCount } from "../reducer/count";
import AppBar from "../components/appBar";

export default function Home() {
  const { state, dispatch } = useCount();
  console.log(state);
  return (
    <>
      <AppBar />
      <div>
        <h1>Count:{state.count}</h1>
        <button onClick={() => dispatch({ type: "inc" })}>+</button>
        <button onClick={() => dispatch({ type: "dec" })}>-</button>
        <Link href="/bar">
          <a>bar</a>
        </Link>
      </div>
    </>
  );
}
