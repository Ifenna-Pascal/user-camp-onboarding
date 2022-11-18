import React from "react";

function Register() {
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div className="max-w-[900px] mx-auto ">
      <h1 className="text-gray-800 text-2xl font-semibold text-center font-sono block">
        Register Here...
      </h1>
      <form onSubmit={handleSubmit}></form>
    </div>
  );
}

export default Register;
