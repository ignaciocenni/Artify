"use client";

import { useState } from "react";
import { validate } from "./validate";
import Link from "next/link";

export default function LoginPage() {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState({
    email: "",
    password: "",
  });

  const handleClick = () => {
    alert("login");
  };
  const handleCreateCount = () => {
    alert("redirecciona a sign in");
  };
  const handleChange = (event) => {
    setForm({ ...form, [event.target.name]: event.target.value });
  };

  return (
    <div className=" text-center h-[100vh] grid justify-center items-center">
      <form className="">
        <h1 className="font-semibold text-3x1">Hola de nuevo!</h1>
        <br />
        <div className="mb-4">
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="username"
            type="text"
            placeholder="Correo electrónico"
            onChange={handleChange}
            name="email"
            value={form.email}
          />
        </div>
        <div className="mb-6">
          <input
            className="shadow appearance-none border w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline border-ra rounded-md"
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
            className="bg-[var(--detail)] hover:bg-[var(--background-sec)] hover:text-black text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-[250px]"
            type="submit"
            onClick={handleClick}
          >
            Continuar
          </button>
        </div>

        <a
          className="inline-block align-baseline font-bold text-sm text-slate-500  hover:text-[var(--background-sec)] mt-2"
          href="#"
        >
          Forgot Password?
        </a>

        <div className=" mt-5 flex items-center justify-center">
          <Link href="/singin">
            <button
              className="bg-[var(--detail)] hover:bg-[var(--background-sec)] hover:text-black text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-[250px]"
              type="submit"
              onClick={handleCreateCount}
            >
              Cuenta Nueva
            </button>
          </Link>
        </div>
      </form>

      <p className="text-center text-gray-500 text-xs">Apify. All rights reserved.</p>
    </div>
  );
}
