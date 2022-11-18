import React from "react";
import Button from "../general/Button";
import NavLink from "../general/NavLink";

function Nav() {
  return (
    <div className="w-full py-8 flex items-center justify-between">
      <h1>Yems</h1>
      <nav className="flex items-center justify-between">
        <NavLink href="#" name="About Us" />
        <NavLink href="/#process" name="Process" />
        <NavLink href="/#review" name="Reviews" />
        <Button text="Register" />
      </nav>
    </div>
  );
}

export default Nav;
