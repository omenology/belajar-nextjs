import React from "react";
import Link from "next/link";
import { useCount } from "../context/";

import Items from "../components/items";
import Layout from "../components/layout";

export default function Home() {
  const { state, asyncIncrement, inc, dec } = useCount();
  const { loading, setLoading } = React.useState(false);
  const data = [
    { name: "buku 1", description: "desc buku 1" },
    { name: "buku 2", description: "desc buku 2" },
    { name: "buku 3", description: "desc buku 3" },
    { name: "buku 4", description: "desc buku 4" },
    { name: "buku 5", description: "desc buku 5" },
    { name: "buku 6", description: "desc buku 6" },
  ];
  console.log(state);
  return (
    <Layout>
      <Items data={data} />
      <div>
        <h1>Count:{state.count}</h1>
        <button onClick={() => inc()}>+</button>
        <button onClick={() => dec()}>-</button>
        <Link href="/bar">
          <a>bar</a>
        </Link>
      </div>
    </Layout>
  );
}
