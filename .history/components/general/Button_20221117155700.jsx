import React from "react";

function Button({ text }) {
  return (
    <button className="bg-gray-800 px-12 py-3 hover:bg-white hover:text-black hover:border hover:border-black duration-500 hover:ease-in-out text-white font-sono text-xl ">
      {text}
    </button>
  );
}

export default Button;
