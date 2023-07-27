import { useState } from "react";
import axios from "axios";
import SubmitButton from "../../../../../components/buttons/SubmitButton"
import Swal from "sweetalert2";

export default function FormSocials() {

 /*  https://wa.me/1XXXXXXXXXX */

    const handleChange=()=>{

    }
    const onSubmit = ()=>{

    }
  return (
    <div id="socials">
        <h1 className="font-semibold text-lg mb-4">Redes Sociales</h1>
        <form className=" w-[37em]" onSubmit={onSubmit}>
          <label htmlFor="Nombre">WhatsApp</label>
          <input
            className=" bg-[var(--primary)]  flex mb-3 font-bold text-xl shadow appearance-none  rounded-xl w-full py-2 px-3 focus:outline-none focus:shadow-outline"
            id="pagina web"
            type="url"
            placeholder=""
            onChange={handleChange}
            name="socials"
          />
          
        <div className="w-[37em]">
          <SubmitButton
            label="Guardar" />
        </div>
        </form>
    </div>
  )
}
