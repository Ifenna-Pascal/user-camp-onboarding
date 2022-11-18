import Link from "next/link";
import React from "react";
import Button from "../general/Button";
import HeroRight from "../general/HeroRight";

function Hero() {
  return (
    <div
      id="home"
      className="lg:h-[80vh] min-h-screen   grid grid-cols-1 lg:grid-cols-2"
    >
      <div className="w-full flex  lg:-mt-8 lg:items-start items-center flex-col justify-center h-full">
        <h1 className="text-3xl lg:text-6xl text-gray-800 text-center lg:text-left leading-[50px] lg:leading-[75px] font-semibold font-sono">
          Raising Agents Of Transformation
        </h1>

        <p className="text-lg lg:max-w-[600px] text-gray-700 py-3 text-center lg:text-left leading-[30px] lg:leading-[40px] font-poppins px-4 lg:px-0 lg:pr-[50px]">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae sed quo
          lkore2002 Lorem ipsum, dolor. Lorem ipsum dolor, sit amet consectetur
          adipisicing elit. Deserunt, ad.
        </p>
        <div className="mt-4">
          <Link href={"/register"}>
            {" "}
            <Button text={"Join Us"} />
          </Link>
        </div>
      </div>
      <div className="p-4 h-full w-full">
        {" "}
        <HeroRight />{" "}
      </div>
    </div>
  );
}

export default Hero;
