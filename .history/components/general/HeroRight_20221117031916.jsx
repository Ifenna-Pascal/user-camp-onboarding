/* eslint-disable @next/next/no-img-element */
import React from "react";

function HeroRight() {
  return (
    <div className="grid grid-cols-3  h-full w-full gap-6 grid-row-5">
      <div className="row-start-1 row-span-2">
        <ImageBox color="bg-red-400" />
      </div>
      {/* <div className="grid  gap-y-4 h-full w-full h-full row-span-5  col-span-1"> */}
      <div className="row-start-1  h-full w-full row-span-1 col-start-2 col-span-1">
        <ImageBox color="bg-red-400" />
      </div>
      <div className="row-start-2 row-span-2 h-full w-full col-start-2 col-span-1">
        <ImageBox color="bg-green-400" />
      </div>
      <div className="row-start-4 col-start-2 col-span-1 h-full w-full row-span-1">
        <ImageBox color="bg-purple-400" />
      </div>
      {/* </div> */}
      {/* <div className="grid  gap-y-4 h-full w-full h-full row-span-5"> */}
      <div className="row-start-1 col-start-3  row-span-3">
        <ImageBox color="bg-blue-400" />
      </div>
      <div className="row-start-4 col-start-3 col-span-1 row-span-1">
        <ImageBox color="bg-green-400" />
      </div>
      {/* <div className="row-start-4 row-span-1">
          <ImageBox color="bg-green-400" />
        </div> */}
      {/* </div> */}
    </div>
  );
}

export default HeroRight;

const ImageBox = ({ color }) => {
  return (
    <div className={`w-full h-full bg-red rounded-lg ${color}`}>
      {/* <img
        src="https://images.unsplash.com/photo-1539183204366-63a0589187ab?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fGNhbXBpbmd8ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60"
        alt="image"
        className="rounded-lg"
      /> */}
    </div>
  );
};
