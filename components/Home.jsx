"use client";
import Filters from "../components/Filters";
import NavBar from "../components/NavBar/NavBar";
import Cards from "../components/Cards";
import SearchBar from "../components/SearchBar";
import { useDispatch, useSelector } from "react-redux";
import { GET_CATEGORIES, GET_PROVINCES, GET_INFO } from "../store/slice";

export default function Home({ products, categories, provinces }) {
  const dispatch = useDispatch();
  dispatch(GET_CATEGORIES(categories));
  dispatch(GET_PROVINCES(provinces));
  let allProducts = useSelector((state) => state.valores.products);
  allProducts.length ? allProducts : dispatch(GET_INFO(products));
  return (
    <>
     
      <div className="flex py-2 px-5">
        <div className="flex flex-col gap-6 w-[25%] ">
          <SearchBar />
          <Filters />
        </div>
        <Cards products={allProducts} />
      </div>
    </>
  );
}
