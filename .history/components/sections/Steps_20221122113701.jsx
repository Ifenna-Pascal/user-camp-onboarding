import React from "react";

function Steps() {
  return (
    <div className="flex items-start flex-col">
      <StepProcess
        header="Morning Worship"
        content={`Every morning 6am - 7am, a sound of worship is raised unto God, an atmosphere where our God is lifted high and His glory fills the our midst `}
      />
      <StepProcess
        header="Morning Worship"
        content={`Every morning 6am - 7am, a sound of worship is raised unto God, an atmosphere where our God is lifted high and His glory fills the our midst `}
      />{" "}
    </div>
  );
}

export default Steps;

const StepProcess = ({ header, content }) => {
  return (
    <div
      className={`
        border-l-[6px] block pl-6 
      mb-14 duration-500 border-gray-800 lg:pr-16`}
    >
      <h1
        className={`font-sono mb-3
          text-gray-500
        text-2xl block font-semibold`}
      >
        {header}
      </h1>
      <p
        className={`block text-lg font-poppins  leading-[30px] 
           text-gray-800
        `}
      >
        {content}
      </p>
    </div>
  );
};
