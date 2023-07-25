import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { localProducts } from "../../../store/slice";
import { Flip, ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Image from "next/image";
import numberConverte from "./numberConverte";
import ButtonCloseCart from "../../../components/buttons/ButtonCloseCart";

const CardCart = ({
  id,
  image,
  name,
  price,
  stock,
  quantity,
  setProducts,
  setUrl,
}) => {
  const dispatch = useDispatch();

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
  const [notificationStatus, setNotificationStatus] = useState({});

  useEffect(() => {
    const { arrProduct, currentQuantity } = initializeState();
    setArrProduct(arrProduct);
    setCurrentQuantity(currentQuantity);
    setNotificationStatus({}); // Resetear los estados de notificación al cambiar el producto
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [quantity]);

  const handleAddProduct = () => {
    setUrl("");
    if (currentQuantity + 1 <= stock) {
      const updatedArrProduct =
        JSON.parse(localStorage.getItem("products")) || [];

      const updatedProduct = updatedArrProduct.find((p) => p.id === id);
      if (updatedProduct) {
        updatedProduct.quantity += 1;
      }

      setArrProduct(updatedArrProduct);
      setCurrentQuantity((prevQuantity) => prevQuantity + 1);

      localStorage.setItem("products", JSON.stringify(updatedArrProduct));
      updateCart(updatedArrProduct);

      if (!notificationStatus[id]?.isProductAdded) {
        const notify = () =>
          toast.success("El producto"+` "${name}" `+"fue añadido al carrito!", {
            position: "top-right",
            autoClose: 1500,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
            transition: Flip,
          });
        notify();
        setNotificationStatus((prevStatus) => ({
          ...prevStatus,
          [id]: { isProductAdded: true, isProductRemoved: false },
        }));
      }

      setNotificationStatus((prevStatus) => ({
        ...prevStatus,
        [id]: { ...prevStatus[id], isProductRemoved: false },
      }));
    }
  };

  const handleDeductProduct = () => {
    setUrl("");
    if (currentQuantity > 1) {
      const updatedArrProduct =
        JSON.parse(localStorage.getItem("products")) || [];

      const updatedProduct = updatedArrProduct.find((p) => p.id === id);
      if (updatedProduct) {
        updatedProduct.quantity -= 1;
      }

      setArrProduct(updatedArrProduct);
      setCurrentQuantity((prevQuantity) => prevQuantity - 1);

      localStorage.setItem("products", JSON.stringify(updatedArrProduct));
      updateCart(updatedArrProduct);

      if (!notificationStatus[id]?.isProductRemoved) {
        const notify = () =>
          toast.error("El producto"+` "${name}" `+"fue eliminado del carrito!", {
            position: "top-right",
            autoClose: 1500,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
            transition: Flip,
          });
        notify();
        setNotificationStatus((prevStatus) => ({
          ...prevStatus,
          [id]: { ...prevStatus[id], isProductRemoved: true, isProductAdded: false },
        }));
      }

      setNotificationStatus((prevStatus) => ({
        ...prevStatus,
        [id]: { ...prevStatus[id], isProductAdded: false },
      }));
    }
  };

  return (
    <>
    <div className="flex py-4 mb-4 border-b-2 gap-2 justify-between w-full ">
      <div className="flex gap-2 ">
        <div className="flex flex-col mr-5 items-center justify-center gap-4">
          <div className="relative h-32 w-32 ">
            <Image
              id={id}
              alt={`Imagen de producto ${name}`}
              src={image[0]}
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

            <div className="inline-block w-max  py-1 bg-[var(--detail)] text-white px-3">
              {currentQuantity}
            </div>
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
            {stock - currentQuantity}{" "}
            {stock - currentQuantity === 1
              ? `unidad disponible`
              : `unidades disponibles`}
          </p>
        </div>
      </div>

      <div className="flex flex-col items-end justify-between">
        <ButtonCloseCart id={id} setProducts={setProducts} setUrl={setUrl} />
        <h1 className=" text-xl font-medium">
          ${numberConverte(currentQuantity * price)}
        </h1>
      </div>
    </div>
  <ToastContainer />
    </>
  );
};

export default CardCart;
