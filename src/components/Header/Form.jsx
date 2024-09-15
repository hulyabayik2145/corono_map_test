import React from "react";
import { CiSearch } from "react-icons/ci";

const Form = ({ handleSubmit }) => {
  return (
    <form onSubmit={handleSubmit} className="flex items-center border  rounded">
      <input
        className="bg-transparent py-1 px-1 md:px-5 outline-none"
        type="text"
        placeholder="ülke ismine göre ara"
      />
      <button className="bg-green-500 text-xl p-1 md:p-2 w-full h-full rounded transition hover:bg-green-600">
        <CiSearch />
        <i></i>
      </button>
    </form>
  );
};

export default Form;
