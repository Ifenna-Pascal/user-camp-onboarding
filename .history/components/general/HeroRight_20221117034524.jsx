/* eslint-disable @next/next/no-img-element */
import React from "react";

function HeroRight() {
  return (
    <div className="grid grid-cols-3 max-h-[600px]   w-full gap-4 grid-row-5">
      <div class="w-full h-[500px] row-span-2">
        <img
          src="https://images.unsplash.com/photo-1537905569824-f89f14cceb68?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8Y2FtcGluZ3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60"
          alt="Photo by Claudio Schwarz on Unsplash"
          class="inset-0 h-full w-full object-cover object-center  rounded-lg  "
        />
      </div>
      {/* <div className="grid  gap-y-4 h-full w-full h-full row-span-5  col-span-1"> */}
      <div className="row-start-1  w-full row-span-1 col-start-2 col-span-1">
        {/* <ImageBox color="bg-red-400" /> */}
        <img
          src="https://images.unsplash.com/photo-1576176539998-0237d1ac6a85?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGNhbXBpbmd8ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60"
          alt="Photo by Claudio Schwarz on Unsplash"
          class="inset-0 h-full w-full object-cover object-center  rounded-lg  "
        />
      </div>
      <div className="row-start-2 row-span-2  w-full col-start-2 col-span-1">
        <img
          src="https://images.unsplash.com/photo-1432457990754-c8b5f21448de?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80"
          alt="Photo by Claudio Schwarz on Unsplash"
          class="inset-0 h-full w-full object-cover object-center  rounded-lg  "
        />
      </div>

      <div className="col-start-3  row-span-2">
        <img
          src={
            "https://images.unsplash.com/photo-1539183204366-63a0589187ab?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fGNhbXBpbmd8ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60"
          }
          alt="Photo by Claudio Schwarz on Unsplash"
          class="inset-0 h-full w-full object-cover object-center bg-center  rounded-lg  "
        />
      </div>
    </div>
  );
}

export default HeroRight;

const ImageBox = ({ color }) => {
  return (
    <div className={`w-full h-full bg-red  rounded-lg-lg ${color}`}>
      <img
        src="https://images.unsplash.com/photo-1539183204366-63a0589187ab?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fGNhbXBpbmd8ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60"
        alt="image"
        className=" rounded-lg-lg"
      />
    </div>
  );
};
