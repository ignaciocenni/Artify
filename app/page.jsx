"use client";
import Filters from "../components/Filters";
import Cards from "../components/Cards";
import {useSelector} from "react-redux";


export default function Home() {
  const products = useSelector((state) => state.valores.products);

  return (
    <>
      <div className="flex py-2 px-5">
        <div className="flex flex-col gap-6 w-[25%] ">
          <Filters />
        </div>
        <Cards products={products} />
      </div>
    </>
  );
}
