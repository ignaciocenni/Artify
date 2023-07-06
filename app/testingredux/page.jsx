'use client'
import { useDispatch, useSelector } from "react-redux";
import { GET_INFO } from "@/store/slice";
import { useEffect } from "react"
import Cards from "@/components/Cards";


export default function Page() {
  const nombre = useSelector(state => state.valores.nombre)
  const dispacht = useDispatch();
  useEffect(() => {
    async function prueba() {
      const serverresponse = await fetch("http://localhost:3000/api/product")
        .then(Response => Response.json())
        .then((data)=>data)
      dispacht(GET_INFO(serverresponse))
    }
    prueba()
      dispacht(GET_INFO(serverresponse))
  }, [dispacht])

  return (
    <div className=" z-10">
  {    <Cards
      data={nombre}/> }
    </div>
  );
}