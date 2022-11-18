import React from "react";
import NavLink from "../general/NavLink";

function Nav() {
  return (
    <div className="h-[50px] w-full py-8 flex items-center justify-between">
      <div>Yems</div>
      <nav className="flex items-center justify-between">
        <NavLink name="About Us" />
      </nav>
    </div>
  );
}

export default Nav;
