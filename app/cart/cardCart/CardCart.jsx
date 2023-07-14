"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import numberConverte from "./numberConverte";

export default function CardCart({ id, image, name, price, stock }) {
  const [quantity, setQuantity] = useState(1);
  const [restStock, setrestStock] = useState(stock - quantity);
  const total = numberConverte(price * quantity);

  const handlerPlus = () => {
    if (restStock > 0) {
      setQuantity(quantity + 1), setrestStock(restStock - 1);
    }
  };
  const handlerRest = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1), setrestStock(restStock + 1);
    }
  };
  return (
    <div className="flex py-4 mb-4 border-b-gray-00 border-b-2 gap-2 justify-between ">
      <div className="flex gap-2">
        <div className="flex flex-col gap-4">
          <div className="relative h-24 w-24 mr-4">
            <Image
              id={id}
              alt={`Imagen de producto ${name}`}
              src={image}
              fill
              sizes="100vw"
              style={{
                objectFit: "cover",
              }}
              className="rounded-3xl"
            />
          </div>
          <div className="w-max flex items-center text-white ">
            <button
              className="px-3  py-1 rounded-l-lg hover:bg-[var(--background-sec)] hover:text-black text-white font-bold bg-[var(--detail)]  flex content-center items-center shadow-xl transition-colors "
              onClick={handlerRest}>
              -
            </button>

            <div className="inline-block w-max  py-1 bg-[var(--detail)] text-white px-3">
              {quantity}
            </div>
            <button
              className="px-3  py-1 rounded-r-lg hover:bg-[var(--background-sec)] hover:text-black text-white font-bold bg-[var(--detail)]  flex content-center items-center shadow-xl transition-colors "
              onClick={handlerPlus}>
              +
            </button>
          </div>
        </div>
        <div className="flex flex-col items-start">
          <p className="font-medium text-xl">{name}</p>
          <p>${price} ARS</p>
          <p>{restStock} unidades disponibles</p>
        </div>
      </div>

      <div className="flex items-end">
        <h1 className=" ml-auto text-xl font-medium" >${total}</h1>
      </div>
    </div>
  );
}
