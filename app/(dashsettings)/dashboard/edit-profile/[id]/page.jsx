"use client";
import { useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import UploadButton from "../../../../../components/buttons/UploadButton";
import axios from "axios";
import Swal from "sweetalert2";
import Image from "next/image";
import FormML from "../../../../../components/SettingsComponents/MlForm";
import SubmitButton from "../../../../../components/buttons/SubmitButton";
import FormName from "./FormNombre"
import FormPassword from "./FormPassword"
import FormSocials from "./FormSocials"
import DeleteUser from "./DeleteUser"

/* const putProfile = async (form) => {
    try { 
  const res = (await axios.put(`/api/users/${form.userId}`, form)).data;
  return { created: true, res };
     } catch (error) {
      return { created: false, error: error.message };
    } 
  }; */


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
    }
    allDataUser()
    setForm({
      ...form,
      userId: data?.data?.user.id,
    })
  }, [data?.data?.user]);

  const onSubmit = async (event) => {

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
    <section className="w-full grid bg-slate-500 h-screen justify-center overflow-scroll">
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
        <FormName
          userData={userData}
          userId={form.userId}
        />
        <br />
        <hr />
        <FormPassword
        userPassword={userData.password}
        userId={form.userId}/>
        <br />
        <hr />
        <FormSocials/>
        <br />
        <hr className="  text-black" />
        <div className="w-full">
          <FormML />
        </div>
        <br />
        <hr className="  text-black" />
        <DeleteUser/>
      </div>

    </section>
  );
}
