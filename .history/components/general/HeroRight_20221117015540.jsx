import React from "react";

function HeroRight() {
  return (
    <div className="grid grid-cols-3 gap-4 grid-row-5">
      <div className="row-start-1 row-end-3">
        <ImageBox color="bg-red-400" />
      </div>
      <div className="grid grid-cols-5 row-span-5">
        <div className="row-start-1 row-span-2">
          <ImageBox color="text-green-400" />
        </div>
        <div className="row-start-2 row-span-2">
          <ImageBox color="text-green-400" />
        </div>
        <div className="row-start-1 row-end-2">
          <ImageBox color="text-green-400" />
        </div>
      </div>
    </div>
  );
}

export default HeroRight;

const ImageBox = ({ color }) => {
  return <div className={`w-full h-full bg-red  ${color}`}></div>;
};
