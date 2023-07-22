"use client";
import React, { useState } from "react";

const OptionPublicationBar = ({ setUsers, users}) => {
  const [activeOption, setActiveOption] = useState("ALL");

  const handleOptionClick = (category) => {
    setActiveOption(category);
    if (category === "ADMIN") setUsers(users.filter((user) => user.rol === "ADMIN"));
    if (category === "USER") setUsers(users.filter((user) => user.rol === "USER"));
    if (category === "ALL") setUsers(users);
  };

  return (
    <div className="flex justify-center items-center gap-2 py-1 ">
      <button
        className={`px-3 py-2 ${
          activeOption === "ALL" ? "bg-[var(--extra)] text-white shadow-xl" : ""
        } rounded-lg  border border-zinc-500 border-opacity-25 justify-center items-center gap-2.5 flex text-xl font-medium`}
        onClick={() => handleOptionClick("ALL")}
      >
        Todos
      </button>
      <button
        className={`px-3 py-2 ${
          activeOption === "USER" ? "bg-[var(--extra)] text-white shadow-xl" : ""
        } rounded-lg  border border-zinc-500 border-opacity-25 justify-center items-center gap-2.5 flex text-xl font-medium`}
        onClick={() => handleOptionClick("USER")}
      >
        Usuarios
      </button>
      <button
        className={`px-3 py-2 ${
          activeOption === "ADMIN" ? "bg-[var(--extra)] text-white shadow-xl" : ""
        } rounded-lg  border border-zinc-500 border-opacity-25 justify-center items-center gap-2.5 flex text-xl font-medium`}
        onClick={() => handleOptionClick("ADMIN")}
      >
        Administradores
      </button>
     
    </div>
  );
};

export default OptionPublicationBar;
