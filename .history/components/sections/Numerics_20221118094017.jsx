import React from "react";
import CountUp from "react-countup";
function Numerics() {
  return (
    <div className="bg-gray-900 rounded-md px-3 lg:px-0 flex lg:flex-row flex-col justify-center my-12 min-h-[600px] lg:min-h-[250px] w-full">
      <div className="lg:max-w-[1100px] flex lg:flex-row flex-col lg:items-center w-full justify-between mx-auto">
        <Numeric figure={5} text="Five Days" />
        <Numeric figure={3} text="Three Daily Sections" />
        <Numeric figure={4} text="4 Branches" />
      </div>
    </div>
  );
}

export default Numerics;

const Numeric = ({ figure, text }) => (
  <div className="flex flex-col cursor-pointer mb-12 lg:mb-0 items-center">
    <h1 className="text-white hover:scale-[1.3] hover:mb-2 duration-500 font-sono font-semibold text-8xl">
      <CountUp end={figure} duration={2.75} />
    </h1>
    <p className="text-center font-sono text-xl text-gray-200">{text}</p>
  </div>
);
