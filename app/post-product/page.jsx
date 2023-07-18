"use client";
import { useState } from "react";
import { useSession } from "next-auth/react";
import { useSelector, useDispatch } from "react-redux";
import { useRouter } from "next/navigation";
import axios from "axios";
import validate from "./validate";
import UploadButton from "../../components/buttons/UploadButton";
import { GET_INFO } from "../../store/slice";
import ImageSlider from "../../components/DetailComponents/ImageSlider";
import logo from "../../public/images/logo.svg";
import CategoryLabel from "../../components/DetailComponents/CategoryLabel";
import Heart from "../../components/Heart";
import Stars from "../../components/Stars";
import ProvinceFilter from "../../components/Filters/ProvinceFilter";
import Footer from "../../components/Footer";

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

  const data = useSession()

  const [form, setForm] = useState({
    name: "",
    description: "",
    price: "",
    stock: "",
    image: "",
    categoryId: "",
    city: "",
    userEmail: data?.user?.email || null,
    authName: data?.user?.name || null,
    authImage:data?.user?.image || null,
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
  const isFormValid =
    Object.keys(errors).length > 0 ||
    Object.values(form).some((value) => value === "");

  return (
    <>
      <div className="flex gap-8 justify-center pb-20">
        <div>
          <ImageSlider image={form.image ? form.image : logo} />
        </div>
        <section className="text-center grid justify-center items-center">
          <form>
            <h1 className="font-semibold text-3xl py-5">
              Previsualización del articulo a publicar
            </h1>
            <div className="flex flex-col items-start w-64">
              <select
                className="flex py-2 px-5 gap-2 items-center justify-center rounded-2xl bg-[var(--background-sec)] text-center font-semibold "
                onChange={handleChange}
                name="categoryId">
                <option selected disabled>
                  Seleccione su categoria
                </option>
                {categories?.map((category) => {
                  const id = String(category.id);
                  return (
                    <option
                      key={category.id}
                      value={id}
                      className="text-center font-semibold rounded-2xl">
                      {category.name}
                    </option>
                  );
                })}
              </select>
              {errors.categoryId && (
                <p className="text-red-700 font-medium text-xs">{errors.categoryId}</p>
              )}
            </div>

            <br />
            <div className="flex justify-center items-center gap-2 py-2">
              <input
                className="flex gap-3 font-bold text-3xl shadow appearance-none  rounded-xl w-full py-2 px-3 focus:outline-none focus:shadow-outline"
                id="username"
                type="text"
                placeholder="Titulo"
                onChange={handleChange}
                name="name"
                value={form.name}
              />
              <Heart />
            </div>
            {errors.name && (
              <p className="text-red-700 font-medium text-xs">{errors.name}</p>
            )}
            <div className="flex content-center items-center py-2">
              <Stars />
            </div>
            <div className="flex flex-col gap-2 justify-start items-start py-2">
              <div className="flex justify-start items-center">
                <h1 className="text-4xl font-bold">$</h1>
                <input
                  className="text-4xl font-bold shadow appearance-none border py-2 px-3 focus:outline-none focus:shadow-outline rounded-xl"
                  id="price"
                  type="number"
                  onChange={handleChange}
                  name="price"
                  value={form.price}
                />
              </div>
              {errors.price && (
                <p className="text-red-700 font-medium text-xs">{errors.price}</p>
              )}
            </div>
            <div className="flex flex-col items-start py-5 ">
              <div className="flex items-center gap-3">
                <h1 className="text-sm font-light">Publicado hoy en</h1>
                <ProvinceFilter />
              </div>
              {errors.city && (
                <p className="text-red-700 font-medium text-xs">{errors.city}</p>
              )}
            </div>
            <div className="flex flex-col items-start mb-4 gap-2">
              <h1 className="font-medium text-xl">Descripción del vendedor</h1>
              <textarea
                className=" resize-y shadow appearance-none border rounded w-full h-64 py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="description"
                type="text"
                onChange={handleChange}
                name="description"
                value={form.description}
              />
              {errors.description && (
                <p className="text-red-700 font-medium text-xs">{errors.description}</p>
              )}
            </div>

            <div className="flex flex-col items-start mb-4 gap-2">
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="stock"
                type="number"
                placeholder="Stock"
                onChange={handleChange}
                name="stock"
                value={form.stock}
              />
              {errors.stock && (
                <p className="text-red-700 font-medium text-xs">{errors.stock}</p>
              )}
            </div>

            <UploadButton setForm={setForm} form={form} />

            <div className="flex items-center justify-center">
              {isFormValid ? (
                <button
                  className="bg-[var(--detail)] text-white font-bold py-2 px-4 rounded focus:outline-none  w-[250px] opacity-50  cursor-not-allowed"
                  onClick={handleClick}>
                  Continuar
                </button>
              ) : (
                <button
                  className="bg-[var(--detail)] hover:bg-[var(--background-sec)] hover:text-black text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-[250px] "
                  onClick={handleClick}>
                  Continuar
                </button>
              )}
            </div>
          </form>
        </section>
      </div>
      <Footer />
    </>
  );
}
