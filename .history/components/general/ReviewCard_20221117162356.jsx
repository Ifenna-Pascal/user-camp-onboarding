import React from "react";

function ReviewCard({ name, role }) {
  return (
    <div className="min-w-[300px] mx-4 min-h-[300px] flex shadow-lg">
      <div></div>
      <div className="flex flex-col py-6 px-5">
        <p className="py-4 font-poppins text-lg text-gray-800">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem
          laudantium perferendis voluptas ipsa ea corrupti iure nulla repellat
          soluta praesentium quae pariatur quaerat a eligendi, illo dicta!
          Veniam quas iusto ex laudantium error aut, quisquam beatae, doloribus,
          ipsa odit ducimus.
        </p>
        <div className="w-[60px] h-[60px] rounded-[50%] bg-black"></div>
        <h1 className="font-sono text-lg font-semibold">{name}</h1>
        <p className="text-base text-gray-600">{role}</p>
      </div>
    </div>
  );
}

export default ReviewCard;
