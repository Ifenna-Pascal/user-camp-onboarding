import React from "react";

function Header({ header, content }) {
  return (
    <div className="flex flex-col items-center justify-center py-6">
      <h1 className="text-black text-5xl font-semibold font-sono block ">
        {header}
      </h1>
      <p className="block text-lg font-poppins  leading-[30px] ">{content}</p>
    </div>
  );
}

export default Header;
