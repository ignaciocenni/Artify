"use client";
import React, { useState } from "react";

const OptionPublicationBar = () => {
  const [activeOption, setActiveOption] = useState("all");

  const handleOptionClick = (category) => {
    setActiveOption(category);
  };

  return (
    <div className="flex justify-center items-center gap-2 py-1 ">
      <button
        className={`px-3 py-2 ${
          activeOption === "all" ? "bg-[var(--extra)] text-white shadow-xl" : ""
        } rounded-lg  border border-zinc-500 border-opacity-25 justify-center items-center gap-2.5 flex text-xl font-medium`}
        onClick={() => handleOptionClick("all")}>
        Todas
      </button>
      <button
        className={`px-3 py-2 ${
          activeOption === "pending"
            ? "bg-[var(--extra)] text-white shadow-xl"
            : ""
        } rounded-lg  border border-zinc-500 border-opacity-25 justify-center items-center gap-2.5 flex text-xl font-medium`}
        onClick={() => handleOptionClick("pending")}>
        Pendientes
      </button>
      <button
        className={`px-3 py-2 ${
          activeOption === "posted"
            ? "bg-[var(--extra)] text-white shadow-xl"
            : ""
        } rounded-lg  border border-zinc-500 border-opacity-25 justify-center items-center gap-2.5 flex text-xl font-medium`}
        onClick={() => handleOptionClick("posted")}>
        Publicadas
      </button>
      <button
        className={`px-3 py-2 ${
          activeOption === "hidden"
            ? "bg-[var(--extra)] text-white shadow-xl"
            : ""
        } rounded-lg border border-zinc-500 border-opacity-25 justify-center items-center gap-2.5 flex text-xl font-medium`}
        onClick={() => handleOptionClick("hidden")}>
        Ocultos
      </button>
    </div>
  );
};

export default OptionPublicationBar;
