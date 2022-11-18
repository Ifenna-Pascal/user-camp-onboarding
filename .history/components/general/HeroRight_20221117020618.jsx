import React from "react";

function HeroRight() {
  return (
    <div className="grid grid-cols-3  w-full h-full gap-4 grid-row-5">
      <div className="row-start-1 row-end-3">
        <ImageBox color="bg-red-400" />
      </div>
      <div className="grid grid-cols-5 gap-y-4 w-full h-full row-span-5 col-span-1">
        <div className="row-start-1 w-full row-span-1">
          <ImageBox color="bg-red-400" />
        </div>
        <div className="row-start-2 w-full row-span-2">
          <ImageBox color="bg-green-400" />
        </div>
        <div className="row-start-4 w-full row-span-1">
          <ImageBox color="bg-purple-400" />
        </div>
      </div>
      <div className="grid grid-cols-5 gap-y-4 w-full h-full row-span-5">
        <div className="row-start-1 row-span-2">
          <ImageBox color="bg-blue-400" />
        </div>
        <div className="row-start-3 row-span-1">
          <ImageBox color="bg-green-400" />
        </div>
        <div className="row-start-4 row-span-1">
          <ImageBox color="bg-green-400" />
        </div>
      </div>
    </div>
  );
}

export default HeroRight;

const ImageBox = ({ color }) => {
  return <div className={`w-full h-full bg-red  ${color}`}></div>;
};
