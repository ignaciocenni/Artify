import { useState } from "react";
import axios from "axios";
import SubmitButton from "../../../../../components/buttons/SubmitButton"
import Swal from "sweetalert2";


export default function FormPassword({ userPassword,userId }) {
  const actualPassword = userPassword
  const [errors, setErrors] = useState({})
  const validate = ({ actualPassword, password, newPassword }) => {
    const errors = {
      actualPassword: "",
      newPassword: "",
    };
    if (actualPassword !== password)
      errors.actualPassword = "Tu contraseña actual no coincide";

    if (!newPassword)
      errors.newPassword = "Debes ingresar una nueva contraseña";

    return errors;
  };

  const [password, setPassword] = useState({
    password: "",
    newPassword: "",

  })

  const handleChange = (event) => {
    const { name, value } = event.target
    setPassword({ [name]: value })
    setErrors(validate({ ...password, [name]: value, password, actualPassword }))

  }


  const onSubmit = async (event) => {
    event.preventDefault();

    const validationErrors = validate(password);
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length > 0) {
      return;
    }
    try {

      const res = await axios.put(`/api/users/${userId}`,password.newPassword);

      Swal.fire({
        icon: "success",
        title: "Contraseña cambiada",
        text: "Tu contraseña ha sido cambiada exitosamente.",
      });
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Error al cambiar la contraseña",
        text: "Hubo un problema al cambiar tu contraseña. Por favor, inténtalo nuevamente.",
      });
    }
  };

  return (
    <div>
      <h1 className="font-semibold text-lg text mb-4">Cambiar contraseña</h1>
      <form className=" w-[37em]" onSubmit={onSubmit}>
        <label htmlFor="Nombre">Contraseña actual</label>
        <input
          className="  bg-[var(--primary)]  flex  font-bold text-xl shadow appearance-none  rounded-xl w-full py-2 px-3 focus:outline-none focus:shadow-outline mb-3"
          id="password"
          type="password"
          placeholder=""
          onChange={handleChange}
        />
           {errors.actualPassword && (
          <p className="text-red-600 mb-2">{errors.actualPassword}</p>
        )}

        <label htmlFor="Nombre">Nueva contraseña</label>
        <input
          className=" bg-[var(--primary)]  flex  font-bold text-xl shadow appearance-none  rounded-xl w-full py-2 px-3 focus:outline-none focus:shadow-outline mb-3"
          id="newpassword"
          type="Password"
          onChange={handleChange}
          name="newPassword"
          value={password.password}
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

        />
      </form>
      <div className="w-[37em]">
        <SubmitButton
          label="Guardar" />
      </div>
    </div>
  )
}
