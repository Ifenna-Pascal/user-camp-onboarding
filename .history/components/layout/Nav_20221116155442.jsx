import React from "react";
import NavLink from "../general/NavLink";

function Nav() {
  return (
    <div className="h-[50px] w-full py-8 flex items-center justify-between">
      <div>Yems</div>
      <nav className="flex items-center justify-between">
        <NavLink href="#" name="About us" />
        <NavLink href="/#process" name="Process" />
        <NavLink href="/#review" name="Reviews" />
      </nav>
    </div>
  );
}

export default Nav;
