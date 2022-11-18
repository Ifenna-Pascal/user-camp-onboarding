import Link from "next/link";
import React from "react";

function NavLink({ href, name }) {
  return <Link href={href}>{name}</Link>;
}

export default NavLink;
