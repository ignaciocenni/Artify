"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import numberConverte from "./numberConverte";

export default function CardCart({ id, image, name, price, stock, quantity }) {

  const initializeState = () => {
    const storedProducts = JSON.parse(localStorage.getItem("products")) || [];
    const existingProduct = storedProducts.find(p => p.title === name);

    if (existingProduct) {
      return {
        arrProduct: storedProducts,
        currentQuantity: existingProduct.quantity,
      };
    } else {
      return {
        arrProduct: storedProducts,
        currentQuantity: product.quantity,
      };
    }
  };

  const [arrProduct, setArrProduct] = useState([]);
  const [currentQuantity, setCurrentQuantity] = useState(1);
  console.log(arrProduct);
  useEffect(() => {
    const { arrProduct, currentQuantity } = initializeState();
    setArrProduct(arrProduct);
    setCurrentQuantity(currentQuantity);
  }, [quantity]);

  const handleAddProduct = () => {
    if (currentQuantity + 1 > stock) {
      return; 
    }

    const existingProduct = arrProduct.find(p => p.title === name);

    if (existingProduct) {
      existingProduct.quantity += 1;
      existingProduct.multiplied = price * (currentQuantity + 1)
      setCurrentQuantity(existingProduct.quantity);
      localStorage.setItem("products", JSON.stringify(arrProduct));
    } else {
      const updatedProduct = { ...product };
      updatedProduct.quantity = currentQuantity + 1;
      setArrProduct(prevArrProduct => [...prevArrProduct, updatedProduct]);
      localStorage.setItem(
        "products",
        JSON.stringify([...arrProduct, updatedProduct])
      );
      setCurrentQuantity(updatedProduct.quantity);
    }
  };

  const handleDeductProduct = () => {
    if (currentQuantity > 1) {
      setCurrentQuantity(prevQuantity => prevQuantity - 1);
      const existingProduct = arrProduct.find(p => p.title === name);

      if (existingProduct) {
        existingProduct.quantity -= 1;
        localStorage.setItem("products", JSON.stringify(arrProduct));
      }
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
              onClick={handleDeductProduct}>
              -
            </button>

            <div className="inline-block w-max  py-1 bg-[var(--detail)] text-white px-3">
              {currentQuantity}
            </div>
            <button
              className="px-3  py-1 rounded-r-lg hover:bg-[var(--background-sec)] hover:text-black text-white font-bold bg-[var(--detail)]  flex content-center items-center shadow-xl transition-colors "
              onClick={handleAddProduct}>
              +
            </button>
          </div>
        </div>
        <div className="flex flex-col items-start">
          <p className="font-medium text-xl">{name}</p>
          <p>${price} ARS</p>
          <p>{stock - currentQuantity} unidades disponibles</p>
        </div>
      </div>

      <div className="flex items-end">
        <h1 className=" ml-auto text-xl font-medium" >${quantity * price}</h1>
      </div>
    </div>
  );
}
