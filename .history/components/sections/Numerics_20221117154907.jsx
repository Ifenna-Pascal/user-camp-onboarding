import React from "react";

function Numerics() {
  return (
    <div className="bg-black flex flex-col justify-center my-12 h-[250px] w-full">
      <div className="max-w-[900px] flex items-center w-full justify-between mx-auto">
        <Numeric figure={5} text="Five Days" />
        <Numeric figure={3} text="Three Section / Day" />
        <Numeric figure={4} text="4 Branches" />
      </div>
    </div>
  );
}

export default Numerics;

const Numeric = ({ figure, text }) => (
  <div className="flex flex-col items-center">
    <h1 className="text-white font-montserat font-semibold text-8xl">
      {figure}
    </h1>
    <p className="text-center font-sono text-lg text-gray-200">{text}</p>
  </div>
);
