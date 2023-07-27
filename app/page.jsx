"use client";
import Filters from "../components/Filters";
import Cards from "../components/Cards";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import LoadingPublication from "../components/loadings/LoadingPublication";

export default function Home() {
  const [products, setProducts] = useState(null);

  let response = useSelector((state) => state.valores.activeProducts);

  useEffect(() => {
    setProducts(response);
  }, [products, response]);

  return (
    <>
      <div className="flex py-2 px-5 justify-center">
        <div className="flex flex-col gap-6 w-auto mr-6 ">
          <Filters />
        </div>
        {products ? (
          <div className="flex justify-center items-center w-2/3 mt-[10vh]">
            <Cards products={products} />
          </div>
        ) : (
          <div className="flex flex-col justify-center items-center w-2/3 mt-[10vh]">
            <LoadingPublication />
            <LoadingPublication />
          </div>
        )}
      </div>
    </>
  );
}
