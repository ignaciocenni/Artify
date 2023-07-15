import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { multiplied, totalPrices } from "../../store/slice";

const AddDeductButtons = ({ data }) => {
  const product = {
    id: data.id,
    image: data.image,
    title: data.name,
    unit_price: data.price,
    quantity: 1,
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
  const dispatch = useDispatch();
  const [arrProduct, setArrProduct] = useState([]);
  const [currentQuantity, setCurrentQuantity] = useState(1);

  const totalPrice = arrProduct.map((product) => {
    return product.quantity * product.unit_price;
  });
  const quantityProducts = arrProduct.map((product) => {
    return product.quantity;
  });
  dispatch(multiplied(quantityProducts));
  dispatch(totalPrices(totalPrice));

  useEffect(() => {
    const { arrProduct, currentQuantity } = initializeState();
    setArrProduct(arrProduct);
    setCurrentQuantity(currentQuantity);
  }, [product.title]);

  const handleAddProduct = () => {
    if (currentQuantity + 1 > product.stock) {
      return;
    }

    const existingProduct = arrProduct.find((p) => p.title === product.title);

    if (existingProduct) {
      existingProduct.quantity += 1;
      setCurrentQuantity(existingProduct.quantity);
      localStorage.setItem("products", JSON.stringify(arrProduct));
    } else {
      const updatedProduct = { ...product };
      updatedProduct.quantity = currentQuantity + 1;
      setArrProduct((prevArrProduct) => [...prevArrProduct, updatedProduct]);
      localStorage.setItem("products", JSON.stringify([...arrProduct, updatedProduct]));
      setCurrentQuantity(updatedProduct.quantity);
    }
  };

  const handleDeductProduct = () => {
    if (currentQuantity > 1) {
      setCurrentQuantity((prevQuantity) => prevQuantity - 1);
      const existingProduct = arrProduct.find((p) => p.title === product.title);

      if (existingProduct) {
        existingProduct.quantity -= 1;
        localStorage.setItem("products", JSON.stringify(arrProduct));
      }
    }
  };
  const handleClearProducts = () => {
    localStorage.removeItem("products");
    setArrProduct([]);
    setCurrentQuantity(product.quantity);
  };
  return (
    <div className="flex items-center">
      <button
        onClick={handleAddProduct}
        className="hover:bg-[var(--background-sec)] hover:text-black w-[100%] text-white bg-[var(--detail)] py-5  rounded-lg flex content-center items-center gap-5 shadow-xl"
      >
        <h1 className="text-xs font-extrabold">Sumar producto</h1>
      </button>
      <p>Quantity: {currentQuantity}</p>
      <p>Stock: {product.stock - currentQuantity}</p>
      <button
        onClick={handleDeductProduct}
        className="hover:bg-[var(--background-sec)] hover:text-black w-[100%] text-white bg-[var(--detail)] py-5  rounded-lg flex content-center items-center gap-5 shadow-xl"
      >
        <h1 className="text-xs font-extrabold">Restar producto</h1>
      </button>
      <div>
        <button onClick={handleClearProducts}>Deshacer Products</button>
      </div>
    </div>
  );
};

export default AddDeductButtons;
