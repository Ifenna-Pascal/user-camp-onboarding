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
        <button
          className='block md:hidden className="w-full px-2 py-1 rounded-lg text-AP-grey-200 hover:text-AP-blue-200 border-AP-grey-200 hover:border-AP-blue-400'
          onClick={toggle}
        >
          <i
            className={`${
              !show ? "ri-menu-3-fill duration-500" : "ri-close-line"
            } text-2xl text-gray-800`}
          />
        </button>
      </nav>
      <div
        className={`${
          show ? "flex duration-500  flex-col items-center pt-2 pb-8" : "py-0"
        }`}
      >
        <NavLink href="/#home" name="About Us" />
        <NavLink href="/#process" name="Process" />
        <NavLink href="/#reviews" name="Reviews" />
        <Link href="/register">
          <Button text="Register" />
        </Link>
      </div>
    </div>
  );
}

export default Nav;
