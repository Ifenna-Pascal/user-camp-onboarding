import React, { useState } from "react";
import Carousel from "../general/Carousel";
import Header from "../general/Header";

function HowItWorks() {
  const [current, setCurrent] = useState(0);
  return (
    <div className="my-8" id="#/process">
      <Header
        header="It's All About Variety"
        content=" Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio in rerum ex aliquid recusandae quaerat tempora eligendi voluptas nam labore! Vitae maxime omnis qui quasi dicta sunt quidem reiciendis animi."
      />
      <div className="grid p-6 grid-cols-2">
        <div className="flex items-center justify-center flex-col">
          <StepProcess
            current={current}
            active={0}
            header="Morning Worship"
            content={` Lorem ipsum, dolor sit amet consectetur adipisicing elit. Commodi quidem veritatis quia. Qui iure dolore vitae maiores nulla?`}
          />
          <StepProcess
            current={current}
            active={1}
            header="Content Word"
            content={` Lorem ipsum, dolor sit amet consectetur adipisicing elit. Commodi quidem veritatis quia. Qui iure dolore vitae maiores nulla?`}
          />
          <StepProcess
            current={current}
            active={2}
            header="Games & Fun"
            content={` Lorem ipsum, dolor sit amet consectetur adipisicing elit. Commodi quidem veritatis quia. Qui iure dolore vitae maiores nulla?`}
          />
        </div>
        <div className="w-full px-4 h-full">
          <Carousel current={current} setCurrent={setCurrent} />
        </div>
      </div>
    </div>
  );
}

export default HowItWorks;

const StepProcess = ({ header, content, current, active }) => {
  const isActive = current === active;
  return (
    <div
      className={`block pl-6 ${
        isActive ? "border-l-[6px]" : ""
      } mb-14 duration-500 border-gray-800 pr-16`}
    >
      <h1
        className={`font-sono mb-3 ${
          isActive ? "text-gray-500" : "text-gray-800"
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
