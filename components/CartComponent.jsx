"use client";

import { useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import BuyNowButton from "./buttons/BuyAndDetail";
import CardCart from "../app/cart/cardCart/CardCart";
import { useSelector } from "react-redux";

import numberConverte from "../app/cart/cardCart/numberConverte";


export default function CartComponent() {
  const total = useSelector((state) => state.valores.totalPrice);
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const cartProducts = JSON.parse(localStorage.getItem("products")) || [];
    setProducts(cartProducts);
  }, []);
  const user = useSession();
  return (
    <div className="flex mx-auto w-full md:w-3/5 lg:w-2/5 xl:w-1/3 items-start justify-center gap-10">
      <h1>{}</h1>
      <div className="flex flex-col p-4 bg-[var(--primary)] rounded-2xl shadow-md shadow-gray-600">
        <h1 className="text-2xl font-medium pb-2  ">Productos</h1>
        {products.length == 0
          ? ""
          : products.map((product) => (
              <CardCart
                key={product.id}
                id={product.id}
                name={product.title}
                image={product.image}
                price={product.unit_price}
                stock={product.stock}
                quantity={product.quantity}
                setProducts={setProducts}
              />
            ))}
      </div>
      <div className="flex flex-col p-4 bg-[var(--primary)] rounded-2xl shadow-md shadow-gray-600">

        <h1 className="font-bold">${numberConverte(total)}</h1>
        {user.data ? <BuyNowButton /> : "Inicia sesion para comprar!"}

      </div>
    </div>
  );
}
