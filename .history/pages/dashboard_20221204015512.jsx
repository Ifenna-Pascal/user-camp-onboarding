import React from "react";

function Dashboard() {
  return (
    <div className="min-h-[80vh] flex  flex-col items-center ">
      <div>
        <h1 className="text-gray-800 text-center pt-4 lg:text-left text-2xl lg:text-5xl font-semibold font-sono block ">
          Next Steps{" "}
        </h1>
        <p className="block text-base  lg:text-lg text-left px-4 font-poppins text-gray-800 leading-[30px] py-2 lg:py-4">
          1. Send Registration Fee of <strong>#1500</strong> to the account
          details
        </p>
        <div className="px-4">
          <p className="block text-base  lg:text-lg text-left pb-3 font-poppins text-gray-800 leading-[30px]">
            <b>Account Name:</b> UCHENNA SHEDRACK NICK
          </p>
          <p className="block text-base  lg:text-lg text-left pb-3 font-poppins text-gray-800 leading-[30px]">
            <b>Account Number:</b> 2284580225
          </p>
          <p className="block text-base  lg:text-lg text-left pb-3 font-poppins text-gray-800 leading-[30px]">
            <b>Bank Name:</b> UBA Bank
          </p>
        </div>
        <p className="block text-base  lg:text-lg text-left px-4 font-poppins text-gray-800 leading-[30px] py-2 lg:py-4">
          2. Send a screen shot of payment proof along side name to this
          whatsApp line{" "}
          <strong className="text-green-600">
            <a
              target={"_blank"}
              without
              rel="noreferrer"
              href="https://wa.me/09067869544"
            >
              09067869544
            </a>
          </strong>
        </p>
      </div>
      <h1 className="text-gray-800 pt-4 text-center lg:text-left text-2xl lg:text-5xl font-semibold font-sono block ">
        Congratulations🎉
      </h1>
      <p className="block text-base  lg:text-lg text-center font-poppins text-gray-800 leading-[30px] py-2 lg:py-4">
        Registration Successfully Done
      </p>
    </div>
  );
}

export default Dashboard;
