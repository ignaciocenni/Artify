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

  const form = {
    email: data?.data?.user.email,
    name: data?.data?.user.name,
    status: status,
    type: "purchase",
  };
  useEffect(() => {
    const productsLS = JSON.parse(localStorage.getItem("products")) || [];
    const updatedStockProducts = productsLS.map((product) => ({
      id: product.id,
      stock: product.stock - product.quantity,
    }));

    if (status === "approved") {
      updatedStockProducts.forEach((product) => {
        const url = `${base_url}api/products/${product.id}`;
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
          const response = axios.post(
            `${base_url}api/users`,
            data?.data?.user
          ).data;
          console.log(response);
        } catch (error) {
          console.log(error.message);
        }
      }
      productsLS.forEach((product) => {
        const url = `${base_url}api/${product.id}`; /* hay que cambiar esta URL*/
        const data = {
          productId: product.id,
          sellerId: product.sellerId,
          totalPrice: product.unit_price * product.quantity,
        };

        axios
          .put(url, data)
          .then((response) => {
            console.log(response);
          })
          .catch((error) => {
            console.log(error.message);
          });
      });

      const sendEmail = async () => {
        await sendContactForm(form);
      };
      sendEmail();

      if (localStorage) {
        localStorage.removeItem("products");
        dispatch(multiplied([]));
      }
    } else if (status === "in_process" && localStorage) {
      localStorage.removeItem("products");
      dispatch(multiplied([]));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
