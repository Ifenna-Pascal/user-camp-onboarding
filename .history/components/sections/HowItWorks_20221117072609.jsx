import React from "react";

function HowItWorks() {
  return <div className="grid grid-cols-2"></div>;
}

export default HowItWorks;

const StepProcess = ({ header, content }) => {
  return (
    <div className="block pr-6 border-l-4 border-black ">
      <h1 className="font-sono mb-4 text-gray-800 text-2xl block font-semibold">
        {header}
      </h1>
      <p className="font-block text-lg pr-4">{content}</p>
    </div>
  );
};
