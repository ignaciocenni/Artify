"use client";
import Image from "next/image";
import ApplyButton from "../buttons/ApplyButton";
import { useState } from "react";

const CardUser = (params) => {
  const { name, lastName, email, rol, image, id } = params;
  const [statusChange, setStatusChange] = useState("default");

  const handleChange = async (event) => {
    setStatusChange(event.target.value);
  };

  return (
    <div className="px-4 py-3 rounded-lg shadow-md justify-start items-center gap-3 inline-flex mx-4">
      <Image className="rounded-lg" width={40} height={40} src={image} alt="Product" />
      <div className="px-5 justify-start items-center gap-5 flex">
        <h1 className="w-40 font-semibold">
          {name} {lastName}
        </h1>
        <h1 className="w-96">{email}</h1>
        <h1 className="w-96">{id}</h1>
        <h1 className="w-10 font-bold">{rol}</h1>
      </div>

      <select
        onChange={handleChange}
        className="px-3 py-2 bg-[var(--primary)] border border-black border-opacity-25 justify-center items-center gap-3 flex font-medium rounded-xl cursor-pointer"
      >
        <option className="rounded-xl cursor-pointer" value="default">
          Cambiar Rol
        </option>
        <option className="rounded-xl cursor-pointer" value="USER">
          USER
        </option>
        <option className="rounded-xl cursor-pointer" value="ADMIN">
          ADMIN
        </option>
      </select>

      {statusChange !== "default" ? <ApplyButton id={id} value={statusChange} prev={rol} /> : null}
    </div>
  );
};

export default CardUser;
