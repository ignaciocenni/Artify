"use client";

import { useEffect, useState } from "react";
import InputField from "../../components/inputs/InputField";
import { sendContactForm } from "../../components/lib/api";
import axios from "axios";
import Swal from "sweetalert2";


export default function ForgotenPassword() {
  useEffect(() => {
    async function fetchUsers() {
      try {
        const response = await axios.get("/api/users");
        setUsers(response.data);
      } catch (error) {
        // Manejar el error, si es necesario
      }
    }

    fetchUsers();
  }, []);

  const [users, setUsers] = useState();

  const [form, setForm] = useState({
    email: "",
    idUser: "",
  });

  const [userFound, setUserFound] = useState(false); // Estado para controlar si se encontró un usuario

  const [errors, setErrors] = useState({
    email: "",
  });

  const onSubmit = async (event) => {
    event.preventDefault();

    Swal.fire({
      position: 'center',
      icon: 'success',
      title: '¡Email enviado!  Verifique su correo.',
      showConfirmButton: false,
      timer: 2500
    })

    await sendContactForm({ ...form, type: "password" });
  };

  const handleChange = (event) => {
    event.preventDefault();
    const name = event.target.name;
    const value = event.target.value;
    setForm({ ...form, [name]: value });
  };

  if (users && !userFound) {
    // Agrega la condición para no buscar usuarios si ya se encontró uno
    const userWithEmail = users.find((user) => user.email === form.email);
    if (userWithEmail) {
      const userId = userWithEmail.id;

      console.log("ID del usuario:", userId);
      setUserFound(true); // Marcar que se encontró un usuario para evitar más búsquedas
      setForm({ ...form, idUser: userId }); // Actualiza el estado "form" con el valor del ID del usuario
    } else {
      console.log("El usuario con el email ingresado no existe.");
    }
  }

  return (
    <div className="text-center grid justify-center items-center mt-10">
      <form
        className="w-96 flex flex-col gap-5 items-center"
        onSubmit={onSubmit}
      >
        <h1 className="font-semibold text-3xl mb-5">Ingrese su email.</h1>
        <h3 className="font-semibold text-1xl mb-5">
          Se le enviará un email para verificar que el usuario le pertenece y
          cambiar su contraseña.
        </h3>

        <InputField
          id="email" // Corregir el ID a "email"
          type="text"
          placeholder="example@gmail.com"
          onChange={handleChange}
          name="email"
          value={form.email}
        />

        <button className="bg-[var(--detail)] hover:bg-[var(--background-sec)] hover:text-black text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-[250px]">
          Enviar email de recuperación.
        </button>
        <hr />
      </form>
    </div>
  );
}
