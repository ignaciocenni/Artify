"use client";
import axios from "axios";
import Link from "next/link";
import ApprovedStatus from "../../components/PurchaseStatus/ApprovedStatus";
import RejectedStatus from "../../components/PurchaseStatus/RejectedStatus";
import { useSession } from "next-auth/react";
import { useSearchParams } from "next/navigation";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { multiplied } from "../../store/slice";
import { sendContactForm } from "../../components/lib/api";

export default function PurchaseStatusComponent() {
  const dispatch = useDispatch();
  const data = useSession();
  const base_url = process.env.BASE_URL;
  const searchParams = useSearchParams();
  const status = searchParams.get("status");
  const sendEmail = async () => {
    if(data?.data?.user.email && data?.data?.user.name !== undefined){
      const form = {
        email:  data?.data?.user.email,
        name:  data?.data?.user.name,
        status: status,
        type: "purchase",
      };
      await sendContactForm(form);
    }
  };
  
  let customer = "";
  useEffect(() => {
    sendEmail()
    customer = data?.data?.user.id;
    const productsLS = JSON.parse(localStorage.getItem("products")) || [];
    const updatedStockProducts = productsLS.map((product) => ({
      id: product.id,
      stock: product.stock - product.quantity,
    }));

    if (status === "approved") {
      updatedStockProducts.forEach((product) => {
        const url = `${base_url}/api/products/${product.id}`;
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
      productsLS.forEach((product) => {
        const url = `${base_url}api/sales`;
        const data = {
          productId: product.id,
          sellerId: product.sellerId,
          totalPrice: product.unit_price * product.quantity,
          customerId: customer,
          productQuantity: product.quantity,
        };

        axios
          .post(url, data)
          .then((response) => {
            console.log(response);
          })
          .catch((error) => {
            console.log(error.message);
          });
      });

      if (localStorage) {
        localStorage.removeItem("products");
        dispatch(multiplied([]));
      }
    } else if (status === "in_process" && localStorage) {
      localStorage.removeItem("products");
      dispatch(multiplied([]));
    }

  }, [data?.data?.user.email, data?.data?.user.name]);

  return (
    <div className="bg-[var(--primary)]">
      <div className="h-[8vh] p-5">
        <Link href={"/"}>
        <button className="bg-black hover:bg-gray-900 text-white font-bold py-2 px-4 rounded-tl rounded-tr rounded-bl rounded-br shadow-md mr-4 mt-2 mb-2">
          ← Volver al inicio
        </button>
        </Link>
      </div>
      {status === "approved" && <ApprovedStatus />}
      {status === "rejected" && <RejectedStatus />}
    </div>
  );
}