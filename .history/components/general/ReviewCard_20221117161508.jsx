import React from "react";

function ReviewCard() {
  return (
    <div className="min-w-[300px] min-h-[300px] flex shadow-xl">
      <div></div>
      <div className="flex py-6 px-5">
        <p className="py-4 font-poppins text-lg text-gray-800">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem
          laudantium perferendis voluptas ipsa ea corrupti iure nulla repellat
          soluta praesentium quae pariatur quaerat a eligendi, illo dicta!
          Veniam quas iusto ex laudantium error aut, quisquam beatae, doloribus,
          ipsa odit ducimus.
        </p>
        <div className="w-[60px] h-[60px] rounded-[50%]"></div>
      </div>
    </div>
  );
}

export default ReviewCard;
