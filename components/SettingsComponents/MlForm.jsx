import { useState } from "react";
import axios from "axios";
import SubmitButton from "../../components/buttons/SubmitButton"
import Swal from "sweetalert2";

export default function FormML({ userId }) {
  const [form, setForm] = useState({
    cbu: "",
    alias: ""
  })
  const [error, setErrors] = useState({
    cbu: "",
    alias: ""
  })
  const validate = (form) => {
    const { cbu, alias } = form
    const error = {
      cbu: "",
      alias: ""
    }
    //cbu
    if (!cbu) {
      error.cbu = "Ingresa tu cbu"
    } else if (cbu.length < 21) {
      error.cbu = "Ingresa los 21 numeros de tu cbu "
    } else if (!/^[0-9]+$/.test(cbu))
      error.phone = "Ingresa solo numeros "
    return error
  }
  const handleChange = (event) => {
    const { name, value } = event.target
    setForm({ ...form, [name]: value })
    setErrors(validate({ [name]: value }))
  }

  const filteredData = Object.fromEntries(
    Object.entries(form).filter(([key, value]) => value !== '')
  );

  const onSubmit = async (event) => {
    event.preventDefault()
    const putPagos = async () => {
      try {
        const res = (await axios.put(`/api/users/${userId}`, filteredData)).data;
        return { created: true, res };
      } catch (error) {
        return { created: false, error: error.message };
      }
    };

    const response = await putPagos(filteredData);

    if (response.created) {
      Swal.fire({
        position: "center",
        icon: "success",
        title: "Se agrego tu información de Pago",
        subtitle: "Los cambios se reflajeran al volver a incicar sesión ",
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
    setForm({
      cbu: "",
      alias: ""
    })

  }
  const hasErrors = Object.values(error).some((errMsg) => errMsg !== "") || form.cbu === "" ;



  return (
    <>
      <div className="flex flex-col w-full gap-2">
        <h1 className="font-semibold text-lg ">Pagos</h1>
        <p className="text-xs font-light">Para Vender/Comprar una artesania, deberá ingresar su CBU/Alias!</p>
        <form className="flex flex-col items-center gap-5 w-full"
        onSubmit={onSubmit}>
          <input
            placeholder="CBU"
            className="text-black px-3 w-60 h-11 rounded-xl bg-[var(--primary)] focus:outline-none"
            type="text"
            onChange={handleChange}
            name="cbu"
            value={form.cbu}
            maxLength={21}
          />
          {error.cbu && (
            <p className="text-red-600 mb-2">{error.cbu}</p>
          )}
          <SubmitButton
            label="Guardar"
            disabled={hasErrors}
          />
          <input
            placeholder="Alias"
            className="text-black px-3 w-60 h-11 rounded-xl bg-[var(--primary)] focus:outline-none"
            type="text"
            onChange={handleChange}
            name="alias"
            value={form.alias}
          />
          {error.alias && (
            <p className="text-red-600 mb-2">{error.alias}</p>
          )}
          <SubmitButton
            label="Guardar"
            disabled={form.alias === ""}
          />
        </form>
      </div>
    </>
  );
}
