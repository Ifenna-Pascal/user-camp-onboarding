import React from "react";
import Nav from "./Nav";

function Mainlayout({ children }) {
  return (
    <div>
      <Nav />
      <main>{children}</main>
    </div>
  );
}

export default Mainlayout;
