"use client";
import { useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import UploadButton from "../../../../../components/buttons/UploadButton";
import axios from "axios";
import Image from "next/image";
import FormML from "../../../../../components/SettingsComponents/MlForm";
import FormName from "./FormNombre";
import FormPassword from "./FormPassword";
import FormSocials from "./FormSocials";
import DeleteUser from "./DeleteUser";

export default function EditProfile({ params }) {
  const { id } = params;
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
    rol: "",
  });

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    lastName: "",
    image: "",
    aboutMe: "",
  });

  const [errors, setErrors] = useState({});

  useEffect(() => {
    const allDataUser = async () => {
      const result = (await axios.get(`/api/users/${id}`)).data;
      setUserData({
        name: result.name,
        email: result.email,
        password: result.password,
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
    };
    allDataUser();
    setForm({
      ...form,
      userId: data?.data?.user.id,
    });
  }, [data?.data?.user]);





  return (
    <section className="w-full grid h-max justify-center mt-[10vh] ml-[34vh] bg-[var(--background)] ">
      <div className=" pl-5 text-left  w-[37em] ">
        <h1 className=" h-23 font-semibold text-xl py-5 ">Editar Perfil</h1>
        <div className=" w-[37em] mb-3 flex justify-center items-center">
          <Image
            className=" rounded-full shadow-sm"
            src={data?.data?.user?.image}
            width={100}
            height={100}
            alt="imagen de usuario"
          />
        </div>
        <UploadButton />
        <FormName userData={userData} userId={form.userId} />
        <br />
        <hr />
        <FormPassword
        userId={form.userId}
        userPassword={userData.password}/>
        <br />
        <hr />
        <FormSocials 
        userId={form.userId}/>
        <br />
        <hr className="  text-black" />
        <div className="w-full">
          <FormML 
          userId={form.userId}/>
        </div>
        <br />
        <hr className="  text-black" />
        <DeleteUser 
        userId={form.userId}/>
      </div>
    </section>
  );
}
