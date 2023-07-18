"use client";

import { useEffect, useState } from "react";
import { signIn } from "next-auth/react";
import Link from "next/link";
import SignInButton from "../../components/buttons/SignInButton";

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

  const handleClick = async () => {
    const { email, password } = form;
    await signIn("credentials", { email, password });
  };

  const handleChange = (event) => {
    setErrors({ ...errors, [event.target.name]: "" });
    setCredentialError("");
    setForm({ ...form, [event.target.name]: event.target.value });
  };

  return (
    <div>
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
            {errors.email && <p className=" text-red-700">{errors.email}</p>}
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
            {errors.password && <p className=" text-red-700">{errors.password}</p>}
          </div>
          {credentialsError && <p className=" text-red-700">{credentialsError}</p>}
          <div className="flex items-center justify-center">
            <button
              className="bg-[var(--detail)] hover:bg-[var(--background-sec)] hover:text-black text-lg  text-white font-bold py-3 px-3 rounded-xl focus:outline-none focus:shadow-outline w-full"
              type="button"
              onClick={handleClick}
            >
              Continuar
            </button>
          </div>

          <a className="inline-block align-baseline font-bold text-sm text-slate-500  hover:text-[var(--background-sec)] mt-2" href="#">
            Olvido su contraseña?
          </a>
          <hr />
          <SignInButton />
          <Link href="/signin">
            <button
              className="bg-[var(--detail)] hover:bg-[var(--background-sec)] hover:text-black text-lg  text-white font-bold py-3 px-3 rounded-xl focus:outline-none focus:shadow-outline w-full"
              type="submit"
            >
              Cuenta Nueva
            </button>
          </Link>
        </form>

        <p className="text-center text-gray-500 text-xs mt-56">Apify. All rights reserved.</p>
      </div>
    </div>
  );
}
