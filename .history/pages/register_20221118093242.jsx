import React from "react";
import Button from "../components/general/Button";
import Input from "../components/general/Input";

function Register() {
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div className="lg:max-w-[1000px] w-full mb-8 lg:my-12 lg:mx-auto ">
      <h1 className="text-gray-800 text-2xl mb-6 font-semibold text-center font-sono block">
        Register Here...
      </h1>
      <form
        className="min-h-[400px] px-4  w-full lg:max-w-[700px] mx-auto"
        onSubmit={handleSubmit}
      >
        <Input label="First Name" />
        <Input label="Last Name" />
        <Input label="Email" />
        <Input label="Location" />
        <Input label="Select Branch" />
        <Input label="Add Comment" textArea={true} />
        <Button text={"Submit"} />
      </form>
    </div>
  );
}

export default Register;
