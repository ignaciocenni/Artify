"use client";
import Filters from "../components/Filters";
import NavBar from "../components/NavBar";
import Cards from "../components/Cards";
import { useDispatch, useSelector } from "react-redux";
import { GET_INFO } from "@/store/slice";
import { useEffect, useState } from "react";

export default function Home() {
  const [error, setError] = useState(null);
  const products = useSelector((state) => state.valores.products);
  const dispacht = useDispatch();

  useEffect(() => {
    async function allProducts() {
      const serverresponse = await fetch("http://localhost:3000/api/products")
        .then((response) => {
          if (!response.ok) {
            throw new Error("Vaya algo salio mal", {
              cause: response.status,
            });
          }
          return response.json();
        })
        .then((data) => data)
        .catch((errorInformation) => {
          console.log("Codigo de error;", errorInformation.cause);
          console.log("Mensaje al usuario:", errorInformation);
          setError(errorInformation);
        });
      dispacht(GET_INFO(serverresponse));
    }
    allProducts();
  }, []);

  return (
    <div className=" z-10">
      <NavBar />
      {console.log(products)}
      <div className="flex items-start">
        <Filters />
        {error ? (
          <div>Error: {error.message}</div> // Renderiza el mensaje de error
        ) : (
          <Cards products={products} /> // Renderiza el componente Cards
        )}
      </div>
    </div>
  );
}
