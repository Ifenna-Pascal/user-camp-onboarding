/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import React from "react";

function ReviewCard({ name, role }) {
  return (
    <div className="min-w-[300px] mx-4 min-h-[300px] flex shadow-md">
      <div></div>
      <div className="flex flex-col py-6 px-5">
        <p className="py-4 font-poppins text-lg text-gray-600">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem
          laudantium perferendis voluptas ipsa ea corrupti iure nulla repellat
          soluta praesentium quae pariatur quaerat a eligendi, illo dicta!
          Veniam quas iusto ex laudantium error aut, quisquam beatae, doloribus,
          ipsa odit ducimus.
        </p>
        <div className="w-[60px] mt-3 h-[60px]">
          <img
            className="w-full rounded-[50%] h-full"
            src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8bWVufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60"
          />
        </div>
        <h1 className="font-sono pt-2 text-lg font-semibold">{name}</h1>
        <p className="text-base font-sono text-gray-600">{role}</p>
      </div>
    </div>
  );
}

export default ReviewCard;
