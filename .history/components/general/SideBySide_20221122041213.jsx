/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import React from "react";

function SideBySide() {
  return (
    <div className="grid grid-cols-2 ">
      <div className="col-span-1 w-full h-full"></div>
      <div className="p-4 w-[300px] h-[300px] bg-black relative">
        <div className="absolute  -top-3 -left-3">
          <img className="w-full h-full object-cover" src="/assets/flyer.jpg" />
        </div>
      </div>
    </div>
  );
}

export default SideBySide;
