import React from "react";
import Header from "../general/Header";

const Payment = () => (
  <p>
    Everyone is expected to pay a registration fee of <strong>#1,500</strong> to
    the account details seen after filling out the registration form.
  </p>
);

function Steps() {
  return (
    <div className="flex items-start my-6 mx-4 flex-col">
      <Header header="The Registration Procedure " />
      <StepProcess
        header="1.Fill out the registration form"
        content="Endeavour to put in all your details into the registration form, this would help us keep track of all our delegates far and wide"
      />
      <StepProcess header="2.Pay registration levy" content={<Payment />} />
      <StepProcess
        header="3.Send out proof of payment"
        content={`Send proof of payment to the specified whatsApp contact seen after fiiling the registration form. `}
      />{" "}
    </div>
  );
}

export default Steps;

const StepProcess = ({ header, content }) => {
  return (
    <div
      className={`
        border-l-[6px] block pl-6 
      mb-14 duration-500 border-gray-400 lg:pr-16`}
    >
      <h1
        className={`font-sono mb-3
          text-gray-500
        text-2xl block font-semibold`}
      >
        {header}
      </h1>
      <p
        className={`block text-lg font-poppins  leading-[30px] 
           text-gray-800
        `}
      >
        {content}
      </p>
    </div>
  );
};
