import React from "react";
import Footer from "./Footer";
import Nav from "./Nav";

function Mainlayout({ children }) {
  return (
    <div className="">
      <Nav />
      <main>{children}</main>
      <Footer />
    </div>
  );
}

export default Mainlayout;
