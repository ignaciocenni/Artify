"use client";

import { useState } from "react";
import axios from "axios";

const postProduct = async (form) => {
  try {
    const response = await axios.post("http://localhost:3000/api/products", form);
    console.log(response.data);
  } catch (error) {
    console.log(error.message);
  }
};
export default function Page() {
  const [form, setForm] = useState({
    name: "",
    description: "",
    price: "",
    stock: "",
    image: "",
    categoryId: "",
    userId: "",
  });
  const handleClick = () => {
    event.preventDefault();
    postProduct(form);
    console.log("Producto creado con exito");
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    let parsedValue = value;
    if (name === "price") {
      parsedValue = parseFloat(value);
    } else if (name === "stock" || name === "categoryId" || name === "userId") {
      parsedValue = parseInt(value, 10);
    }

    setForm({ ...form, [name]: parsedValue });
  };

  return (
    <div className=" text-center h-[100vh] grid justify-center items-center">
      <form>
        <h1 className="font-semibold text-3x1">Porfavor ingrese los datos de su producto!</h1>
        <br />
        <div className="mb-4">
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="username"
            type="text"
            placeholder="Nombre del producto"
            onChange={handleChange}
            name="name"
            value={form.name}
          />
        </div>
        <div className="mb-4">
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="description"
            type="text"
            placeholder="Descripción"
            onChange={handleChange}
            name="description"
            value={form.description}
          />
        </div>
        <div className="mb-4">
          <input
            className="shadow appearance-none border w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline border-ra rounded-md"
            id="price"
            type="number"
            onChange={handleChange}
            name="price"
            value={form.price}
            placeholder="Precio"
          />
          {/* <p className="text-xs italic">Please choose a password.</p> */}
        </div>
        <div className="mb-4">
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="stock"
            type="number"
            placeholder="Stock"
            onChange={handleChange}
            name="stock"
            value={form.stock}
          />
        </div>
        <div className="mb-4">
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="image"
            type="text"
            placeholder="URL de imagen"
            onChange={handleChange}
            name="image"
            value={form.image}
          />
        </div>
        <div className="mb-4">
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="userId"
            type="nummber"
            placeholder="Id relacionado al usuario"
            onChange={handleChange}
            name="userId"
            value={form.userId}
          />
        </div>
        <div className="mb-4">
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="categoryId"
            type="number"
            placeholder="Id relacionado a la categoria"
            onChange={handleChange}
            name="categoryId"
            value={form.categoryId}
          />
        </div>
        <div className="flex items-center justify-center">
          <button
            className="bg-[var(--detail)] hover:bg-[var(--background-sec)] hover:text-black text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-[250px]"
            onClick={handleClick}
          >
            Continuar
          </button>
        </div>
      </form>
      <p className="text-center text-gray-500 text-xs">Apify. All rights reserved.</p>
    </div>
  );
}
