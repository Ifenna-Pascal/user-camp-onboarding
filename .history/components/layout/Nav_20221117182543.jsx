import Link from "next/link";
import React, { useState } from "react";
import Button from "../general/Button";
import NavLink from "../general/NavLink";

function Nav() {
  const [show, setShow] = useState(false);
  return (
    <div className="sticky top-0 mb-4 z-50 bg-white">
      <nav className="w-full py-6 flex items-center mx-4 lg:max-w-[1450px] lg:mx-auto justify-between">
        <Link href="/">
          {" "}
          <h1 className="font-sono text-4xl ">Yems</h1>
        </Link>
        <ul className="lg:flex items-center hidden justify-between">
          <NavLink href="/#home" name="About Us" />
          <NavLink href="/#process" name="Process" />
          <NavLink href="/#reviews" name="Reviews" />
          <Link href="/register">
            <Button text="Register" />
          </Link>
        </ul>
        <div
          className={`${
            show ? "flex duration-500  flex-col items-center pt-2 pb-8" : "py-0"
          }`}
        ></div>
      </n>
    </div>
  );
}

export default Nav;
