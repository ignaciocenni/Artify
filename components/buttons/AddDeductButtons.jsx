import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { localProducts } from "../../store/slice";

const AddDeductButtons = ({ data }) => {
  const dispatch = useDispatch();
  const updateCart = () => {
    const currentProducts = JSON.parse(localStorage.getItem("products")) || [];
    dispatch(localProducts(currentProducts));
  };

  const product = {
    id: data.id,
    image: data.image,
    title: data.name,
    unit_price: data.price,
    quantity: 0,
    stock: data.stock,
  };

  const initializeState = () => {
    const storedProducts = JSON.parse(localStorage.getItem("products")) || [];
    const existingProduct = storedProducts.find((p) => p.title === product.title);

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
  useEffect(() => {
    const { arrProduct, currentQuantity } = initializeState();
    setArrProduct(arrProduct);
    setCurrentQuantity(currentQuantity);
  }, [product.title]);

  const [arrProduct, setArrProduct] = useState([]);
  const [currentQuantity, setCurrentQuantity] = useState(1);

  const handleAddProduct = () => {
    if (currentQuantity + 1 > product.stock) {
      return;
    }

    const existingProduct = arrProduct.find((p) => p.title === product.title);

    if (existingProduct) {
      existingProduct.quantity += 1;
      setCurrentQuantity(existingProduct.quantity);
      localStorage.setItem("products", JSON.stringify(arrProduct));
      updateCart();
    } else {
      const updatedProduct = { ...product };
      updatedProduct.quantity = currentQuantity + 1;
      setArrProduct((prevArrProduct) => [...prevArrProduct, updatedProduct]);
      localStorage.setItem("products", JSON.stringify([...arrProduct, updatedProduct]));
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
      }
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
      <p>Quantity: {currentQuantity > 0 && currentQuantity}</p>
      <p>Stock: {product.stock - currentQuantity}</p>
      <button
        onClick={handleDeductProduct}
        className="hover:bg-[var(--background-sec)] hover:text-black w-[100%] text-white bg-[var(--detail)] py-5  rounded-lg flex content-center items-center gap-5 shadow-xl"
      >
        <h1 className="text-xs font-extrabold">Restar producto</h1>
      </button>
    </div>
  );
};

export default AddDeductButtons;
