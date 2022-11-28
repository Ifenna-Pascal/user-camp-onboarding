import React, { useState } from "react";
import Carousel from "../general/Carousel";
import Header from "../general/Header";

function HowItWorks() {
  const [current, setCurrent] = useState(0);
  return (
    <div className="mb-8" id="process">
      <Header
        header="It's All About Variety"
        content="At the camp no moment is left out, every moment an encounter, every timing an experience "
      />
      <div className="grid p-6 grid-cols-1 lg:grid-cols-2">
        {/* <div className="lg:flex hidden items-center  justify-center flex-col">
          <StepProcess
            current={current}
            active={0}
            header="Morning Worship"
            content={`Every morning 6am - 7am, a sound of worship is raised unto God, an atmosphere where our God is lifted high and His glory fills the our midst `}
          />
          <StepProcess
            current={current}
            active={1}
            header="Seminars & Confrences"
            content={`A variety of seminars centered at improving our relationship with God, down to career exploits, academic excellence and lot's more exists at every section. Every timing has it's special offers  `}
          />
          <StepProcess
            current={current}
            active={2}
            header="Games & Fun"
            content={`Games and fun events is never left out, games ranging from in-door to out-door games is established `}
          />
        </div> */}
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
      className={`${
        isActive ? "border-l-[6px] block pl-6 " : "pl-3"
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
      {current === 0 ? (
        <div className="flex lg:hidden items-center  justify-center flex-col">
          <StepProcess
            current={current}
            active={0}
            header="Morning Worship"
            content={`Every morning 6am - 7am, a sound of worship is raised unto God, an atmosphere where our God is lifted high and His glory fills the our midst `}
          />{" "}
        </div>
      ) : current === 1 ? (
        <div className="flex lg:hidden items-center  justify-center flex-col">
          <StepProcess
            current={current}
            active={0}
            header="Seminars & Confrences"
            content={`A variety of seminars centered at improving our relationship with God, down to career exploits, academic excellence and lot's more exists at every section. Every timing has it's special offers  `}
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
            content={`Every morning 6am - 7am, a sound of worship is raised unto God, an atmosphere where our God is lifted high and His glory fills the our midst `}
          />
          <StepProcess
            current={current}
            active={1}
            header="Seminars & Confrences"
            content={`A variety of seminars centered at improving our relationship with God, down to career exploits, academic excellence and lot's more exists at every section. Every timing has it's special offers  `}
          />
          <StepProcess
            current={current}
            active={2}
            header="Games & Fun"
            content={`Games and fun events is never left out, games ranging from in-door to out-door games is established `}
          />
        </div>
      )}
    </>
  );
};
