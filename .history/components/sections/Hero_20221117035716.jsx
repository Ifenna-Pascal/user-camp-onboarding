import React from "react";
import HeroRight from "../general/HeroRight";

function Hero() {
  return (
    <div className="h-[80vh]   grid grid-cols-2">
      <div className="w-full flex items-start  flex-col justify-center  h-full">
        <h1 className="text-5xl leading-[70px] font-[500] font-sono">
          A Time To Enconter<br></br> His Presence
        </h1>

        <p className="text-lg leading-[45px] pr-[30px]">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae sed quo
          nesciunt vero quae voluptatibus impedit veritatis expedita cupiditate
          rem?
        </p>
      </div>
      <div className="p-4 h-full w-full">
        <HeroRight />
      </div>
    </div>
  );
}

export default Hero;
