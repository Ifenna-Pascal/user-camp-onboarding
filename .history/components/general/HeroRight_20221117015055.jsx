import React from "react";

function HeroRight() {
  return (
    <div className="grid grid-cols-3 gap-4 grid-row-5">
      <div className="row-start-1 row-end-2">
        <ImageBox color="bg-red-400" />
      </div>
    </div>
  );
}

export default HeroRight;

const ImageBox = ({ color }) => {
  return <div className={`w-full h-full bg-red  ${color}`}></div>;
};
