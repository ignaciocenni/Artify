"use client";
import { useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import UploadButton from "../../../components/buttons/UploadButton";
import axios from "axios";
import validate from "./validate";
import Image from "next/image";

const getUser = async (id) => {
  const { data } = await axios.get(`/api/users/${id}`);
  console.log("Get user: " + data);
  return data;
};

const putProfile = async (profileData) => {
  try {
    const res = (await axios.put("api/users", profileData)).data;
    return { created: true, res };
  } catch (error) {
    return { created: false, error: error.message };
  }
};

export default function Page({ params }) {
  const { userId } = params;
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const user = await getUser(userId);
      setUserData(user);
    };

    fetchData();
  }, [userId]);

  const data = useSession();
  console.log(data);

  const [form, setForm] = useState({
    aboutMe: "",
    password: "",
    image: "",
    wallet: "",
    cbu: "",
    alias: "",
    socials: [],
    userId: "",
  });

  useEffect(() => {
    setForm({
      ...form,
      userId: data?.data?.user.id,
    });
  }, [data?.data?.user]);

  const [errors, setErrors] = useState({});

  const onSubmit = async (event) => {
    event.preventDefault();
    const response = await putProfile(form);
  };

  const handleChange = (event) => {
    event.preventDefault();
    const { name, value } = event.target;

    let parsedValue = value;

    if (name === "wallet") {
      parsedValue = parseFloat(value);
    } else if (name === "cbu") {
      parsedValue = parseInt(value, 10);
    }

    setErrors(validate({ ...form, [name]: parsedValue }));
    setForm({ ...form, [name]: parsedValue });
  };

  const isFormValid = Object.keys(errors).length > 0;

  return (
    <>
      <div className="flex gap-8 justify-center pb-20">
        <section className="text-center grid justify-center items-center">
          <form onSubmit={onSubmit}>
            <h1 className="font-semibold text-3xl py-5">Editar Perfil</h1>

            <div className="flex justify-center flex-col items-center p-5 m-5">
              <Image
                src={userData.image}
                width={144}
                height={144}
                alt="me"
                style={{ borderRadius: "100%" }}
              />
            </div>
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
                value={form.password}
              />
            </div>
            {errors.alias && (
              <p className="text-red-700 font-medium text-xs">{errors.alias}</p>
            )}

            <div className="flex flex-col items-start mb-4 gap-2">
              <h1 className="font-medium text-xl">Acerca de ti.</h1>
              <textarea
                className="  shadow appearance-none border rounded w-full h-[10em] py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline resize-none"
                rows={2}
                id="aboutMe"
                type="text"
                onChange={handleChange}
                name="description"
                value={form.description}
              />
              {errors.aboutMe && (
                <p className="text-red-700 font-medium text-xs">
                  {errors.aboutMe}
                </p>
              )}
            </div>

            <h3 className="font-semibold text-2xl py-5">Redes Sociales</h3>

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
