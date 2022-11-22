/* eslint-disable @next/next/no-img-element */
import React from "react";

function HeroRight() {
  return (
    <div className="grid grid-cols-3 lg:px-8 px-4 mt-8 lg:my-0 pr-0  max-h-[700px] w-full gap-2 grid-rows-6">
      <div class="w-full row-start-1 row-span-3">
        <img
          src="/assets/camp13.jpg"
          alt="Photo by Claudio Schwarz on Unsplash"
          class="inset-0 h-full w-full object-cover object-center  rounded-lg  "
        />
      </div>
      <div class="w-full row-start-4  col-span-1 col-start-1 row-end-6">
        <img
          src="/assets/camp5.jpg"
          alt="Photo by Claudio Schwarz on Unsplash"
          class="inset-0 h-full w-full object-cover object-center  rounded-lg  "
        />
      </div>
      {/* <div className="grid  gap-y-4 h-full w-full h-full row-span-5  col-span-1"> */}
      <div className="row-start-1  w-full row-span-1 col-start-2 col-span-1">
        {/* <ImageBox color="bg-red-400" /> */}
        <img
          src="/assets/camp6.jpg"
          alt="Photo by Claudio Schwarz on Unsplash"
          class="inset-0 h-full w-full object-cover object-center  rounded-lg  "
        />
      </div>
      <div className="row-start-2 row-span-3  w-full col-start-2 col-span-1">
        <img
          src="/assets/camping20.jpg"
          alt="Photo by Claudio Schwarz on Unsplash"
          class="inset-0 h-full w-full object-cover object-center  rounded-lg  "
        />
      </div>
      <div className="row-start-5  w-full  row-span-1 col-start-2 col-span-1">
        <img
          src="/assets/camp3.jpg"
          alt="Photo by Claudio Schwarz on Unsplash"
          class="inset-0 h-full w-full object-cover object-center  rounded-lg  "
        />
      </div>

      <div className="col-start-3  row-span-2">
        <img
          src={"/assets/camp11.jpg"}
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
