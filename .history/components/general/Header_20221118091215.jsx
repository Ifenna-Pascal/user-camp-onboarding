import React from "react";

function Header({ header, content }) {
  return (
    <div className="flex flex-col px-2 lg:max-w-[1000px] mx-auto items-center justify-center py-6 lg:py-8">
      <h1 className="text-gray-800 text-center lg:text-left text-2xl lg:text-5xl font-semibold font-sono block ">
        {header}
      </h1>
      <p className="block text-base  lg:text-lg text-center font-poppins  leading-[30px] py-2 lg:py-4">
        {content}
      </p>
    </div>
  );
}

export default Header;
