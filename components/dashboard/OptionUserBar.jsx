"use client";
import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setDashUsers } from "../../store/slice";

const OptionPublicationBar = () => {
  const [activeOption, setActiveOption] = useState("ALL");
  const dispatch = useDispatch();
  const users = useSelector((state) => state.valores.users);
  const handleOptionClick = (category) => {
    setActiveOption(category);
    if (category === "ADMIN") dispatch(setDashUsers([users.filter((user) => user.rol === "ADMIN"), "ADMIN"]));
    if (category === "USER") dispatch(setDashUsers([users.filter((user) => user.rol === "USER"), "USER"]));
    if (category === "ALL") dispatch(setDashUsers([users, "ALL"]));
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
