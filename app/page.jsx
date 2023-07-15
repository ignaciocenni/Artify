"use client";
import Filters from "../components/Filters";
import Cards from "../components/Cards";
import SearchBar from "../components/SearchBar";
import { useDispatch, useSelector } from "react-redux";
import { GET_INFO } from "../store/slice";

export default function Home() {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.valores.products);

  return (
    <>
      <div className="flex py-2 px-5">
        <div className="flex flex-col gap-6 w-[25%] ">
          <SearchBar />
          <Filters />
        </div>
        <Cards products={products} />
      </div>
    </>
  );
}
