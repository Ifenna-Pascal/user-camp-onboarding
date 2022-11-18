import Link from "next/link";
import React from "react";

function NavLink({ href, name }) {
  return (
    <Link href={href}>
      <span className="text-black px-4 text-xl font-sono font-700">{name}</span>
    </Link>
  );
}

export default NavLink;
