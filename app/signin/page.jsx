"use client";
import { useState } from "react";
import { validate } from "./validate";
import { useRouter } from "next/navigation";
import { sendContactForm } from "../../components/lib/api";
import SubmitButton from "../../components/buttons/SubmitButton";
import InputField from "../../components/inputs/InputField";
import postUser from "../../components/utils/postUser";

export default function SignInPage() {
  const [form, setForm] = useState({
    email: "",
    password: "",
    name: "",
    rol: "USER",
    type:"welcome"
  });

  const [errors, setErrors] = useState({
    email: "",
    password: "",
  });
  const router = useRouter();
  const onSubmit = async (event) => {
    event.preventDefault();
    const user = await postUser(form).then(() => (user ? router.push("/login") : ""));
    await sendContactForm(form);
    
  };

  const handleChange = (event) => {
    setForm({ ...form, [event.target.name]: event.target.value });
    setErrors(validate(form));
  };

  return (
    <div className=" text-center grid justify-center items-center mt-10">
      <form className="w-96 flex flex-col gap-5" onSubmit={onSubmit}>
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
        <InputField id="username" type="text" placeholder="Nombre y Apellido" onChange={handleChange} name="name" value={form.name} />
        <InputField id="password" type="password" onChange={handleChange} name="password" value={form.password} placeholder="Contraseña" />
        <SubmitButton disabled={Object.values(errors).some((error) => error)} />
        <hr />
      </form>
    </div>
  );
}
