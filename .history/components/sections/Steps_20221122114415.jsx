import React from "react";
import Header from "../general/Header";

function Steps() {
  return (
    <div className="flex items-start my-6 mx-4 flex-col">
      <Header
        header="The Registration Procedure "
        // content="At the camp no moment is left out, every moment an encounter, every timing an experience "
      />
      <StepProcess
        header="1. Fill out the registration Form"
        content={`Every morning 6am - 7am, a sound of worship is raised unto God, an atmosphere where our God is lifted high and His glory fills the our midst `}
      />
      <StepProcess
        header="2. Morning Worship"
        content={`Every morning 6am - 7am, a sound of worship is raised unto God, an atmosphere where our God is lifted high and His glory fills the our midst `}
      />
      <StepProcess
        header="3. Morning Worship"
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
      mb-14 duration-500 border-gray-400 lg:pr-16`}
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
