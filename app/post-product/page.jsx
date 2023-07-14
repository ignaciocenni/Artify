"use client";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useRouter } from "next/navigation";
import axios from "axios";
import validate from "./validate";
import UploadButton from "../../components/buttons/UploadButton";
import { GET_INFO } from "../../store/slice";

const postProduct = async (product) => {
  try {
    const res = (await axios.post("/api/products", product)).data;
    return { created: true, res };
  } catch (error) {
    return { created: false, error: error.message };
  }
};

export default function Page() {
  const [images, setImages] = useState({
    fileUrl: "",
    fileKey: "",
  });

  const title = images.length ? (
    <>
      <p>Carga completa</p>
      <p className="mt-2">{images.length} files</p>
    </>
  ) : null;

  const [form, setForm] = useState({
    name: "",
    description: "",
    price: "",
    stock: "",
    image: "",
    categoryId: "",
    userId: "5bdbf1b3-bec2-42d8-bc52-10a056af8adc",
  });
  const categories = useSelector((state) => state.valores.categories);
  const [errors, setErrors] = useState({});

  const router = useRouter();
  const dispatch = useDispatch();
  const handleClick = async (event) => {
    event.preventDefault();
    const product = { ...form, ...images };
    const response = await postProduct(product);
    if (response.created) {
      const { res } = response;
      const products = await (await axios.get("api/products")).data;
      dispatch(GET_INFO(products));
      router.push(`/detail/${res.id}`);
    } else alert(response.error);
  };

  const handleChange = (event) => {
    event.preventDefault();
    const { name, value } = event.target;

    let parsedValue = value;

    if (name === "price") {
      parsedValue = parseFloat(value);
    } else if (name === "stock" || name === "categoryId") {
      parsedValue = parseInt(value, 10);
    }

    setErrors(validate({ ...form, [name]: parsedValue }));
    setForm({ ...form, [name]: parsedValue });
  };
  const isFormValid = Object.keys(errors).length > 0 || Object.values(form).some((value) => value === "");

  return (
    <div>
      <section className="mt-16 text-center grid justify-center items-center">
        <form>
          <h1 className="font-semibold text-3x1">Articulo en Venta</h1>
          <br />
          <div className="mb-4">
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="username"
              type="text"
              placeholder="Titulo"
              onChange={handleChange}
              name="name"
              value={form.name}
            />
          </div>
          {errors.e1 && <p>{errors.e1}</p>}
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
          {errors.e2 && <p>{errors.e2}</p>}
          <div className="mb-4">
            <input
              className="shadow appearance-none border w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline border-ra rounded-md"
              id="price"
              type="number"
              onChange={handleChange}
              name="price"
              value={form.price}
              placeholder="Precio"
            />
            {/* <p className="text-xs italic">Please choose a password.</p> */}
          </div>
          {errors.e3 && <p>{errors.e3}</p>}
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
          {errors.e5 && <p>{errors.e5}</p>}
          {/* <div className="mb-4">
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="image"
              type="text"
              placeholder="URL de imagen"
              onChange={handleChange}
              name="image"
              value={form.image}
            />
          </div> */}
          {errors.e4 && <p>{errors.e4}</p>}
          <select className="mb-4" onChange={handleChange} name="categoryId">
            <option selected disabled>
              Seleccione su categoria
            </option>
            {categories?.map((category) => {
              const id = String(category.id);
              return (
                <option key={category.id} value={id}>
                  {category.name}
                </option>
              );
            })}
          </select>
          {errors.e6 && <p>{errors.e6}</p>}
          <div className="flex items-center justify-center">
            {isFormValid ? (
              <button
                className="bg-[var(--detail)] text-white font-bold py-2 px-4 rounded focus:outline-none  w-[250px] opacity-50  cursor-not-allowed"
                onClick={handleClick}
              >
                Continuar
              </button>
            ) : (
              <button
                className="bg-[var(--detail)] hover:bg-[var(--background-sec)] hover:text-black text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-[250px] "
                onClick={handleClick}
              >
                Continuar
              </button>
            )}
          </div>
          <div>
            <UploadButton setForm={setForm} form={form} />
          </div>
        </form>
        <p className="text-center text-gray-500 text-xs mt-52">Apify. All rights reserved.</p>
      </section>
    </div>
  );
}
