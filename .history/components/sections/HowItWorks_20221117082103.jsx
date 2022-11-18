import React from "react";
import Carousel from "../general/Carousel";

function HowItWorks() {
  return (
    <div className="grid py-20 grid-cols-2">
      <div className="flex flex-col">
        <StepProcess
          header="Morning Worship"
          content={` Lorem ipsum, dolor sit amet consectetur adipisicing elit. Commodi quidem veritatis quia. Qui iure dolore vitae maiores nulla?`}
        />
        <StepProcess
          header="Content Word"
          content={` Lorem ipsum, dolor sit amet consectetur adipisicing elit. Commodi quidem veritatis quia. Qui iure dolore vitae maiores nulla?`}
        />
        <StepProcess
          header="Games & Fun"
          content={` Lorem ipsum, dolor sit amet consectetur adipisicing elit. Commodi quidem veritatis quia. Qui iure dolore vitae maiores nulla?`}
        />
      </div>
      <div className="bg-red-400 ">
        <div className="w-full p-4 h-full">
          <Carousel />
        </div>
      </div>
    </div>
  );
}

export default HowItWorks;

const StepProcess = ({ header, content }) => {
  return (
    <div className="block pl-6 border-l-[6px] mb-14 border-black pr-16 ">
      <h1 className="font-sono mb-3 text-gray-800 text-2xl block font-semibold">
        {header}
      </h1>
      <p className="block text-lg font-poppins  leading-[30px] ">{content}</p>
    </div>
  );
};
