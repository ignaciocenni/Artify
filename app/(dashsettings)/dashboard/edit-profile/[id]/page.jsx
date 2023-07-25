"use client";
import { useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import UploadButton from "../../../../../components/buttons/UploadButton";
import axios from "axios";
import Swal from "sweetalert2";
import Image from "next/image";
import FormML from "../../../../../components/SettingsComponents/MlForm";
import SubmitButton from "../../../../../components/buttons/SubmitButton";

/* const getUser = async (id) => {
  const { data } = await axios.get(`/api/users/${id}`);

  return data;
}; */
const putProfile = async (form) => {
  /*  try { */
  const res = (await axios.put(`/api/users/${form.userId}`, form)).data; pero
  return { created: true, res };
  /*   } catch (error) {
      return { created: false, error: error.message };
    } */
};


export default function EditProfile({ params }) {
  const { id } = params
  const data = useSession();

  const [userData, setUserData] = useState({
    name: "",
    email: "",
    password: "",
    lastName: "",
    image: "",
    aboutMe: "",
    wallet: "",
    cbu: "",
    alias: "",
    socials: "",
    status: "",
    rol: ""
  });

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    lastName: "",
    image: "",
    aboutMe: "",
    social: [
      {
        web: "",
        instagram: "",
        facebook: ""
      }
    ]




  });

  const [errors, setErrors] = useState({});

  useEffect(() => {
    const prueba = async () => {
      const result = (await axios.get(`/api/users/${id}`)).data;
      setUserData({
        name: result.name,
        email: result.email,
        password: "",
        lastName: result.lastName,
        image: "",
        aboutMe: result.aboutMe,
        wallet: "",
        cbu: "",
        alias: "",
        socials: result.socials,
        status: "",
        rol: "",

      });
    }
    prueba()
    setForm({
      ...form,
      userId: data?.data?.user.id,
    })
  }, [data?.data?.user]);

  const onSubmit = async (event) => {

    const response = await putProfile(form);
    console.log(form);
    console.log("Respuesta del form: " + response);
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
    const { name, value } = event.target;

    let parsedValue = value;

    if (name === "wallet") {
      parsedValue = parseFloat(value);
    } else if (name === "cbu") {
      parsedValue = parseInt(value, 10);
    } else if (name.startsWith("socials_")) {
      const index = parseInt(name.split("_")[1], 10);
      const updatedSocials = [...form.socials];
      updatedSocials[index] = parsedValue;
      setErrors({ ...errors, socials: null });
      setForm({ ...form, socials: updatedSocials });
      return;
    }
    setForm({ ...form, [name]: parsedValue });
  };

  const isFormValid = Object.values(form).some((value) => value === "");

  return (
    <section className="w-full grid h-max justify-center ">
      <div className=" pl-5 text-left  w-[37em] ">

        <h1 className=" h-23 font-semibold text-xl py-5 " >Editar Perfil</h1>
        <div className=" w-[37em] mb-3 flex justify-center items-center">
          <Image
            className=" rounded-full shadow-sm"
            src={data?.data?.user?.image}
            width={100}
            height={100}
            alt="imagen de usuario"
          />
        </div>

        <form className=" w-[37em]" onSubmit={onSubmit}>
          <label htmlFor="Nombre">Nombre</label>
          <input
            className=" bg-[var(--primary)] flex text-xl shadow appearance-none  rounded-xl w-full py-2 px-3 focus:outline-none focus:shadow-outline mb-3"
            id="price"
            type="text"
            placeholder={userData.name}
            onChange={handleChange}
            name="name"
            value={form.name}
          />
          <label htmlFor="Nombre">Apellidos</label>
          <input
            className=" bg-[var(--primary)] flex text-xl shadow appearance-none  rounded-xl w-full py-2 px-3 focus:outline-none focus:shadow-outline mb-3"
            id="price"
            type="text"
            placeholder={userData.lastName}
            onChange={handleChange}
            name="lastName"
            value={form.lastName}
          />
          <label htmlFor="Nombre">Acerca de mi</label>
          <textarea
            className=" bg-[var(--primary)]  shadow appearance-none border rounded w-full h-[10em] py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline resize-none mb-3"
            id="description"
            type="text"
            onChange={handleChange}
            name="aboutMe"
            value={form.aboutMe}
            placeholder={userData.aboutMe}
          />
          <div className="w-[37em]">
            <SubmitButton
              label="Guardar" />
          </div>
        </form>
        <br />
        <hr />
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
          <label htmlFor="Nombre">Nueva contraseña</label>
          <input
            className=" bg-[var(--primary)]  flex  font-bold text-xl shadow appearance-none  rounded-xl w-full py-2 px-3 focus:outline-none focus:shadow-outline mb-3"
            id="newpassword"
            type="password"
            placeholder=""
            onChange={handleChange}
            name="password"
            value={form.password}
          />
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
        <br />
        <hr />
        <h1 className="font-semibold text-lg mb-4">Redes Sociales</h1>
        <form className=" w-[37em]" onSubmit={onSubmit}>
          <label htmlFor="Nombre">Página web</label>
          <input
            className=" bg-[var(--primary)]  flex mb-3 font-bold text-xl shadow appearance-none  rounded-xl w-full py-2 px-3 focus:outline-none focus:shadow-outline"
            id="pagina web"
            type="url"
            placeholder=""
            onChange={handleChange}
            name="socials"

          />
          <label htmlFor="Nombre">Instagram</label>
          <input
            className=" bg-[var(--primary)] mb-3 flex  font-bold text-xl shadow appearance-none  rounded-xl w-full py-2 px-3 focus:outline-none focus:shadow-outline"
            id="instagram"
            type="url"
            placeholder=""
            onChange={handleChange}
            name="socials"

          />
          <label htmlFor="Nombre">Facebook</label>
          <input
            className=" bg-[var(--primary)] mb-3  flex  font-bold shadow appearance-none  rounded-xl w-full py-2 px-3 focus:outline-none focus:shadow-outline"
            id="facebook"
            type="url"
            placeholder=""
            onChange={handleChange}
            name="socials"

          />
        </form>
        <div className="w-[37em]">
          <SubmitButton
            label="Guardar" />
        </div>
        <br />
        <hr className="  text-black" />
        <div className="w-full">
          <FormML />
        </div>
        <br />
        <hr className="  text-black" />
        <div className=" mb-5">
          <h1 className="text-red-500 py-3 text-xl font-semibold">Eliminar cuenta</h1>
          <div className="px-3 border-2 border-red-500 rounded-lg grid grid-cols-3 grid-rows-4">
            <div className=" row-start-2 col-span-2" >
              <h2 className="font-semibold text-sm">Eliminar esta cuenta</h2>
            </div>
            <div className=' col-span-2 row-start-3 '>
              <h2 className="text-xs font-light text-zinc-500" >Si elimina esta cuenta no podrá recuperarla</h2>
            </div>
            <div className=" row-start-2 col-start-3 row-span-2 grid justify-center content-center ">
              <button className="shadow-sm shadow-red-500 rounded-lg py-2 px-4 font-bold text-gray-50 bg-red-500 ">
                Eliminar cuenta
              </button>
            </div>
          </div>

        </div>
      </div>

    </section>
  );
}
