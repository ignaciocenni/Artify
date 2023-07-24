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
const putProfile = async ({ form }) => {

  try {
    const res = (await axios.put(`/api/users/${form.userId}`, form)).data;
    return { created: true, res };
  } catch (error) {
    return { created: false, error: error.message };
  }
};


export default function Page() {


  const data = useSession();

  const [form, setForm] = useState({
    name: "",
    aboutMe: "",
    password: "",
    image: "",
    /* wallet: "", */
    cbu: "",
    alias: "",
    socials: [],
    userId: "",
  });

  const [errors, setErrors] = useState({});

  /* useEffect(() => {
    const fetchData = async () => {
      const user = await getUser(userId);
      setUserData(user);
    };

    fetchData();
  }, [userId]); */

  useEffect(() => {
    setForm({
      ...form,
      userId: data?.data?.user.id,
    });
  }, [data?.data?.user]);

  const onSubmit = async (event) => {
    event.preventDefault();
    const response = await putProfile(form);
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
    <>
      <section className=" pl-5 text-left  bg-slate-500 w-full ">

        <h1 className=" h-28 font-semibold text-3xl py-5 bg-blue-600" >Editar Perfil</h1>
        <div className=" bg-red-400 flex justify-center items-center">
          <Image
            className=" rounded-full"
            src={data?.data?.user?.image}
            width={80}
            height={80}
          />
        </div>
        <form className=" w-[37em] bg-green-500   ">
          <label htmlFor="Nombre">Name</label>
          <input
            className="  flex  font-bold text-1xl shadow appearance-none  rounded-xl w-full py-2 px-3 focus:outline-none focus:shadow-outline"
            id="price"
            type="text"
            placeholder=""
            onChange={handleChange}
            name="name"
            value={form.name}
          />
          <label htmlFor="Nombre">About Me</label>
          <textarea
            className=" shadow appearance-none border rounded w-full h-[10em] py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline resize-none"
            id="description"
            type="text"
            onChange={handleChange}
            name="description"
            value={form.description}
          />
        </form>
        <div className="w-[37em]">
        <SubmitButton
        label="Guardar" />
        </div>
        <br />
        <hr />
        <h1>Cambiar contraseña</h1>
        <form className=" w-[37em] bg-green-500  ">
          <label htmlFor="Nombre">Contraseña actual</label>
          <input
            className="  flex gap-5 font-bold text-1xl shadow appearance-none  rounded-xl w-full py-2 px-3 focus:outline-none focus:shadow-outline"
            id="password"
            type="text"
            placeholder=""
            onChange={handleChange}
            name="name"
            value={form.name}
          />
                    <label htmlFor="Nombre">Nueva contraseña</label>
          <input
            className="  flex  font-bold text-1xl shadow appearance-none  rounded-xl w-full py-2 px-3 focus:outline-none focus:shadow-outline"
            id="password"
            type="text"
            placeholder=""
            onChange={handleChange}
            name="name"
            value={form.name}
          />
                    <label htmlFor="Nombre">Confirma la nueva contraseña</label>
          <input
            className=" gap-5  flex  font-bold text-1xl shadow appearance-none  rounded-xl w-full py-2 px-3 focus:outline-none focus:shadow-outline"
            id="password"
            type="text"
            placeholder=""
            onChange={handleChange}
            name="password"
            value={form.password}
          />          
        </form>
        <div className="w-[37em]">
        <SubmitButton
        label="Guardar" />
        </div>
        <br />
        <hr />
        <h1>Redes Sociales</h1>
        <form className=" w-[37em] bg-green-500  ">
          <label htmlFor="Nombre">Página web</label>
          <input
            className="  flex gap-5 font-bold text-1xl shadow appearance-none  rounded-xl w-full py-2 px-3 focus:outline-none focus:shadow-outline"
            id="password"
            type="text"
            placeholder=""
            onChange={handleChange}
            name="name"
            value={form.name}
          />
                    <label htmlFor="Nombre">Instagram</label>
          <input
            className="  flex  font-bold text-1xl shadow appearance-none  rounded-xl w-full py-2 px-3 focus:outline-none focus:shadow-outline"
            id="password"
            type="text"
            placeholder=""
            onChange={handleChange}
            name="name"
            value={form.name}
          />
                    <label htmlFor="Nombre">Facebook</label>
          <input
            className=" gap-5  flex  font-bold text-1xl shadow appearance-none  rounded-xl w-full py-2 px-3 focus:outline-none focus:shadow-outline"
            id="password"
            type="text"
            placeholder=""
            onChange={handleChange}
            name="password"
            value={form.password}
          />          
        </form>
        <div className="w-[37em]">
        <SubmitButton
        label="Guardar" />
        </div>
        <br />
        <hr className="  text-black" />
        <FormML />
        <br />
        <hr className="  text-black" />
        <h1 className="text-rose-500">Eliminar cuenta</h1>
        <div className=" w-[37em] border-2 border-rose-500 rounded-md grid grid-rows-3 grid-flow-col gap-4">
          <h2 className="col-span-2">Eliminar esta cuenta</h2>
          <h4 classname=" col-span-2">Si elimina esta cuenta no podrá recuperarla</h4>
          <div className=" col-span-3">
          <button className=" text-gray-50 bg-rose-500 ">
              Eliminar
          </button>
          </div>
        </div>






        {/*         <form onSubmit={onSubmit}>
          <div className="flex justify-center items-center gap-2 py-2">
            <input
              className="flex gap-3 font-bold text-1xl shadow appearance-none  rounded-xl w-full py-2 px-3 focus:outline-none focus:shadow-outline"
              id="price"
              type="text"
              placeholder="Cambia tu contraseña."
              onChange={handleChange}
              name="password"
              value={form.password}
            />
          </div>
          {errors.price && (
            <p className="text-red-700 font-medium text-xs">
              {errors.password}
            </p>
          )}

          <div className="flex justify-center items-center gap-2 py-2">
            <input
              className="flex gap-3 font-bold text-1xl shadow appearance-none  rounded-xl w-full py-2 px-3 focus:outline-none focus:shadow-outline"
              id="cbu"
              type="number"
              placeholder="CBU"
              onChange={handleChange}
              name="cbu"
              value={form.cbu}
            />
          </div>
          {errors.cbu && (
            <p className="text-red-700 font-medium text-xs">{errors.cbu}</p>
          )}

          <div className="flex justify-center items-center gap-2 py-2">
            <input
              className="flex gap-3 font-bold text-1xl shadow appearance-none  rounded-xl w-full py-2 px-3 focus:outline-none focus:shadow-outline"
              id="alias"
              type="text"
              placeholder="Alias."
              onChange={handleChange}
              name="alias"
              value={form.alias}
            />
          </div>
          {errors.alias && (
            <p className="text-red-700 font-medium text-xs">{errors.alias}</p>
          )}

          <div className="flex flex-col items-start mb-4 gap-2">
            <textarea
              className="  shadow appearance-none border rounded w-full h-[10em] py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline resize-none"
              rows={2}
              id="aboutMe"
              type="text"
              placeholder="Acerca de ti"
              onChange={handleChange}
              name="aboutMe"
              value={form.aboutMe}
            />
            {errors.aboutMe && (
              <p className="text-red-700 font-medium text-xs">
                {errors.aboutMe}
              </p>
            )}
          </div>

          <h3 className="font-semibold text-1xl py-5">Redes Sociales</h3>

          <div className="flex justify-center items-center gap-2 py-2">
            <input
              className="flex gap-3 font-bold text-1xl shadow appearance-none  rounded-xl w-full py-2 px-3 focus:outline-none focus:shadow-outline"
              id="socials"
              type="text"
              placeholder="Instagram."
              onChange={handleChange}
              name="socials_0"
              value={form.socials[0]}
            />
          </div>
          {errors.socials && (
            <p className="text-red-700 font-medium text-xs">
              {errors.socials}
            </p>
          )}

          <div className="flex justify-center items-center gap-2 py-2">
            <input
              className="flex gap-3 font-bold text-1xl shadow appearance-none  rounded-xl w-full py-2 px-3 focus:outline-none focus:shadow-outline"
              id="socials"
              type="text"
              placeholder="Facebook"
              onChange={handleChange}
              name="socials_1"
              value={form.socials[1]}
            />
          </div>
          {errors.socials && (
            <p className="text-red-700 font-medium text-xs">
              {errors.socials}
            </p>
          )}

          <div className="flex justify-center items-center gap-2 py-2">
            <input
              className="flex gap-3 font-bold text-1xl shadow appearance-none  rounded-xl w-full py-2 px-3 focus:outline-none focus:shadow-outline"
              id="socials"
              type="text"
              placeholder="Whatsapp"
              onChange={handleChange}
              name="socials_2"
              value={form.socials[2]}
            />
          </div>
          {errors.socials && (
            <p className="text-red-700 font-medium text-xs">
              {errors.socials}
            </p>
          )}

          <h3 className="font-semibold text-1xl py-5">Foto de Perfil</h3>

          <UploadButton setForm={setForm} form={form} />

          <div className="flex items-center justify-center">
            {isFormValid ? (
              <button className="bg-[var(--detail)] text-white font-bold py-2 px-4 rounded focus:outline-none  w-[250px] opacity-50  cursor-not-allowed">
                Guardar
              </button>
            ) : (
              <button className="bg-[var(--detail)] hover:bg-[var(--background-sec)] hover:text-black text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-[250px] ">
                Guardar
              </button>
            )}
          </div>
        </form> */}
      </section>

    </>
  );
}
