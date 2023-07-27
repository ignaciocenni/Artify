"use client";

import { price } from "../../store/slice";
import { useState } from "react";
import { useDispatch } from "react-redux";
import Swal from "sweetalert2";

export default function PriceFilter() {
  const dispatch = useDispatch();
  const [filters, setFilters] = useState({
    max: "",
    min: "",
  });

  const handlerImput = (event) => {
    const property = event.target.name;
    const value = event.target.value;
    setFilters({ ...filters, [property]: value });
  };
  const handleBuscar = (flag) => {
    let min = filters.min;
    let max = filters.max;
    console.log(min, max);

    if (min === "" && max === "" && flag !== "reset") {
      Swal.fire({
        icon: "warning",
        title: "Por favor ingrese un precio valido",
        confirmButtonText: "ok",
      });
      setFilters({
        max: "",
        min: "",
      });
      return;
    }
    if (min > max && flag !== "reset") {
      Swal.fire({
        icon: "warning",
        title: "Por favor ingrese un rango valido",
        confirmButtonText: "ok",
      });
      setFilters({
        max: "",
        min: "",
      });
      return;
    }
    if (flag === "reset") {
      dispatch(price("reset"));
      setFilters({
        max: "",
        min: "",
      });
      return;
    }
    dispatch(price([min, max]));
    setFilters({
      max: "",
      min: "",
    });
  };

  return (
    <div className="w-full">
      <div className="flex flex-row justify-between relative items-center gap-4 w-full">
        <input
          className="p-2 w-24 rounded-xl bg-[var(--primary)]"
          name="min"
          type="number"
          pattern="[0-9]*"
          placeholder="Min."
          value={filters.min}
          onChange={handlerImput}
          min="0"
        />
        <h1 className="font-thin"> a </h1>
        <input
          className="p-2 w-24 rounded-xl bg-[var(--primary)]"
          name="max"
          type="number"
          pattern="[0-9]*"
          placeholder="Max."
          value={filters.max}
          onChange={handlerImput}
          min="1"
        />
      </div>
      <div className="flex w-full justify-between">
        <button
          className=" mt-4 overflow-hidden hover:bg-[var(--background-sec)] hover:text-black text-white bg-[var(--detail)]  rounded-lg flex content-center items-center shadow-md text-xs font-bold px-6 h-11"
          onClick={handleBuscar}
        >
          Aplicar
        </button>
        <button
          className="hover:text-[var(--background-sec)]  shadow-md mt-4 overflow-hidden rounded-lg flex content-center items-center text-xs font-bold px-6 h-11"
          onClick={() => handleBuscar("reset")}
        >
          Limpiar filtro
        </button>
      </div>
    </div>
  );
}
