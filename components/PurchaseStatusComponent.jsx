"use client";
import { useSession } from "next-auth/react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { multiplied } from "../store/slice";
import axios from "axios";
import { sendContactForm } from "./lib/api";

export default function PurchaseStatusComponent() {
  const dispatch = useDispatch();
  const data = useSession();
  const productsLS = JSON.parse(localStorage.getItem("products")) || [];
  const updatedStockProducts = productsLS.map((product) => ({
    id: product.id,
    stock: product.stock - product.quantity,
  }));

  useEffect(() => {
    if (status === "approved") {
      updatedStockProducts.forEach((product) => {
        const url = `http://localhost:3000/api/products/${product.id}`;
        const data = { stock: product.stock };

        axios
          .put(url, data)
          .then((response) => {
            console.log(response);
          })
          .catch((error) => {
            console.log(error.message);
          });
      });
      if (data?.data?.user.id) {
        try {
          const response = axios.post(`http://localhost:3000/api/users`, data?.data?.user).data;
          console.log(response);
        } catch (error) {
          console.log(error.message);
        }
      }
      productsLS.forEach((product) => {
        const url = `http://localhost:3000/api/${product.id}`; /* hay que cambiar esta URL*/
        const data = {
          productId: product.id,
          sellerId: product.sellerId,
          totalPrice: product.unit_price * product.quantity,
        };

        axios
          .put(url, data)
          .then((response) => {})
          .catch((error) => {
            console.log(error.message);
          });
      });

      // localStorage.removeItem("products")
      // dispatch(multiplied([]))
    } else if (status === "in_process") {
      localStorage.removeItem("products");
      dispatch(multiplied([]));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const searchParams = useSearchParams();
  const status = searchParams.get("status");

  const form = {
    email: data?.data?.user.email,
    name: data?.data?.user.name,
    status: status,
    type: "purchase",
  };
  const sendEmail = async () => {
    await sendContactForm(form);
  };
  sendEmail();

  return (
    <div>
      <div className="flex justify-center items-center pt-40">
        <p className="pr-8">
          {status === "approved" && "Su compra fue realizada con exito ! ✔👍"}
          {status === "in_process" && "Su pago esta siendo procesado, se le avisara por email cuando este listo"}
          {status === "rejected" && "Su pago fue rechazado, por favor intente nuevamente con otro medio de pago, muchas gracias"}
        </p>
        <Link href={"/"}>
          <button className=" mt-4 overflow-hidden hover:bg-[var(--background-sec)] hover:text-black text-white bg-[var(--detail)]  rounded-lg flex content-center items-center shadow-xl text-xs font-bold px-6 h-11">
            Volver al inicio
          </button>
        </Link>
      </div>
    </div>
  );
}
