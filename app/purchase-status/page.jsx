"use client";
import { useSession } from "next-auth/react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { multiplied } from "../../store/slice";
import axios from "axios";
import ApprovedStatus from "../../components/PurchaseStatus/ApprovedStatus";
import RejectedStatus from "../../components/PurchaseStatus/RejectedStatus";
import { sendContactForm } from "../../components/lib/api";

export default function PurchaseStatus() {
  const searchParams = useSearchParams();
  const status = searchParams.get("status");
  const data = useSession();
  const form = {
    email: data?.data?.user.email,
    name: data?.data?.user.name,
    status: status,
    type: "purchase",
  };
  const productsDB = useSelector((state) => state.valores.products);
  const dispatch = useDispatch();
  const productsLS = JSON.parse(localStorage.getItem("products")) || [];
  const updatedProducts = productsDB.reduce((acc, productDB) => {
    const matchingProduct = productsLS.find(
      (productLS) => productLS.id === productDB.id
    );
    if (matchingProduct) {
      const updatedStock = productDB.stock - matchingProduct.quantity;
      return [
        ...acc,
        { id: productDB.id, stock: updatedStock >= 0 ? updatedStock : 0 },
      ];
    }
    return acc;
  }, []);

  useEffect(() => {
    if (status === "approved") {
      updatedProducts.forEach((product) => {
        const url = `http://localhost:3000/api/products/${product.id}`;
        const data = { stock: product.stock };

        axios
          .put(url, data)
          .then((response) => {
            console.log("Solicitud PUT exitosa:", response.data);
          })
          .catch((error) => {
            console.error("Error en la solicitud PUT:", error);
          });
      });
      const sendEmail = async () => {
        await sendContactForm(form);
      };
      sendEmail();
      // localStorage.removeItem("products")
      // dispatch(multiplied([]))
    } else if (status === "in_process") {
      localStorage.removeItem("products");
      dispatch(multiplied([]));
    }
  }, []);

  return (
    <div className="bg-[var(--primary)]">
      <div className="h-[8vh] p-5">
        <button className="bg-black hover:bg-gray-900 text-white font-bold py-2 px-4 rounded-tl rounded-tr rounded-bl rounded-br shadow-md mr-4 mt-2 mb-2">
          ← Volver al inicio
        </button>
      </div>
      {status === "approved" && <ApprovedStatus />}
      {status === "rejected" && <RejectedStatus />}
      <Link href={"/"}></Link>
    </div>
  );
}
