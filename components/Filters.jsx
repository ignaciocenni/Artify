"use client";
import { price } from "@/store/slice";
import { useState } from "react";
import { useDispatch } from "react-redux";
import CategoryFilter from "./Filters/CategoryFilter";
import ProvinceFilter from "./Filters/ProvinceFilter";




export default function Filters() {
  const dispatch = useDispatch();
  const [filters, setFilters] = useState({
    city: "",
    max: "",
    min: "",
    category: [],
  });


  const handlerImput = (event) => {
    const property = event.target.name;
    const value = event.target.value;
    setFilters({ ...filters, [property]: value });
  };
  const handleBuscar = () => {
    const min = filters.min;
    const max = filters.max;
    dispatch(price([min, max]));
  };


  return (
    <div className="flex flex-col items-start w-[25%] py-2 px-5 w">
      <div className="gap-1 items-start">
        <h1 className="text-2xl font-semibold">Filtros</h1>
        <ProvinceFilter />
        <div className="flex flex-row justify-between relative items-center">
          <input
            className="p-2 w-28 h-9 mt-6 rounded-md"
            name="min"
            type="number"
            pattern="[0-9]*"
            placeholder="Min."
            value={filters.min}
            onChange={handlerImput}
            style={{ borderRadius: "4px" }}
          />
          <h1 className="mt-6 font-thin"> a </h1>
          <input
            className="p-2 w-28 h-9 mt-6 rounded-md "
            name="max"
            type="number"
            pattern="[0-9]*"
            placeholder="Max."
            value={filters.max}
            onChange={handlerImput}
            style={{ borderRadius: "4px" }}
          />
        </div>
        <div className="flex justify-center items-center content-center">
          <button
            className=" mt-4 overflow-hidden hover:bg-[var(--background-sec)] hover:text-black text-white bg-[var(--detail)]  rounded-lg flex content-center items-center shadow-xl text-xs font-bold px-6 h-11"
            onClick={handleBuscar}
          >
            Aplicar
          </button>
        </div>
      </div>
      <br />

      <CategoryFilter />

    </div>
  );
}
