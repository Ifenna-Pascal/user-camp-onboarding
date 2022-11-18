import Link from "next/link";
import React from "react";
import Button from "../general/Button";
import NavLink from "../general/NavLink";

function Nav() {
  return (
    <div className="sticky top-0 mb-4 z-50 bg-white">
      <div className="w-full py-6 flex items-center mx-4 lg:max-w-[1450px] lg:mx-auto justify-between">
        <Link href="/">
          {" "}
          <h1 className="font-sono text-4xl ">Yems</h1>
        </Link>
        <nav className="lg:flex items-center hidden justify-between">
          <NavLink href="/#home" name="About Us" />
          <NavLink href="/#process" name="Process" />
          <NavLink href="/#reviews" name="Reviews" />
          <Link href="/register">
            <Button text="Register" />
          </Link>
        </nav>
        <div
          className={`${
            show ? "flex duration-500  flex-col items-center pt-2 pb-8" : "py-0"
          }`}
        ></div>
      </div>
    </div>
  );
}

export default Nav;
