/* eslint-disable @next/next/no-img-element */
import React from "react";

function HeroRight() {
  return (
    <section class="overflow-hidden text-gray-700">
      <div class="px-5 py-2 mx-auto">
        <div class="flex flex-wrap -m-1 md:-m-2">
          <div class="flex flex-wrap w-1/2">
            <div class="w-1/2 p-1 md:p-2">
              <img
                alt="gallery"
                class="block object-cover object-center w-full h-full rounded-lg"
                src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(70).webp"
              />
            </div>
            <div class="w-1/2 p-1 md:p-2">
              <img
                alt="gallery"
                class="block object-cover object-center w-full h-full rounded-lg"
                src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(72).webp"
              />
            </div>
            <div class="w-full p-1 md:p-2">
              <img
                alt="gallery"
                class="block object-cover object-center w-full h-full rounded-lg"
                src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(73).webp"
              />
            </div>
          </div>
          <div class="flex flex-wrap w-1/2">
            <div class="w-full p-1 md:p-2">
              <img
                alt="gallery"
                class="block object-cover object-center w-full h-full rounded-lg"
                src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(74).webp"
              />
            </div>
            <div class="w-1/2 p-1 md:p-2">
              <img
                alt="gallery"
                class="block object-cover object-center w-full h-full rounded-lg"
                src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(75).webp"
              />
            </div>
            <div class="w-1/2 p-1 md:p-2">
              <img
                alt="gallery"
                class="block object-cover object-center w-full h-full rounded-lg"
                src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(77).webp"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
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
