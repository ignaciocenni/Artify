"use client";
import axios from "axios";
import { useState } from "react";
import MpButton from "../../components/mercadoPagoButton/MpButton";
import { usePathname } from "next/navigation";

const postProductsMP = async (productsClean) => {
  try {
    const res = await axios.post("/api/checkoutPro", productsClean);
    const { id } = res.data;
    return id;
  } catch (error) {
    return { error: error.message };
  }
};

const BuyNowButton = () => {
  const path = usePathname();
  const [id, setId] = useState("");
  const products = JSON.parse(localStorage.getItem("products")) || [];
  const productsClean = products.map((product) => {
    return {
      id: product.id,
      description: product.description,
      name: product.title,
      price: product.unit_price,
      stock: product.quantity,
    };
  });
  const handleClick = async (event) => {
    event.preventDefault();
    const response = await postProductsMP(productsClean);
    setId(response);
  };
  return (
    <div>
      {path === "/cart" && (
        <button
          onClick={handleClick}
          className="hover:bg-[var(--background-sec)] hover:text-black w-full text-white bg-[var(--detail)] py-5 justify-center rounded-lg flex content-center items-center gap-5 shadow-xl"
        >
          <h1 className="text-xs font-extrabold">Detalles de compra</h1>
        </button>
      )}
      {id && <MpButton id={id} />}
    </div>
  );
};

export default BuyNowButton;
