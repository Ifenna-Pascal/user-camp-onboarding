import React from "react";

function Header({ header, content }) {
  return (
    <div className="flex flex-col max-w-[1000px] mx-auto items-center justify-center py-12">
      <h1 className="text-gray-800 text-5xl font-semibold font-sono block ">
        {header}
      </h1>
      <p className="block text-lg text-center font-poppins  leading-[30px] py-3">
        {content}
      </p>
    </div>
  );
}

export default Header;
