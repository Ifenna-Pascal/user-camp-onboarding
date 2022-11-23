import React, { useState } from "react";
import Button from "../components/general/Button";
import Input, { SelectField } from "../components/general/Input";
import { addDocument } from "../db/method";

function Register() {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    location: "",
    branch: "",
    comment: "",
  });

  // const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault();
    addDocument(form)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  return (
    <div className="lg:max-w-[1000px] w-full mb-8 mt-8 lg:my-12 lg:mx-auto ">
      <h1 className="text-gray-800 text-2xl mb-6 font-semibold text-center font-sono block">
        Register Here...
      </h1>
      <form
        className="min-h-[400px] px-4  w-full lg:max-w-[700px] mx-auto"
        onSubmit={handleSubmit}
      >
        <Input label="First Name" onChange={handleChange} name="firstName" />
        <Input label="Last Name" onChange={handleChange} name="lastName" />
        <Input label="Email" onChange={handleChange} name="email" />
        <Input label="Location" onChange={handleChange} name="location" />
        <SelectField onChange={handleChange} name="branch" />
        <Input
          label="Add Comment"
          textArea={true}
          onChange={handleChange}
          name="comment"
        />
        <Button text={"Submit"} />
      </form>
    </div>
  );
}

export default Register;
