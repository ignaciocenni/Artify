"use client";

import { useEffect, useState } from "react";
import SubmitButton from "../../../../../components/buttons/SubmitButton";
import ImageSlider from "../../../../../components/DetailComponents/ImageSlider";
import axios from "axios";
import { useSelector } from "react-redux";
import Loading from "../../../../loading";

export default function EditProduct({ params }) {
  const { id } = params;
  const [product, setProduct] = useState({});
  const [errors, setErrors] = useState({});
  const provinces = useSelector((state) => state.valores.provinces);
  useEffect(() => {
    const fetching = async () => {
      const res = await axios.get(`/api/products/${id}`);
      const { name, description, price, stock, status, provinceId, image } =
        res.data;
      setProduct({
        name,
        description,
        price,
        stock,
        status,
        provinceId,
        image,
      });
    };
    fetching();
  }, [id]);

  const validateFields = () => {
    const validationErrors = {};

    if (!product.title || product.title.length < 3) {
      validationErrors.title = "El título debe tener al menos 3 caracteres";
    }
    if (!product.title || product.title.length > 40) {
      validationErrors.titleMax =
        "Porfavor sea especifico con el nombre del producto, debe tener como maximo 40 carácteres";
    }
    if (!product.description || product.description.length < 5) {
      validationErrors.description =
        "La descripción debe tener al menos 5 caracteres";
    }
    if (product.description.length > 125) {
      validationErrors.descriptionMax =
        "Porfavor sea especifico con la descripcion de su producto, debe tener como maximo 125 carácteres";
    }
    if (isNaN(product.price) || parseFloat(product.price) <= 0) {
      validationErrors.price = "El precio debe ser un número positivo";
    }
    if (parseFloat(product.price) > 999999999) {
      validationErrors.priceMax = "Porfavor ingrese un precio valido";
    }

    if (isNaN(product.stock) || parseInt(product.stock) < 0) {
      validationErrors.stock = "El stock debe ser un número entero no negativo";
    }
    if (parseInt(product.stock) > 99999) {
      validationErrors.stockMax = "Porfavor ingrese un stock valido";
    }
    setErrors(validationErrors);
    return Object.keys(validationErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validateFields()) {
      await axios.put(`/api/products/${id}`, product);
    }
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

    validateFields();
  };
  return (
    <div className="flex gap-5 mt-[10vh] ml-[34vh] bg-[var(--background)]">
      {product && product.image ? (
        <div>
          <ImageSlider image={product?.image} />
        </div>
      ) : (
        <div className="w-[53rem] h-[40rem] p-10 flex justify-center items-center">
          <Loading />
        </div>
      )}
      <section className="grid h-max justify-center text-center ">
        <h1 className="font-semibold text-3xl py-5">Editar Producto</h1>
        <select
          className="flex py-2 px-5 gap-2 items-center justify-center rounded-2xl bg-[var(--background-sec)] text-center font-semibold "
          onChange={handleChange}
          name="provinceId"
        >
          <option>Provincia</option>
          {provinces?.map((province) => {
            return (
              <option
                key={province.id}
                value={province.id}
                className="text-center font-semibold rounded-2xl"
              >
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
            className=" bg-[var(--primary)] flex  shadow appearance-none  rounded-xl w-full py-2 px-3 focus:outline-none focus:shadow-outline mb-3"
            placeholder={product?.name}
          />
          {errors.title && <p className="text-red-500">{errors.title}</p>}
          {errors.titleMax && <p className="text-red-500">{errors.titleMax}</p>}
          <label htmlFor="description">Descripción</label>
          <textarea
            name="description"
            onChange={handleChange}
            type="text"
            className="resize-none h-20 bg-[var(--primary)] flex  shadow appearance-none  rounded-xl w-full py-2 px-3 focus:outline-none focus:shadow-outline mb-3"
            placeholder={product?.description}
          />
          {errors.description && (
            <p className="text-red-500">{errors.description}</p>
          )}
          {errors.descriptionMax && (
            <p className="text-red-500">{errors.descriptionMax}</p>
          )}
          <label htmlFor="price">Precio</label>
          <input
            name="price"
            onChange={handleChange}
            type="number"
            min="0"
            className="  bg-[var(--primary)] flex  shadow appearance-none  rounded-xl w-full py-2 px-3 focus:outline-none focus:shadow-outline mb-3"
            placeholder={product?.price}
          />
          {errors.price && <p className="text-red-500">{errors.price}</p>}
          {errors.priceMax && <p className="text-red-500">{errors.priceMax}</p>}
          <label htmlFor="stock">Stock</label>
          <input
            name="stock"
            onChange={handleChange}
            type="number"
            min="0"
            className=" bg-[var(--primary)] flex shadow appearance-none  rounded-xl w-full py-2 px-3 focus:outline-none focus:shadow-outline mb-8"
            placeholder={product?.stock}
          />
          {errors.stock && <p className="text-red-500">{errors.stock}</p>}
          {errors.stockMax && <p className="text-red-500">{errors.stockMax}</p>}
          <SubmitButton label={"Guardar"} />
        </form>
      </section>
    </div>
  );
}
