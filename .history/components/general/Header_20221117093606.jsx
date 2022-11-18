import React from "react";

function Header({ header, content }) {
  return (
    <div className="flex flex-col">
      <h1>{header}</h1>
      <p>{content}</p>
    </div>
  );
}

export default Header;
