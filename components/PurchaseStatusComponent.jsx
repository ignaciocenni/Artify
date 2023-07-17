"use client";
import { useSession } from "next-auth/react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { multiplied } from "../store/slice";

export default function PurchaseStatusComponent() {
const data = useSession();
 const dispatch = useDispatch()
 useEffect(() => {
    if(status === "approved"){
        localStorage.removeItem("products")
        dispatch(multiplied([]))
    }
 }, [])
 
  const searchParams = useSearchParams();
  const status = searchParams.get("status");

  const form = {
      email: data.data.user.email,
      name: data.data.user.name,
      status: status,
      type:"purchase"
  }
  const sendEmail = async () => {
      await sendContactForm(form);
  };
  sendEmail()

  return (
    <div >
      {status === "approved" ? (
        <div className="flex justify-center items-center pt-40">
          <p className="pr-8">Su compra fue realizada con exito ! ✔👍 </p>
          <Link href={"/"}>
            <button  
              className=" mt-4 overflow-hidden hover:bg-[var(--background-sec)] hover:text-black text-white bg-[var(--detail)]  rounded-lg flex content-center items-center shadow-xl text-xs font-bold px-6 h-11"
            >
              Volver al inicio
            </button>
          </Link>
        </div>
      ) : (
        <div className="flex justify-center items-center pt-40">
          <p className="pr-8">Su compra fue rechazada</p>
          <Link href={"/"}>
            <button 
              className=" mt-4 overflow-hidden hover:bg-[var(--background-sec)] hover:text-black text-white bg-[var(--detail)]  rounded-lg flex content-center items-center shadow-xl text-xs font-bold px-6 h-11"
            >
              Volver al inicio
            </button>
          </Link>
        </div>
      )}
    </div>
  );
}
