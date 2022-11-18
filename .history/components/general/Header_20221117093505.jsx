import React from "react";

function Header({ header, content }) {
  return (
    <div>
      <h1>{header}</h1>
      <p>{content}</p>
    </div>
  );
}

export default Header;
