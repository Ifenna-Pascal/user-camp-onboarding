import React from "react";

function Numerics() {
  return (
    <div className="bg-black h-[250px] w-full">
      <div className="max-w-[100px] flex items-center justify-between mx-auto"></div>
    </div>
  );
}

export default Numerics;

const Numeric = ({ figure, text }) => (
  <div className="block">
    <h1 className="text-white font-montserat font-semibold text-4xl">
      {figure}
    </h1>
    <p className="text-center font-sono text-lg text-gray-200">{text}</p>
  </div>
);
