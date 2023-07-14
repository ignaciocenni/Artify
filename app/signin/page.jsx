"use client";
import { useState } from "react";
import { validate } from "./validate";
import { sendContactForm } from "../../components/lib/api";
import SignInButton from "../../components/buttons/SignInButton";
import SubmitButton from "../../components/buttons/SubmitButton";
import InputField from "../../components/inputs/InputField";
import postUser from "../../components/utils/postUser";

export default function SignInPage() {

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

  const onSubmit = async (event) => {
    event.preventDefault();
    postUser(form);
    await sendContactForm(form);
  };

  const handleChange = (event) => {
    setForm({ ...form, [event.target.name]: event.target.value });
    setErrors(validate(form));
  };

  return (
    <div className=" text-center grid justify-center items-center mt-10">
      <form className="w-96 flex flex-col gap-5" on onSubmit={onSubmit}>
        <h1 className="font-semibold text-3xl mb-5">Crear cuenta</h1>
        <InputField
          id="username"
          type="text"
          placeholder="Correo electrónico"
          onChange={handleChange}
          name="email"
          value={form.email}
          error={errors.email}
        />
        <InputField
          id="username"
          type="text"
          placeholder="Nombre y Apellido"
          onChange={handleChange}
          name="name"
          value={form.name}
        />
        <InputField
          id="password"
          type="password"
          onChange={handleChange}
          name="password"
          value={form.password}
          placeholder="Contraseña"
        />
        <SubmitButton disabled={Object.values(errors).some((error) => error)} />
        <hr />
        <SignInButton  />
      </form>
    </div>
  );
}
