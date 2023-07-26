import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { localProducts } from "../../store/slice";
import { Flip, ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useRouter } from "next/navigation";

const AddDeductButtons = ({ data }) => {
  const router = useRouter();
  const dispatch = useDispatch();
  const updateCart = () => {
    const currentProducts = JSON.parse(localStorage.getItem("products")) || [];
    dispatch(localProducts(currentProducts));
  };

  const product = {
    id: data.id,
    sellerId: data.userId,
    image: data.image,
    title: data.name,
    unit_price: data.price,
    quantity: 0,
    stock: data.stock,
  };

  const initializeState = () => {
    const storedProducts = JSON.parse(localStorage.getItem("products")) || [];
    const existingProduct = storedProducts.find(
      (p) => p.title === product.title
    );

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
  const [isProductAdded, setIsProductAdded] = useState(false);
  const [isProductRemoved, setIsProductRemoved] = useState(false);

  useEffect(() => {
    const { arrProduct, currentQuantity } = initializeState();
    setArrProduct(arrProduct);
    setCurrentQuantity(currentQuantity);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [product.title]);

  const handleAddProduct = () => {
    if (currentQuantity + 1 > product.stock) {
      return;
    }

    const existingProduct = arrProduct.find((p) => p.title === product.title);

    if (existingProduct) {
      existingProduct.quantity += 1;
      setCurrentQuantity((prevQuantity) => prevQuantity + 1);
      localStorage.setItem("products", JSON.stringify(arrProduct));
      updateCart();
      if (!isProductAdded) {
        const notify = () =>
          toast.success(
            "El producto" + ` "${product.title}" ` + "fue añadido al carrito!",
            {
              position: "top-right",
              autoClose: 1500,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "colored",
              transition: Flip,
            }
          );
        notify();
        setIsProductAdded(true);
      }
      setIsProductRemoved(false);
    } else {
      const updatedProduct = { ...product };
      updatedProduct.quantity = currentQuantity + 1;
      setArrProduct((prevArrProduct) => [...prevArrProduct, updatedProduct]);
      localStorage.setItem(
        "products",
        JSON.stringify([...arrProduct, updatedProduct])
      );
      setCurrentQuantity(updatedProduct.quantity);
      updateCart();
    }
  };

  const handleDeductProduct = () => {
    if (currentQuantity > 0) {
      setCurrentQuantity((prevQuantity) => prevQuantity - 1);
      const existingProduct = arrProduct.find((p) => p.title === product.title);

      if (existingProduct) {
        existingProduct.quantity -= 1;
        localStorage.setItem("products", JSON.stringify(arrProduct));
        updateCart();
        setIsProductAdded(false);
      }

      if (!isProductRemoved) {
        const notify = () =>
          toast.error(
            "El producto" +
              ` "${product.title}" ` +
              "fue eliminado del carrito!",
            {
              position: "top-right",
              autoClose: 1500,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "colored",
              transition: Flip,
            }
          );
        notify();
        setIsProductRemoved(true);
      }
    }
  };

  return (
    <div className="w-full flex justify-center items-center flex-col gap-2">
      <ToastContainer />
      <div className="flex w-72 items-center justify-center bg-[var(--primary)] rounded-xl p-5 gap-5">
        <button
          onClick={handleDeductProduct}
          className="hover:bg-[var(--background-sec)] hover:text-black text-white bg-[var(--detail)] w-12 h-12 rounded-lg flex justify-center items-center shadow-xl transition-colors duration-200">
          <span className="text-xl font-bold">-</span>
        </button>
        <div className="flex flex-col items-center">
          <p className="text-gray-500 text-sm">Cantidad</p>
          <p className="text-center text-xl font-bold">{currentQuantity}</p>
        </div>
        <button
          onClick={handleAddProduct}
          className="hover:bg-[var(--background-sec)] hover:text-black text-white bg-[var(--detail)] w-12 h-12 rounded-lg flex justify-center items-center shadow-xl transition-colors duration-200">
          <span className="text-xl font-bold">+</span>
        </button>
      </div>

      {currentQuantity !== 0 ? (
        <button
          onClick={() => router.push("/cart")}
          className="hover:bg-[var(--background-sec)] hover:text-black w-full text-white bg-[var(--secundary)] py-3 justify-center rounded-lg flex content-center items-center shadow-xl font-bold">
          Comprar ahora
        </button>
      ) : (
        <button className="w-full text-white bg-zinc-500 py-3 justify-center rounded-lg flex content-center items-center shadow-xl font-bold cursor-not-allowed">
          Comprar ahora
        </button>
      )}
    </div>
  );
};

export default AddDeductButtons;
