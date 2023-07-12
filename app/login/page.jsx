"use client";

import { useState } from "react";
import { validate } from "./validate";
import Link from "next/link";
import NavBarSecundary from "@/components/NavBarSecundary";
import { UserAuth } from "../context/AuthContext";
import Image from "next/image";
import logoGoogle from "../../public/images/google-logo.png";

export default function LoginPage() {
  const { user, googleSignIn} = UserAuth();

  const handlerSignIn = async () => {
    try {
      await googleSignIn();
    } catch (error) {
      console.log(error);
    }
  };

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
    <div>
      <NavBarSecundary />
      <div className=" text-center grid justify-center items-center mt-10">
        <form className="w-96 flex flex-col gap-5">
          <h1 className="font-semibold text-3xl mb-5">Iniciar Sesión</h1>
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
              type="submit"
              onClick={handleClick}>
              Continuar
            </button>
          </div>

          {/* <a
            className="inline-block align-baseline font-bold text-sm text-slate-500  hover:text-[var(--background-sec)] mt-2"
            href="#">
            Olvido su contraseña?
          </a> */}

          <h1 className="flex items-center justify-center gap-5 text-lg py-3 px-3 rounded-xl focus:outline-none focus:shadow-outline w-full">
            o ingrese con
          </h1>

          <div className="flex items-center justify-center">
            <button
              className="border border-black gap-5 flex justify-center items-center hover:bg-[var(--background-sec)] text-lg font-bold py-3 px-3 rounded-xl focus:outline-none focus:shadow-outline w-full"
              type="submit"
              onClick={handleClick}>
              <Image
                src={logoGoogle}
                width={20}
                height={20}
                alt="GoogleLogo"
                className="absoulte top-10 bottom-10"
              />
              Continuar con Google
            </button>
          </div>
        </form>

        <p className="text-center text-gray-500 text-xs mt-56">
          Apify. All rights reserved.
        </p>
      </div>
    </div>
  );
}
