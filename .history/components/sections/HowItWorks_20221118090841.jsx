import React, { useState } from "react";
import Carousel from "../general/Carousel";
import Header from "../general/Header";

function HowItWorks() {
  const [current, setCurrent] = useState(0);
  return (
    <div className="mb-8" id="process">
      <Header
        header="It's All About Variety"
        content=" Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio in rerum ex aliquid recusandae quaerat tempora eligendi voluptas nam labore! Vitae maxime omnis qui quasi dicta sunt quidem reiciendis animi."
      />
      <div className="grid p-6 grid-cols-1 lg:grid-cols-2">
        <div className="lg:flex hidden items-center  justify-center flex-col">
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
        <ConditionalDisplay current={current} />
        <div className="w-full px-2 lg:px-4 h-full">
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
      className={`pl-6 ${
        isActive ? "border-l-[6px] block" : ""
      } mb-14 duration-500 border-gray-800 lg:pr-16`}
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

const ConditionalDisplay = ({ current }) => {
  return (
    <>
      {
            current === 0 ? (
              <div className="flex lg:hidden items-center  justify-center flex-col">
                <StepProcess
                  current={current}
                  active={0}
                  header="Morning Worship"
                  content={` Lorem ipsum, dolor sit amet consectetur adipisicing elit. Commodi quidem veritatis quia. Qui iure dolore vitae maiores nulla?`}
                />{" "}
              </div>
            ) : current === 1 ? (
              <div className="flex lg:hidden items-center  justify-center flex-col">
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
              </div>
            ) : (
              <div className="flex lg:hidden items-center  justify-center flex-col">
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
            );
          
      }
    </>
)};
