import Link from "next/link";
import React from "react";

function NavLink({ href, name }) {
  return (
    <Link href={href}>
      <span className="text-black text-lg font-sono">{name}</span>
    </Link>
  );
}

export default NavLink;
