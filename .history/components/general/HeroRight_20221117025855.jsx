/* eslint-disable @next/next/no-img-element */
import React from "react";

function HeroRight() {
  return (
    <div class="container   px-4 py-8 mx-auto items-center ">
      <div class="grid grid-cols-4 grid-rows-4 grid-flow-col gap-2">
        <div class="w-full row-span-2">
          <img
            src="https://images.unsplash.com/photo-1432457990754-c8b5f21448de?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80"
            alt="Photo by Claudio Schwarz on Unsplash"
            class="inset-0 h-full w-full object-cover object-center rounded opacity-75 hover:opacity-100"
          />
        </div>
        <div class="w-full col-span-2 row-span-2">
          <img
            src="https://images.unsplash.com/photo-1586921829167-409624a3734a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
            alt="Photo by Claudio Schwarz on Unsplash"
            class="inset-0 h-full w-full object-cover object-center rounded opacity-75 hover:opacity-100"
          />
        </div>
        <div class="w-full ">
          <img
            src="https://images.unsplash.com/photo-1489981424607-45c58daf0581?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
            alt="Photo by Claudio Schwarz on Unsplash"
            class="inset-0 h-full w-full object-cover object-center rounded opacity-75 hover:opacity-100"
          />
        </div>
        <div class="w-full">
          <img
            src="https://images.unsplash.com/photo-1489981424607-45c58daf0581?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
            alt="Photo by Claudio Schwarz on Unsplash"
            class="inset-0 h-full w-full object-cover object-center rounded opacity-75 hover:opacity-100"
          />
        </div>
        <div class="w-full col-span-2 row-span-2">
          <img
            src="https://images.unsplash.com/photo-1586921829167-409624a3734a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
            alt="Photo by Claudio Schwarz on Unsplash"
            class="inset-0 h-full w-full object-cover object-center rounded opacity-75 hover:opacity-100"
          />
        </div>

        <div class="w-full col-span-2">
          <img
            src="https://images.unsplash.com/photo-1534531173927-aeb928d54385?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
            alt="Photo by Claudio Schwarz on Unsplash"
            class="inset-0 h-full w-full object-cover object-center rounded opacity-75 hover:opacity-100"
          />
        </div>
        <div class="w-full">
          <img
            src="https://images.unsplash.com/photo-1489981424607-45c58daf0581?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
            alt="Photo by Claudio Schwarz on Unsplash"
            class="inset-0 h-full w-full object-cover object-center rounded opacity-75 hover:opacity-100"
          />
        </div>
        <div class="w-full">
          <img
            src="https://images.unsplash.com/photo-1489981424607-45c58daf0581?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
            alt="Photo by Claudio Schwarz on Unsplash"
            class="inset-0 h-full w-full object-cover object-center rounded opacity-75 hover:opacity-100"
          />
        </div>
      </div>
    </div>
  );
}

export default HeroRight;

const ImageBox = ({ color }) => {
  return (
    // <div className={`w-full h-full bg-red rounded-lg ${color}`}>
    //   <div>
    <img
      src="https://images.unsplash.com/photo-1539183204366-63a0589187ab?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fGNhbXBpbmd8ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60"
      alt="image"
      className="rounded-lg"
    />
    //   </div>
    // </div>
  );
};
