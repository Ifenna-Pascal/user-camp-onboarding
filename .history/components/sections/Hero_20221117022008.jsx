import React from "react";
import HeroRight from "../general/HeroRight";

function Hero() {
  return (
    <div className="max-h-[80vh]  grid grid-cols-2">
      <div className="w-full h-full px-8"></div>
      <div className="p-4 h-full w-full">
        <HeroRight />
      </div>
    </div>
  );
}

export default Hero;
