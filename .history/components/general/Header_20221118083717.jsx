import React from "react";

function Header({ header, content }) {
  return (
    <div className="flex flex-col lg:max-w-[1000px] mx-auto items-center justify-center py-6 lg:py-8">
      <h1 className="text-gray-800 text-center lg:text-left text-2xl lg:text-5xl font-semibold font-sono block ">
        {header}
      </h1>
      <p className="block text-lg text-center font-poppins  leading-[30px] lg:py-4">
        {content}
      </p>
    </div>
  );
}

export default Header;
