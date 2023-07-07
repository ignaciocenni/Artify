"use client";

import { useState } from "react";
import { validate } from "../login/validate";
import Link from "next/link";
import axios from "axios";
import NavBarSecundary from "@/components/NavBarSecundary";

const postUser = async (form) => {
  try {
    const response = await axios.post("http://localhost:3000/api/users", form);
    console.log(response.data);
  } catch (error) {
    console.log(error.message);
  }
};
export default function page() {
  const [form, setForm] = useState({
    email: "",
    password: "",
    name: "",
    rol: "USER",
  });

  const [errors, setErrors] = useState({
    email: "",
    password: "",
  });

  const handleClick = () => {
    event.preventDefault();
    postUser(form);
    console.log("creado con exito");
  };

  const handleChange = (event) => {
    setForm({ ...form, [event.target.name]: event.target.value });
  };

  return (
    
    <div>
      <NavBarSecundary/>
      <div className=" text-center grid justify-center items-center mt-10">
        <form className="w-96 flex flex-col gap-5">
          <h1 className="font-semibold text-3xl mb-5">Crear cuenta</h1>
          <div className="mb-4">
            <input
              className="appearance-none border border-black bg-[var(--primary)] rounded-xl w-full py-3 px-3 text-xl text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="username"
              type="text"
              placeholder="Correo electrónico"
              onChange={handleChange}
              name="email"
              value={form.email}
            />
          </div>
          <div className="mb-4">
            <input
              className="appearance-none border border-black bg-[var(--primary)] rounded-xl w-full py-3 px-3 text-xl text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="username"
              type="text"
              placeholder="Nombre y Apellido"
              onChange={handleChange}
              name="name"
              value={form.name}
            />
          </div>
          <div className="mb-6">
            <input
              className="appearance-none border border-black bg-[var(--primary)] rounded-xl w-full py-3 px-3 text-xl text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="password"
              type="password"
              onChange={handleChange}
              name="password"
              value={form.password}
              placeholder="Contraseña"
            />
            {/* <p className="text-xs italic">Please choose a password.</p> */}
          </div>
          <div className="flex items-center justify-center">
            <button
              className="bg-[var(--detail)] hover:bg-[var(--background-sec)] hover:text-black text-lg  text-white font-bold py-3 px-3 rounded-xl focus:outline-none focus:shadow-outline w-full"
              onClick={handleClick}>
              Continuar
            </button>
          </div>
        </form>
      </div>
      <p className="mt-56 text-center text-gray-500 text-xs">
        Apify. All rights reserved.
      </p>
    </div>
  );
}
