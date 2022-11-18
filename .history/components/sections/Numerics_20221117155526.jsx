import React from "react";

function Numerics() {
  return (
    <div className="bg-gray-900 flex flex-col justify-center my-12 h-[250px] w-full">
      <div className="max-w-[1100px] flex items-center w-full justify-between mx-auto">
        <Numeric figure={5} text="Five Days" />
        <Numeric figure={3} text="Three Daily Sections" />
        <Numeric figure={4} text="4 Branches" />
      </div>
    </div>
  );
}

export default Numerics;

const Numeric = ({ figure, text }) => (
  <div className="flex flex-col cursor-pointer items-center">
    <h1 className="text-white hover:scale-[1.3] hover:mb-2 duration-500 font-sono font-semibold text-8xl">
      {figure}
    </h1>
    <p className="text-center font-sono text-xl text-gray-200">{text}</p>
  </div>
);
