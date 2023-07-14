"use client";

import { useState } from "react";
import { validate } from "./validate";
import { sendContactForm } from "../../components/lib/api"
import axios from "axios";
import SignInButton from "../../components/buttons/SignInButton";
import { useSession } from "next-auth/react";
//traer el session 

const postUser = async (form) => {
  try {
    const response = await axios.post("/api/users", form);
  } catch (error) {
    return error;
  }
};
  export default function SignInPage() {
    const [form, setForm] = useState({
      email: "",
      password: "",
      name: "",
      rol: "USER",
    });
    console.log(form);

    const [errors, setErrors] = useState({
      email: "",
      password: "",
    });

    const onSubmit = async (event) => {
      event.preventDefault();
      postUser(form)
      await sendContactForm(form)


    };

    const handleChange = (event) => {
      setForm({ ...form, [event.target.name]: event.target.value });
      setErrors(validate(form))
    };

    return (
      <div>
        <div className=" text-center grid justify-center items-center mt-10">
          <form className="w-96 flex flex-col gap-5" on onSubmit={onSubmit}>
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
              <p>{errors.email}</p>
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
            <div className="mb-5">
              <input
                className="appearance-none border border-black bg-[var(--primary)] rounded-xl w-full py-3 px-3 text-xl text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="password"
                type="password"
                onChange={handleChange}
                name="password"
                value={form.password}
                placeholder="Contraseña"
              />

            </div>
            <div className=" mb-3 w-
            " >

              <button
                className="bg-[var(--detail)] hover:bg-[var(--background-sec)] hover:text-black text-lg  text-white font-bold py-3 px-3 rounded-xl focus:outline-none focus:shadow-outline w-full" disabled={Object.values(errors).some((error) => error)}>
                Cuenta Nueva
              </button>

            </div>
            <hr className=" text-black bg-black" />
            <SignInButton 
            setForm={setForm}
            
            />
          </form>
        </div>
        <p className="mt-56 text-center text-gray-500 text-xs">Apify. All rights reserved.</p>
      </div>
    );
  }
