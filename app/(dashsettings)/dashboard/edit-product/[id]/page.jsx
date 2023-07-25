"use client";

import { useEffect, useState } from "react";
import SubmitButton from "../../../../../components/buttons/SubmitButton";
import axios from "axios";
import { useSelector } from "react-redux";

export default function ({ params }) {
  const { id } = params;
  const [product, setProduct] = useState();
  const provinces = useSelector((state) => state.valores.provinces);
  useEffect(() => {
    const fetching = async () => {
      const res = await axios.get(`/api/products/${id}`);
      const { name, description, price, stock, status, provinceId, image } = res.data;
      setProduct({ name, description, price, stock, status, provinceId, image });
    };
    fetching();
  }, [id]);
  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.put(`/api/products/${id}`, product);
  };
  const handleChange = (e) => {
    let value = e.target.value;
    if (e.target.name === "price") {
      value = parseFloat(value);
    }
    if (e.target.name === "stock") {
      value = +value;
    }
    setProduct({ ...product, [e.target.name]: value });
  };

  return (
    <section className="w-full grid h-max justify-center text-center ">
      <h1 className=" h-23 font-semibold text-3xl py-5">Editar Producto</h1>
      {/* <ImageSlider image={[logo.src]} /> */}
      <select
        className="flex py-2 px-5 gap-2 items-center justify-center rounded-2xl bg-[#e0d8ffea] text-center font-semibold "
        onChange={handleChange}
        name="provinceId"
      >
        <option>Provincia</option>
        {provinces?.map((province) => {
          return (
            <option key={province.id} value={province.id} className="text-center font-semibold rounded-2xl">
              {province.name}
            </option>
          );
        })}
      </select>
      <form onSubmit={handleSubmit} className=" text-left  w-96">
        <label htmlFor="">Título</label>
        <input
          name="title"
          onChange={handleChange}
          type="text"
          className=" bg-[var(--primary)] flex font-bold text-1xl shadow appearance-none  rounded-xl w-full py-2 px-3 focus:outline-none focus:shadow-outline mb-3"
          placeholder={product?.name}
        />
        <label htmlFor="description">Descripción</label>
        <textarea
          name="description"
          onChange={handleChange}
          type="text"
          className="resize-none h-20 bg-[var(--primary)] flex font-bold text-1xl shadow appearance-none  rounded-xl w-full py-2 px-3 focus:outline-none focus:shadow-outline mb-3"
          placeholder={product?.description}
        />
        <label htmlFor="price">Precio</label>
        <input
          name="price"
          onChange={handleChange}
          type="number"
          min="0"
          className="  bg-[var(--primary)] flex font-bold text-1xl shadow appearance-none  rounded-xl w-full py-2 px-3 focus:outline-none focus:shadow-outline mb-3"
          placeholder={product?.price}
        />
        <label htmlFor="stock">Stock</label>
        <input
          name="stock"
          onChange={handleChange}
          type="number"
          min="0"
          className=" bg-[var(--primary)] flex font-bold text-1xl shadow appearance-none  rounded-xl w-full py-2 px-3 focus:outline-none focus:shadow-outline mb-8"
          placeholder={product?.stock}
        />
        <SubmitButton label={"Guardar"} />
      </form>
    </section>
  );
}
