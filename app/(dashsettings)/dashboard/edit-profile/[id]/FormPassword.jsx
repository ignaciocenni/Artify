import { useState } from "react";
import axios from "axios";
import SubmitButton from "../../../../../components/buttons/SubmitButton"
import Swal from "sweetalert2";
import { validate } from "./validate"


export default function FormPassword({ userPassword, userId }) {
  const oldPassword = userPassword
  const [errors, setErrors] = useState({
    actualPassword: "",
    newPassword: "",
    repPassword: ""
  })

  const [form, setPassword] = useState({
    actualPassword: "",
    newPassword: "",
    repPassword: ""

  })
  const valActualPass = (form) => {
    const { actualPassword } = form
    const error = {
      actualPassword: ""
    }
    if (actualPassword !== oldPassword)
      error.actualPassword = "La contraseña no coincide"
    return error
  }

  const handleChange = (event) => {
    const { name, value } = event.target
    setPassword({ ...form, [name]: value })
    setErrors(validate({ ...form, [name]: value }))
    setErrors(valActualPass({ ...form, [name]: value }))



  }
  const resp = {
    password: form.newPassword
  }


  const onSubmit = async (event) => {
    event.preventDefault();

    const putPassword = async (resp) => {
      try {
        const res = (await axios.put(`/api/users/${userId}`, resp)).data;
        return { created: true, res };
      } catch (error) {
        return { created: false, error: error.message };
      }
    };
    const resp = {
      password: form.newPassword
    }
    const response = await putPassword(resp);

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
    setPassword({
      actualPassword: "",
      newPassword: "",
      repPassword: ""

    })
  };
  /* const hasErrors = Object.values(errors).some((errMsg) => errMsg !== "") || Object.values(form).some((value) => value === ""); */

  return (
    <div >
      <h1
        className="font-semibold text-lg text mb-4">Cambiar contraseña</h1>
      <form className=" w-[37em]" onSubmit={onSubmit}>
        {oldPassword !== "thirdPartyAuth1" ? (
          <>
            <label htmlFor="Nombre">Contraseña actual</label>
            <input
              className="bg-[var(--primary)] flex font-bold text-xl shadow appearance-none rounded-xl w-full py-2 px-3 focus:outline-none focus:shadow-outline mb-3"
              id="password"
              type="password"
              onChange={handleChange}
              name="actualPassword"
              value={form.actualPassword}
            />
            {errors.actualPassword && (
              <p className="text-red-600 mb-2">{errors.actualPassword}</p>
            )}
          </>
        ) : null
        }

        <label htmlFor="Nombre">Nueva contraseña</label>
        <input
          className=" bg-[var(--primary)]  flex  font-bold text-xl shadow appearance-none  rounded-xl w-full py-2 px-3 focus:outline-none focus:shadow-outline mb-3"
          id="newpassword"
          type="Password"
          onChange={handleChange}
          name="newPassword"
          value={form.newPassword}
        />
        {errors.newPassword && (
          <p className="text-red-600 mb-2">{errors.newPassword}</p>
        )}
        <label htmlFor="Nombre">Confirma la nueva contraseña</label>
        <input
          className=" bg-[var(--primary)] mb-3  flex  font-bold text-xl shadow appearance-none  rounded-xl w-full py-2 px-3 focus:outline-none focus:shadow-outline"
          id="reppassword"
          type="password"
          placeholder=""
          onChange={handleChange}
          name="repPassword"
          value={form.repPassword}
        />
        {errors.repPassword && (
          <p className="text-red-600 mb-2">{errors.repPassword}</p>
        )}
        <div className="w-[37em]">
          <SubmitButton
            /* disabled={hasErrors} */
            label="Guardar"
          />
        </div>
      </form>
    </div>
  )
}
