import React from "react";

function Numerics() {
  return (
    <div className="bg-black h-[250px] w-full">
      <div className="max-w-[100px] mx-auto"></div>
    </div>
  );
}

export default Numerics;

const Numeric = ({ figure, text }) => (
  <div className="block">
    <h1 className="text-white font-montserat font-semibold">{figure}</h1>
  </div>
);
