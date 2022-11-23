import React from "react";

function Dashboard() {
  return (
    <div className="min-h-[80vh] flex items-center justify-center">
      <h1 className="text-gray-800 text-center lg:text-left text-2xl lg:text-5xl font-semibold font-sono block ">
        Congratulations 🎉
      </h1>
      <p className="block text-base  lg:text-lg text-center font-poppins text-gray-800 leading-[30px] py-2 lg:py-4">
        {content}
      </p>
    </div>
  );
}

export default Dashboard;
