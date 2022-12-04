import React from "react";

function Input({ type = "text", placeholder, label, name, textArea, ...rest }) {
  return (
    <div className="mb-4">
      <label className="text-lg  font-sono" htmlFor={label}>
        {label}
      </label>
      {textArea ? (
        <textarea
          className="border  text-gray-700 mt-1 focus:border-AP-blue-100  rounded-[12px] focus:outline-none w-full text-[16px] font-montserat px-4 py-4 h-full placeholder:font-sansPro"
          name={name}
          {...rest}
        ></textarea>
      ) : (
        <input
          type={type}
          name={name}
          placeholder={placeholder}
          className="border  text-gray-700 mt-2 focus:border-AP-blue-100  rounded-[12px] focus:outline-none w-full text-[16px] font-montserat px-4 py-4 h-full placeholder:font-sansPro"
          required
          {...rest}
        />
      )}
    </div>
  );
}

export default Input;

export const SelectField = ({ ...rest }) => {
  return (
    <div className="mb-4">
      <label htmlFor="branch" className="text-lg  font-sono">
        Select Branch
      </label>
      <select
        name="branch"
        id=""
        className="border  text-gray-700 mt-2 focus:border-AP-blue-100  rounded-[12px] focus:outline-none w-full text-[16px] font-montserat px-4 py-4 h-full placeholder:font-sansPro"
        {...rest}
      >
        {/* <option value=""></option> */}
        <option value="lagos">Lagos</option>
        <option value="enugu">Enugu</option>
        <option value="nsukka">Nsukka</option>
        <option value="umuahia">Umuahia</option>
        <option value="unn">UNN Campus</option>
      </select>
    </div>
  );
};
