"use client";
import React, { useState } from "react";

const OptionPublicationBar = ({ setProducts, products }) => {
  const [activeOption, setActiveOption] = useState("ALL");

  const handleOptionClick = (category) => {
    setActiveOption(category);
    if (category === "ACTIVE") setProducts(products.filter((product) => product.status === "ACTIVE"));
    if (category === "INACTIVE") setProducts(products.filter((product) => product.status === "INACTIVE"));
    if (category === "PENDING") setProducts(products.filter((product) => product.status === "PENDING"));
    if (category === "ALL") setProducts(products);
  };

  return (
    <div className="flex justify-center items-center gap-2 py-1 ">
      <button
        className={`px-3 py-2 ${
          activeOption === "ALL" ? "bg-[var(--extra)] text-white shadow-xl" : ""
        } rounded-lg  border border-zinc-500 border-opacity-25 justify-center items-center gap-2.5 flex text-xl font-medium`}
        onClick={() => handleOptionClick("ALL")}
      >
        Todas
      </button>
      <button
        className={`px-3 py-2 ${
          activeOption === "PENDING" ? "bg-[var(--extra)] text-white shadow-xl" : ""
        } rounded-lg  border border-zinc-500 border-opacity-25 justify-center items-center gap-2.5 flex text-xl font-medium`}
        onClick={() => handleOptionClick("PENDING")}
      >
        Pendientes
      </button>
      <button
        className={`px-3 py-2 ${
          activeOption === "ACTIVE" ? "bg-[var(--extra)] text-white shadow-xl" : ""
        } rounded-lg  border border-zinc-500 border-opacity-25 justify-center items-center gap-2.5 flex text-xl font-medium`}
        onClick={() => handleOptionClick("ACTIVE")}
      >
        Publicadas
      </button>
      <button
        className={`px-3 py-2 ${
          activeOption === "INACTIVE" ? "bg-[var(--extra)] text-white shadow-xl" : ""
        } rounded-lg border border-zinc-500 border-opacity-25 justify-center items-center gap-2.5 flex text-xl font-medium`}
        onClick={() => handleOptionClick("INACTIVE")}
      >
        Ocultos
      </button>
    </div>
  );
};

export default OptionPublicationBar;
