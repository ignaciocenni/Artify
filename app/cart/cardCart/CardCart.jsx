import Image from "next/image";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { localProducts } from "../../../store/slice";
import numberConverte from "./numberConverte";
import ButtonCloseCart from "../../../components/buttons/ButtonCloseCart";

export default function CardCart({ id, image, name, price, stock, quantity, setProducts }) {
  const dispatch = useDispatch();
  const total = useSelector((state) => state.valores.totalPrice);

  const updateCart = (updatedArrProduct) => {
    dispatch(localProducts(updatedArrProduct));
  };

  const initializeState = () => {
    const storedProducts = JSON.parse(localStorage.getItem("products")) || [];
    const existingProduct = storedProducts.find((p) => p.id === id);

    if (existingProduct) {
      return {
        arrProduct: storedProducts,
        currentQuantity: existingProduct.quantity,
      };
    } else {
      return {
        arrProduct: storedProducts,
        currentQuantity: quantity,
      };
    }
  };

  const [arrProduct, setArrProduct] = useState([]);
  const [currentQuantity, setCurrentQuantity] = useState(1);

  useEffect(() => {
    const { arrProduct, currentQuantity } = initializeState();
    setArrProduct(arrProduct);
    setCurrentQuantity(currentQuantity);
  }, [quantity]);

  const handleAddProduct = () => {
    if (currentQuantity + 1 <= stock) {
      const updatedArrProduct = JSON.parse(localStorage.getItem("products")) || [];

      const updatedProduct = updatedArrProduct.find((p) => p.id === id);
      if (updatedProduct) {
        updatedProduct.quantity += 1;
      }

      setArrProduct(updatedArrProduct);
      setCurrentQuantity((prevQuantity) => prevQuantity + 1);

      localStorage.setItem("products", JSON.stringify(updatedArrProduct));
      updateCart(updatedArrProduct);
      console.log(updatedArrProduct);
      dispatch(localProducts(updatedArrProduct));
    }
  };
  const handleDeductProduct = () => {
    if (currentQuantity > 1) {
      const updatedArrProduct = JSON.parse(localStorage.getItem("products")) || [];

      const updatedProduct = updatedArrProduct.find((p) => p.id === id);
      if (updatedProduct) {
        updatedProduct.quantity -= 1;
      }

      setArrProduct(updatedArrProduct);
      setCurrentQuantity((prevQuantity) => prevQuantity - 1);

      localStorage.setItem("products", JSON.stringify(updatedArrProduct));
      updateCart(updatedArrProduct);
      console.log(updatedArrProduct);
      dispatch(localProducts(updatedArrProduct));
    }
  };

  return (
    <div className="flex py-4 mb-4 border-b-gray-00 border-b-2 gap-2 justify-between ">
      <ButtonCloseCart id={id} setProducts={setProducts} />
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
              onClick={handleDeductProduct}
            >
              -
            </button>

            <div className="inline-block w-max  py-1 bg-[var(--detail)] text-white px-3">{currentQuantity}</div>
            <button
              className="px-3  py-1 rounded-r-lg hover:bg-[var(--background-sec)] hover:text-black text-white font-bold bg-[var(--detail)]  flex content-center items-center shadow-xl transition-colors "
              onClick={handleAddProduct}
            >
              +
            </button>
          </div>
        </div>
        <div className="flex flex-col items-start">
          <p className="font-medium text-xl">{name}</p>
          <p>${price} ARS</p>
          <p>
            {stock - currentQuantity} {stock - currentQuantity === 1 ? `unidad disponible` : `unidades disponibles`}
          </p>
        </div>
      </div>

      <div className="flex items-end">
        <h1 className=" ml-auto text-xl font-medium">${numberConverte(currentQuantity * price)}</h1>
      </div>
    </div>
  );
}
