import React from "react";

function SideBySide() {
  return (
    <div className="grid grid-cols-2 ">
      <div className="col-span-1 w-full h-full"></div>
      <div className="p-4 bg-black relative"></div>
    </div>
  );
}

export default SideBySide;
