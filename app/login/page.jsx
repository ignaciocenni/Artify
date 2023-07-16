"use client";

import { use, useState } from "react";
import { signIn } from "next-auth/react";
import { validate } from "./validate";
import { useRouter } from "next/navigation";
import Link from "next/link";
import NavBarSecundary from "../../components/NavBarSecundary";
import SignInButton from "../../components/buttons/SignInButton";

export default function LoginPage() {
  const router = useRouter();
  const [form, setForm] = useState({
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState({
    email: "",
    password: "",
  });

  const handleClick = async (e) => {
    e.preventDefault();
    const { email, password } = form;
    await signIn("credentials", { email, password });
    if (localStorage) {
      const path = JSON.parse(localStorage.getItem("path"));
      router.push(`${path}`);
    }
  };

  const handleChange = (event) => {
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
