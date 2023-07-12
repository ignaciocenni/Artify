"use client";
import { price } from "../store/slice";
import { useState } from "react";
import { useDispatch } from "react-redux";
import CategoryFilter from "./Filters/CategoryFilter";
import ProvinceFilter from "./Filters/ProvinceFilter";
import PriceFilter from "./Filters/PriceFilter";

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
    <div className="flex flex-col items-start w-[25%]">
      <div className="flex flex-col gap-3 items-start">
        <h1 className="text-2xl font-semibold">Filtros</h1>
        <ProvinceFilter />
        <CategoryFilter />
        <PriceFilter/>
      </div>
    </div>
  );
}
