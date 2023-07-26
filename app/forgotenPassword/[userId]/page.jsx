"use client";

import { useState, useEffect } from "react";
import InputField from "../../../components/inputs/InputField";
import axios from "axios";
import { usePathname } from "next/navigation";
import Swal from "sweetalert2";

export default function ChangePassword() {
  const pathName = usePathname();
  const parts = pathName.split("/"); // Divide la cadena por cada "/"
  const lastPart = parts[parts.length - 1]; // Obtiene el último elemento del arreglo

  console.log(lastPart); // Imprime lo que hay después del último "/"

  const utPassword = async (userPassword) => {
    const res = (await axios.put(`/api/users/${userId.id}`, userPassword)).data;
    return { created: true, res };
  };

  const [userPassword, setUsePassword] = useState({
    password: "",
    passwordCheck: "",
  });

  const [userId, setUserId] = useState({
    id: "",
  });

  const onSubmit = async (event) => {
    event.preventDefault();
    const response = await putPassword(userPassword);
    if (response.created) {
      Swal.fire({
        position: "center",
        icon: "success",
        title: "Perfil Editado",
        showConfirmButton: true,
      });
    } else {
      Swal.fire({
        position: "center",
        icon: "error",
        title: "Algo salió mal",
        showConfirmButton: true,
      });
    }
  };

  const handleChange = (event) => {
    event.preventDefault();
    const name = event.target.name;
    const value = event.target.value;
    setUsePassword({ ...userPassword, [name]: value });
    setUserId({ ...userId, id: lastPart });
  };

  return (
    <div className="h-screen w-full text-center flex justify-center items-center bg-[var(--background)]">
      <form
        className="w-96 flex flex-col gap-5 items-center"
        onSubmit={onSubmit}
      >
        <h1 className="font-semibold text-3xl mb-5">Cambia tu contraseña.</h1>

        {/* <h3 className="font-semibold text-1xl mb-5">
          Se le enviará un email para verificar que el usuario le pertenece y
          cambiar su contraseña.
        </h3> */}

        <InputField
          id="password" // Corregir el ID a "email"
          type="password"
          placeholder="Contraseña nueva"
          onChange={handleChange}
          name="password"
          value={userPassword.password}
        />

        <InputField
          id="passwordCheck" // Corregir el ID a "email"
          type="password"
          placeholder="Reescribe la contraseña nueva"
          onChange={handleChange}
          name="passwordCheck"
          value={userPassword.passwordCheck}
        />

        {/* Check if both passwords match before enabling the button */}
        {userPassword.password === userPassword.passwordCheck &&
          userPassword.password !== "" && (
            <button className="bg-[var(--detail)] hover:bg-[var(--background-sec)] hover:text-black text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-[250px]">
              Cambiar contraseña.
            </button>
          )}

        <hr />
      </form>
    </div>
  );
}
