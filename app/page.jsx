"use client";
import Filters from "../components/Filters";
import NavBar from "../components/NavBar";
import Cards from "../components/Cards";
import { useDispatch, useSelector } from "react-redux";
import { GET_INFO, GET_CATEGORIES } from "@/store/slice";
import { useEffect, useState } from "react";
import useFetch from "@/components/fetch/useFetch";
import SearchBar from "@/components/SearchBar";

export default function Home() {
  const [error, setError] = useState(null);
  const products = useSelector((state) => state.valores.products);
  const dispacht = useDispatch();

  useEffect(() => {
    async function allInfo() {
      const categoriesResponse = await useFetch(
        "http://localhost:3000/api/category"
      );
      const serverresponse = await useFetch(
        "http://localhost:3000/api/products"
      );
      dispacht(GET_INFO(serverresponse));
      dispacht(GET_CATEGORIES(categoriesResponse));
    }
    allInfo();
  }, []);

  return (
    <div className="z-10">
      <NavBar />
      <div className="flex items-start py-2 px-5">
        <div className="flex flex-col gap-5">
          <SearchBar/>
          <Filters />
        </div>
        {error ? (
          <div>Error: {error.message}</div> // Renderiza el mensaje de error
        ) : (
          <Cards products={products} /> // Renderiza el componente Cards
        )}
      </div>
    </div>
  );
}
