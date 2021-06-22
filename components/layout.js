import React from "react";
import Appbar from "./appBar";

const Layout = (props) => {
  return (
    <div>
      <Appbar />
      <div style={{ padding: 10 }}>{props.children}</div>
    </div>
  );
};

export default Layout;
