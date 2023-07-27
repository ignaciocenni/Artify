import { useState } from "react";
import axios from "axios";
import SubmitButton from "../../../../../components/buttons/SubmitButton"
import Swal from "sweetalert2";

export default function FormSocials({ userId }) {
  const [num, setNum] = useState({
    phone: ""
  })
  const [error, setErrors] = useState({
    phone: ""
  })
  const validate = (num) => {
    const { phone } = num
    const error = {
      phone: ""
    }

    if (!phone) {
      error.phone = "Ingresa un numero telefonico"
    } else if (phone.length < 10) {
      error.phone = "Ingresa los diez numero de tu telefono "
    } else if (!/^[0-9]+$/.test(phone))
      error.phone = "Ingresa solo numeros "
    return error
  }
  const handleChange = (event) => {
    const { name, value } = event.target
    setNum({ [name]: value })
    setErrors(validate({ [name]: value }))
  }

  const onSubmit = async (event) => {
    event.preventDefault()
    const putSocials = async (socials) => {
      try {
        const res = (await axios.put(`/api/users/${userId}`, socials)).data;
        return { created: true, res };
      } catch (error) {
        return { created: false, error: error.message };
      }
    };
    const socials = {
      socials: ["https://wa.me/549" + num.phone]
    }
    const response = await putSocials(socials);

    if (response.created) {
      Swal.fire({
        position: "center",
        icon: "success",
        title: "Se agrego tu WhatsApp",
        showConfirmButton: true,
      });
    } else {
      Swal.fire({
        position: "center",
        icon: "error",
        title: "Algo salió mal",
        text:"Los cambios se reflejaran cuando vuelvas a iniciar sesion ",
        showConfirmButton: true,
      });
    }
    setNum({
      phone: ""
    })

  }
  const hasErrors = Object.values(error).some((errMsg) => errMsg !== "") || num.phone === "";
  return (
    <div id="socials">
      <h1 className="font-semibold text-lg mb-4">Redes Sociales</h1>
      <form className=" w-[37em]" onSubmit={onSubmit}>
        <label htmlFor="Nombre">WhatsApp</label>
        <div className="flex  ">
          <div
            className="  text-gray-400 bg-[var(--primary)]  flex mb-3  text-xl shadow appearance-none  rounded-l-xl w-[4em] pl-3 py-2  focus:outline-none focus:shadow-outline">+549
          </div>
          <input
            className=" bg-[var(--primary)]  flex mb-3  text-xl shadow appearance-none  rounded-r-xl w-full py-2 px-3 focus:outline-none focus:shadow-outline"
            id="pagina web"
            type="text"
            placeholder={"XXXXXXXXXX"}
            onChange={handleChange}
            name="phone"
            value={num.phone}
            maxLength={10}
          />

        </div>
        {error.phone && (
          <p className="text-red-600 mb-2">{error.phone}</p>
        )}

        <div className="w-[37em]">
          <SubmitButton
            label="Guardar"
            disabled={hasErrors} />
        </div>
      </form>
    </div>
  )
}
