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
    lastName: "",
    provinceId: 1
  });

  const [errors, setErrors] = useState({
    email: "",
    password: "",
    name: "",
    lastName: "",
  });
  
  const router = useRouter();

  const onSubmit = async (event) => {
    event.preventDefault();
    if (Object.entries(form).length) {
      await postUser(form)
      router.push("/login")
      await sendContactForm({ ...form, type: "welcome" });
    } else {
      setErrors(validate({ ...errors }))
    }

  };

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setForm({ ...form, [name]: value });
    setErrors(validate({ ...form, [name]: value }));
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
          errors={errors.email} 
            />

        <InputField
          id="username"
          type="text"
          placeholder="Nombre"
          onChange={handleChange}
          name="name"
          value={form.name}
          errors={errors.name} />

        <InputField
          id="lastName"
          type="text"
          placeholder="Apellido"
          onChange={handleChange}
          name="lastName"
          value={form.lastName}
          errors={errors.lastName} />

        <InputField
          id="password"
          type="password"
          onChange={handleChange}
          name="password"
          value={form.password}
          placeholder="Contraseña"
          errors={errors.password} />
        <SubmitButton disabled={Object.values(errors).some((error) => error)} />
        <hr />
      </form>
    </div>
  );
}
