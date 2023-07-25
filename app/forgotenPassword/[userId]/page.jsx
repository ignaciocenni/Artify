"use client";

import { useState } from "react";
import InputField from "../../../components/inputs/InputField";

const putPassword = async (profilePassword) => {
  try {
    const response = (await axios.put(`/api/users/`, profilePassword)).data;
    return;
  } catch (error) {
    return { created: false, error: error.message };
  }
};

export default function ForgotenPassword() {
  const [form, setForm] = useState({
    email: "",
  });

  const [errors, setErrors] = useState({
    email: "",
  });

  const onSubmit = async (event) => {
    event.preventDefault();
  };

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setForm({ ...form, [name]: value });
  };

  return (
    <div className=" text-center grid justify-center items-center mt-10">
      <form className="w-96 flex flex-col gap-5 items-center" onSubmit={onSubmit}>
        <h1 className="font-semibold text-3xl mb-5">Ingrese su email.</h1>
        <InputField id="username" type="text" placeholder="example@gmail.com" onChange={handleChange} value={form.email} />

        <button className="bg-[var(--detail)] hover:bg-[var(--background-sec)] hover:text-black text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-[250px] ">
          Enviar email de recuperacion.
        </button>
        <hr />
      </form>
    </div>
  );
}
