"use client";

import { useEffect, useState } from "react";
import BuyAndDetail from "./buttons/BuyAndDetail";
import { useSession } from "next-auth/react";
import CardCart from "../app/cart/cardCart/CardCart";
import { useSelector } from "react-redux";
import cart from "../public/images/cart.svg";
import Image from "next/image";
import Link from "next/link";
//import numberConverte from "../app/cart/cardCart/numberConverte";

export default function CartComponent() {
  const total = useSelector((state) => state.valores.totalPrice);
  const [url, setUrl] = useState("");
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const cartProducts = JSON.parse(localStorage.getItem("products")) || [];
    setProducts(cartProducts);
  }, []);
  const user = useSession();
  return (
    <>
      {products.length ? (
        <div className="flex pt-6 mx-auto w-full md:w-3/5 lg:w-2/3 xl:w-2/3  items-start justify-center gap-10 "> 
          <div className="flex flex-col w-full p-4 bg-[var(--primary)] rounded-2xl shadow-md shadow-gray-600">
            <h1 className="text-2xl font-medium pb-2  ">Productos</h1>
            {products.map((product) => (
              <CardCart
                key={product.id}
                id={product.id}
                name={product.title}
                image={product.image}
                price={product.unit_price}
                stock={product.stock}
                quantity={product.quantity}
                setProducts={setProducts}
                setUrl={setUrl}
              />
            ))}
          </div>
          <div className="flex flex-col p-4 bg-[var(--primary)] pt-5 rounded-2xl shadow-md shadow-gray-600">
            <h1 className="font-bold w-80">{!url ? `Total: $${total}` : ""}</h1>

            {user.data ? (
              <BuyAndDetail setUrl={setUrl} url={url} />
            ) : (
              "Inicia sesion para comprar!"
            )}
          </div>
        </div>
      ) : (
        <div className="flex flex-col h-[90vh] mx-auto w-full md:w-3/5 lg:w-2/5 xl:w-1/3 items-center justify-center content-center gap-10">
          <div className="p-3 relative hover:bg-[var(--primary)] hover:shadow-lg rounded-full ">
            <Image src={cart} alt="cart" width={35} height={25} />
            {products.length === 0 ? (
              <div className="absolute bottom-1 right-1 flex items-center justify-center w-6 h-6 bg-[var(--extra)] rounded-full border-2 border-black">
                <span className="text-white text-xs">X</span>
              </div>
            ) : (
              ""
            )}
          </div>
          <p>Su carrito esta vacio</p>
          <Link href={"/"}>
            <button className="hover:bg-[var(--background-sec)] hover:text-black w-full text-white bg-[var(--detail)] py-3 px-2 justify-center rounded-lg flex content-center items-center gap-5 shadow-xl">
              Seguir comprando
            </button>
          </Link>
        </div>
      )}
    </>
  );
}
