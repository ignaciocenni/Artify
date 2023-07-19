"use client";
import { useSession } from "next-auth/react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { multiplied } from "../store/slice";
import axios from "axios";

export default function PurchaseStatusComponent() {
const productsDB = useSelector((state) => state.valores.products)
const data = useSession();
 const dispatch = useDispatch()
const productsLS = JSON.parse(localStorage.getItem("products")) || [];
const updatedProducts = productsDB.reduce((acc, productDB) => {
  const matchingProduct = productsLS.find((productLS) => productLS.id === productDB.id);
  if (matchingProduct) {
    const updatedStock = productDB.stock - matchingProduct.quantity;
    return [...acc, { id: productDB.id, stock: updatedStock >= 0 ? updatedStock : 0 }];
  }
  return acc;
}, []);



 useEffect(() => {
    if(status === "approved"){
      updatedProducts.forEach((product) => {
        const url = `http://localhost:3000/api/products/${product.id}`;
        const data = { stock: product.stock };
  
        axios.put(url, data)
          .then((response) => {
            // Manejar la respuesta de la solicitud PUT exitosa si es necesario
            console.log('Solicitud PUT exitosa:', response.data);
          })
          .catch((error) => {
            // Manejar errores en la solicitud PUT si es necesario
            console.error('Error en la solicitud PUT:', error);
          });
      });
  
        // localStorage.removeItem("products")
        // dispatch(multiplied([]))
    }else if(status === "in_process"){
      
      localStorage.removeItem("products")
      dispatch(multiplied([]))
    }
 }, [])
 
  const searchParams = useSearchParams();
  const status = searchParams.get("status");

  const form = {
      email: data?.data?.user.email,
      name: data?.data?.user.name,
      status: status,
      type:"purchase"
  }
  const sendEmail = async () => {
      await sendContactForm(form);
  };
  sendEmail()
  
  return (
    <div >
        <div className="flex justify-center items-center pt-40">
          <p className="pr-8">
            {status === "approved" && "Su compra fue realizada con exito ! ✔👍"}
            {status === "in_process" && "Su pago esta siendo procesado, se le avisara por email cuando este listo"}
            {status === "rejected" && "Su pago fue rechazado, por favor intente nuevamente con otro medio de pago, muchas gracias"}
            </p>
          <Link href={"/"}>
            <button  
              className=" mt-4 overflow-hidden hover:bg-[var(--background-sec)] hover:text-black text-white bg-[var(--detail)]  rounded-lg flex content-center items-center shadow-xl text-xs font-bold px-6 h-11"
            >
              Volver al inicio
            </button>
          </Link>
        </div>
    </div>
  );
}

