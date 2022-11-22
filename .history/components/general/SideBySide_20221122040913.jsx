import React from "react";

function SideBySide() {
  return (
    <div className="grid grid-cols-2 ">
      <div className="col-span-1 w-full h-full"></div>
      <div className="p-4 bg-black relative">
        <div className="absolute  -top-3 -left-3">
          <img className="w-full h-full object-cover" />
        </div>
      </div>
    </div>
  );
}

export default SideBySide;
