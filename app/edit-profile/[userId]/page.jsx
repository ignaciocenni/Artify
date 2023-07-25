"use client";
import { useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import UploadButton from "../../../components/buttons/UploadButton";
import axios from "axios";
import Swal from "sweetalert2";

/* const getUser = async (id) => {
  const { data } = await axios.get(`/api/users/${id}`);

  return data;
}; */
const putProfile = async ({form}) => {

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
      <div className="flex gap-8 justify-center pb-20">
        <section className="text-center grid justify-center items-center">
          <form onSubmit={onSubmit}>
            <h1 className="font-semibold text-3xl py-5">Editar Perfil</h1>

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
          </form>
        </section>
      </div>
    </>
  );
}
