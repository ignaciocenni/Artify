"use client";
import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setDashProducts } from "../../store/slice";

const OptionPublicationBar = () => {
  const [activeOption, setActiveOption] = useState("ALL");
  const products = useSelector((state) => state.valores.copyProducts);
  const dispatch = useDispatch();
  const handleOptionClick = (category) => {
    setActiveOption(category);
    if (category === "ACTIVE") {
      let filtered = products.filter((product) => product.status === "ACTIVE");
      dispatch(setDashProducts([filtered, "ACTIVE"]));
    }
    if (category === "INACTIVE") {
      let filtered = products.filter((product) => product.status === "INACTIVE");
      dispatch(setDashProducts([filtered, "INACTIVE"]));
    }
    if (category === "PENDING") {
      let filtered = products.filter((product) => product.status === "PENDING");
      dispatch(setDashProducts([filtered, "PENDING"]));
    }
    if (category === "ALL") {
      dispatch(setDashProducts([products, "ALL"]));
    }
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
          activeOption === "ACTIVE" ? "bg-[var(--extra)] text-white shadow-xl" : ""
        } rounded-lg  border border-zinc-500 border-opacity-25 justify-center items-center gap-2.5 flex text-xl font-medium`}
        onClick={() => handleOptionClick("ACTIVE")}
      >
        Activas
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
          activeOption === "INACTIVE" ? "bg-[var(--extra)] text-white shadow-xl" : ""
        } rounded-lg border border-zinc-500 border-opacity-25 justify-center items-center gap-2.5 flex text-xl font-medium`}
        onClick={() => handleOptionClick("INACTIVE")}
      >
        Inactivas
      </button>
    </div>
  );
};

export default OptionPublicationBar;
