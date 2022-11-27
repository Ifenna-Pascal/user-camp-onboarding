import React from "react";

function Dashboard() {
  return (
    <div className="min-h-[80vh] flex  flex-col items-center justify-center">
      <h1 className="text-gray-800 text-center lg:text-left text-2xl lg:text-5xl font-semibold font-sono block ">
        Congratulations🎉
      </h1>
      <p className="block text-base  lg:text-lg text-center font-poppins text-gray-800 leading-[30px] py-2 lg:py-4">
        Registration Successfully Done
      </p>
      <div>
        <h1 className="text-gray-800 text-center py-4 lg:text-left text-2xl lg:text-5xl font-semibold font-sono block ">
          Next Steps{" "}
        </h1>
        <p className="block text-base  lg:text-lg text-center font-poppins text-gray-800 leading-[30px] py-2 lg:py-4">
          Send Registration Fee of <strong>1000</strong> to the account details
        </p>
      </div>
    </div>
  );
}

export default Dashboard;
