import React from "react";
import HeroRight from "../general/HeroRight";

function Hero() {
  return (
    <div className="h-[80vh]   grid grid-cols-2">
      <div className="w-full flex items-center justify-start  h-full">
        <h1 className="text-5xl leading-[70px] font-bold font-sono">
          A Time To Enconter<br></br> His Presence
        </h1>
      </div>
      <div className="p-4 h-full w-full">
        <HeroRight />
      </div>
    </div>
  );
}

export default Hero;
