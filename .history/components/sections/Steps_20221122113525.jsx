import React from "react";

function Steps() {
  return <div>Steps</div>;
}

export default Steps;

const StepProcess = ({ header, content, current, active }) => {
  return (
    <div
      className={`
        border-l-[6px] block pl-6 
      mb-14 duration-500 border-gray-800 lg:pr-16`}
    >
      <h1
        className={`font-sono mb-3 ${
          text - gray - 500
        } text-2xl block font-semibold`}
      >
        {header}
      </h1>
      <p
        className={`block text-lg font-poppins  leading-[30px] ${
          isActive ? "text-gray-500" : "text-gray-800"
        } `}
      >
        {content}
      </p>
    </div>
  );
};
