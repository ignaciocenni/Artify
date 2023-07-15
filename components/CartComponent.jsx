"use client";

import { useEffect, useState } from "react";
import BuyNowButton from "../components/buttons/BuyNowButton";
import CardCart from "../app/cart/cardCart/CardCart";
import { useSelector } from "react-redux";
export default function CartComponent() {
 const total = useSelector((state) => state.valores.totalPrice)
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const cartProducts = JSON.parse(localStorage.getItem("products")) || [];
    setProducts(cartProducts);
  }, []);

  return (
    <div className="flex mx-auto w-full md:w-3/5 lg:w-2/5 xl:w-1/3 items-start justify-center gap-10">
      <div className="flex flex-col p-4 bg-[var(--primary)] rounded-2xl shadow-md shadow-gray-600">
        <h1 className="text-2xl font-medium pb-2  ">Productos</h1>
        {products.length &&
          products.map((product) => (
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
        <h1 className="font-bold">${total}</h1>
        <BuyNowButton />
      </div>
    </div>
  );
}
