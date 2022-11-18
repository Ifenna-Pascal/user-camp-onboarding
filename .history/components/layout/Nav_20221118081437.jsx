import Link from "next/link";
import React, { useState } from "react";
import Button from "../general/Button";
import NavLink from "../general/NavLink";

function Nav() {
  const [show, setShow] = useState(false);
  const toggle = () => {
    setShow(!show);
  };
  return (
    <div className="lg:sticky absolute top-0 w-full shadow-lg mb-4 z-50 px-6 lg:px-0 bg-white">
      <nav className="w-full lg:py-6 py-4 flex items-center  lg:max-w-[1450px] lg:mx-auto justify-between">
        <Link href="/">
          {" "}
          <h1 className="font-sono text-2xl lg:text-4xl ">Yems</h1>
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
        className={`flex lg:hidden ${
          show
            ? "flex duration-500  flex-col items-center space-y-8 pt-2 "
            : "hidden"
        }`}
      >
        <NavLink href="/#home" name="About Us" />
        <NavLink href="/#process" name="Process" />
        <NavLink href="/#reviews" name="Reviews" />
        <Link href="/register">
          <Button text="Register" onClick={() => setShow(false)} />
        </Link>
      </div>
    </div>
  );
}

export default Nav;
