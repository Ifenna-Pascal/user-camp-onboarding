import Link from "next/link";
import React from "react";
import Button from "../general/Button";
import HeroRight from "../general/HeroRight";

function Hero() {
  return (
    <div
      id="home"
      className="lg:h-[90vh] min-h-screen   grid grid-cols-1 lg:grid-cols-2"
    >
      <div className="w-full flex  lg:-mt-8 lg:items-start items-center flex-col justify-center h-full">
        <h1 className="text-3xl lg:text-6xl text-gray-800 text-center lg:text-left leading-[50px] lg:leading-[75px] font-semibold font-sono">
          Raising Agents Of Transformation
        </h1>

        <p className="text-lg lg:max-w-[600px] text-gray-700 py-2 text-center lg:text-left leading-[30px] lg:leading-[30px] font-poppins px-4 lg:px-0 lg:pr-[50px]">
          In the last days, says the Lord, I will pour out my spirit upon all
          flesh, and your <b>sons and daughters</b> shall prophesy, your old men
          shall dream dreams, shall see visions. <strong>Joel 2:28</strong>
        </p>
        <div className="mt-4">
          <Link href={"/register"}>
            {" "}
            <Button text={"Join Us"} />
          </Link>
        </div>
      </div>
      <div className="lg:p-4 w-[97%]   h-full mx-auto lg:w-full">
        {" "}
        <HeroRight />{" "}
      </div>
    </div>
  );
}

export default Hero;
