import { useState } from "react";
import axios from "axios";
import SubmitButton from "../../../../../components/buttons/SubmitButton"
import Swal from "sweetalert2";
import {validate} from "./validate"


export default function FormPassword({ userPassword, userId }) {
  const oldPassword = userPassword
  const [errors, setErrors] = useState({
    actualPassword: "",
    newPassword: "",
    repPassword: ""
  })

  const [password, setPassword] = useState({
    actualPassword: "",
    newPassword: "",
    repPassword: ""

  })

  const handleChange = (event) => {
    const { name, value } = event.target
    setPassword({ ...password, [name]: value })
     setErrors(validate({ ...password, [name]: value })) 

  }


  const onSubmit = async (event) => {
    event.preventDefault();
    
    const putPassword = async (password) => {
      try {
          const res = (await axios.put(`/api/users/${userId}`, password)).data;
          return { created: true, res };
      } catch (error) {
          return { created: false, error: error.message };
      }
  };
  const {password} =password.newPassword
  const response = await putPassword(password);

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

  return (
    <div>
      <h1 className="font-semibold text-lg text mb-4">Cambiar contraseña</h1>
      <form className=" w-[37em]" onSubmit={onSubmit}>
        { oldPassword !== "thirdPartyAuth1" ? (
            <>
              <label htmlFor="Nombre">Contraseña actual</label>
              <input
                className="bg-[var(--primary)] flex font-bold text-xl shadow appearance-none rounded-xl w-full py-2 px-3 focus:outline-none focus:shadow-outline mb-3"
                id="password"
                type="password"
                onChange={handleChange}
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
          value={password.newPassword}
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
          value={password.repPassword}
        />
        {errors.repPassword && (
          <p className="text-red-600 mb-2">{errors.repPassword}</p>
          )}
      </form>
      <div className="w-[37em]">
        <SubmitButton
          label="Guardar" 
          />
      </div>
    </div>
  )
}
