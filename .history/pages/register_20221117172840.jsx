import React from "react";
import Input from "../components/general/Input";

function Register() {
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div className="max-w-[1000px] my-12 mx-auto ">
      <h1 className="text-gray-800 text-2xl mb-6 font-semibold text-center font-sono block">
        Register Here...
      </h1>
      <form
        className="min-h-[400px] max-w-[700px] mx-auto"
        onSubmit={handleSubmit}
      >
        <Input label="First Name" />
        <Input label="Last Name" />
        <Input label="Email" />
      </form>
    </div>
  );
}

export default Register;