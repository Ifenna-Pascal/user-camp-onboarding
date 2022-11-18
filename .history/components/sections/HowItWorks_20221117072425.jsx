import React from "react";

function HowItWorks() {
  return <div></div>;
}

export default HowItWorks;

const StepProcess = ({ header, content }) => {
  return (
    <div className="block">
      <h1 className="font-sono mb-4 text-black text-2xl block font-semibold">
        {header}
      </h1>
      <p className="font-block text-lg pr-4">{content}</p>
    </div>
  );
};
