"use client";

import { useEffect, useState } from "react";

const AddDeductButtons = ({ data }) => {
  const product = {
    title: data.name,
    unit_price: data.price,
    quantity: 1,
  };
  const [currentStock, setCurrentStock] = useState(0);
  const [arrProduct, setArrProduct] = useState([]);
  console.log(product);
  console.log(arrProduct);
  // const handleAddProduct = () => {
  //     if(data.stock <= currentStock){
  //         product.quantity = product.quantity + currentStock
  //         setCurrentStock(currentStock + 1);
  //         setArrProduct([...arrProduct, product])
  //         return updatedProduct;
  //     }
  //   };
  const localStorageSave = () => {
    try {
      const existingData = JSON.parse(localStorage.getItem("products")) || [];
      const productIndex = existingData.findIndex(
        (p) => p.title === product.title
      );
      if (productIndex !== -1) {
        existingData[productIndex] = product;
      } else {
        existingData.push(product);
      }
      localStorage.setItem("products", JSON.stringify(existingData));
    } catch (error) {
      console.error("Error al guardar los datos en localStorage:", error);
      // Maneja el error según sea necesario (por ejemplo, muestra un mensaje de error al usuario)
    }
  };
  const handleAddProduct = () => {
    if (data.stock > currentStock) {
      const updatedProduct = { ...product };
      updatedProduct.quantity = updatedProduct.quantity + 1;
  
      const productIndex = arrProduct.findIndex(
        (p) => p.title === updatedProduct.title
      );
      if (productIndex !== -1) {
        const updatedArrProduct = [...arrProduct];
        updatedArrProduct[productIndex] = updatedProduct;
        setArrProduct(updatedArrProduct);
      } else {
        setArrProduct([...arrProduct, updatedProduct]);
      }
  
      localStorageSave();
    }
  };
  const handleDeductProduct = () => {
    if (currentStock > 0) {
      const updatedProduct = { ...product };
      updatedProduct.quantity = updatedProduct.quantity - 1;
  
      const productIndex = arrProduct.findIndex(
        (p) => p.title === updatedProduct.title
      );
      if (productIndex !== -1) {
        const updatedArrProduct = [...arrProduct];
        updatedArrProduct[productIndex] = updatedProduct;
        setArrProduct(updatedArrProduct);
      } else {
        setArrProduct([...arrProduct, updatedProduct]);
      }
  
      localStorageSave();
    }
  };
  

  return (
    <div className="flex items-center">
      <button
        onClick={handleAddProduct}
        className="hover:bg-[var(--background-sec)] hover:text-black w-[100%] text-white bg-[var(--detail)] py-5  rounded-lg flex content-center items-center gap-5 shadow-xl"
      >
        <h1 className="text-xs font-extrabold">Sumar producto</h1>
      </button>
      <p>{product.quantity}</p>
      <button 
      onClick={handleDeductProduct}
      className="hover:bg-[var(--background-sec)] hover:text-black w-[100%] text-white bg-[var(--detail)] py-5  rounded-lg flex content-center items-center gap-5 shadow-xl">
        <h1 className="text-xs font-extrabold">Restar producto</h1>
      </button>
    </div>
  );
};
export default AddDeductButtons;
