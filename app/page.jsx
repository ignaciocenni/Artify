'use client'
import Filters from "../components/Filters";
import NavBar from "../components/NavBar";
import Cards from "../components/Cards";
import { useDispatch, useSelector } from "react-redux";
import { GET_INFO } from "@/store/slice";
import { useEffect } from "react"

export default function Home() {
  const products = useSelector(state => state.valores.nombre);
  const dispacht = useDispatch();

  useEffect(() => {
    async function allProducts() {
      const serverresponse = await fetch("http://localhost:3000/api/products")
        .then(Response => Response.json())
        .then((data) => data)
      dispacht(GET_INFO(serverresponse))
    }
    allProducts()
  }, [])

  return (
    <div className=" z-10">
      <NavBar />
      <div className="flex items-start">
        <Filters />
        {products && <Cards
          products={products} />}
      </div>
    </div>
  );
}
