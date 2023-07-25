"use client";
import Filters from "../components/Filters";
import Cards from "../components/Cards";
import { useSelector } from "react-redux";

export default function Home() {
  let products = useSelector((state) => state.valores.activeProducts);

  return (
    <>
      <div className="flex py-2 px-5">
        <div className="flex flex-col gap-6 w-auto mr-6 ">
          <Filters />
        </div>
        <div className="flex justify-center items-center w-2/3">
          <Cards products={products} />
        </div>
      </div>
    </>
  );
}
