"use client";

import { useEffect, useState } from "react";
import { signIn } from "next-auth/react";
import Link from "next/link";
import SignInButton from "../../components/buttons/SignInButton";
import InputField from "../../components/inputs/InputField";
import { validate } from "../signin/validate";

export default function LoginPage({ searchParams }) {

  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const [credentialsError, setCredentialError] = useState("");

  const [errors, setErrors] = useState({
    email: "",
    password: "",
  });
  useEffect(() => {
    if (searchParams) {
      const { error } = searchParams;
      const errorName = error?.split(" ")[1];

      if (errorName === "password!") {
        setCredentialError("Contraseña incorrecta");
      }
      if (errorName === "email!") {
        setCredentialError("Email incorrecto");
      }
    }
  }, [searchParams]);

  const onSubmit = async () => {
    const { email, password } = form;
    await signIn("credentials", { email, password });
  };

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setForm({ ...form, [name]: value });
    setErrors(validate({ ...form, [name]: value }));;
    setCredentialError("");
  };

  return (
    <div>
      <div className=" text-center grid justify-center items-center mt-10">
        <form className="w-96 flex flex-col gap-5" onSubmit={onSubmit}>
          <h1 className="font-semibold text-3xl mb-5">Iniciar Sesión</h1>
          <div className="mb-4">
            <InputField 
            id="username"
            type="text"
            placeholder="Correo electrónico"
            onChange={handleChange}
            name="email"
            value={form.email}
            errors={errors.email}
            />           
          </div>
          
          <div className="mb-6">
          <InputField 
            id="password"
            type="password"
            placeholder="Contraseña"
            onChange={handleChange}
            name="password"
            value={form.password}
            errors={errors.password}
            />           
          </div>
          {credentialsError && <p className=" text-red-700">{credentialsError}</p>}
          <div className="flex items-center justify-center">
            <button
              className="bg-[var(--detail)] hover:bg-[var(--background-sec)] hover:text-black text-lg  text-white font-bold py-3 px-3 rounded-xl focus:outline-none focus:shadow-outline w-full"
            >
              Continuar
            </button>
          </div>

          <a className="inline-block align-baseline font-bold text-sm text-slate-500  hover:text-[var(--background-sec)] mt-2" href="#">Olvido su contraseña?
          </a>
          <hr />
          <SignInButton />
          <Link href="/signin">
            <button
              className="bg-[var(--detail)] hover:bg-[var(--background-sec)] hover:text-black text-lg  text-white font-bold py-3 px-3 rounded-xl focus:outline-none focus:shadow-outline w-full"              
            >Cuenta Nueva
            </button>
          </Link>
        </form>

        <p className="text-center text-gray-500 text-xs mt-56">Apify. All rights reserved.</p>
      </div>
    </div>
  );
}
