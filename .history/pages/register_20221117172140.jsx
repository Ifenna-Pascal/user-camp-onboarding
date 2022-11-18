import React from "react";

function Register() {
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div className="max-w-[900px] my-12 mx-auto ">
      <h1 className="text-gray-800 text-2xl font-semibold text-center font-sono block">
        Register Here...
      </h1>
      <form
        className="min-h-[400px] max-w-[500px] mx-auto shadow-md "
        onSubmit={handleSubmit}
      ></form>
    </div>
  );
}

export default Register;
