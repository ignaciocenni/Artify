"use client";
import axios from "axios";
import MpButton from "../../components/mercadoPagoButton/MpButton";
import { usePathname } from "next/navigation";
import BuyDetail from '../BuyDetail'

const postProductsMP = async (productsClean) => {
  try {
    const res = await axios.post("/api/checkoutPro", productsClean);
    const { url } = res.data;
    return url;
  } catch (error) {
    return { error: error.message };
  }
};

const BuyNowButton = ({ url, setUrl }) => {
  const path = usePathname();
  const products = JSON.parse(localStorage.getItem("products")) || [];
  const productsClean = products.map((product) => {
    return {
      id: product.id,
      description: product.description,
      name: product.title,
      price: product.unit_price,
      stock: product.quantity,
    };
  });
  const handleClick = async (event) => {
    event.preventDefault();
    const response = await postProductsMP(productsClean);
    setUrl(response);
  };


  return (
    <div>
      {path === "/cart" && (
        <>
        {!url &&
          <button
            onClick={handleClick}
            className="hover:bg-[var(--background-sec)] hover:text-black w-full text-white bg-[var(--detail)] py-5 justify-center rounded-lg flex content-center items-center gap-5 shadow-xl"
          >
            <h1 className="text-xs font-extrabold">Detalles de compra</h1>
          </button>
      }
        </>
      )}
      {url &&
        <>
          <BuyDetail />
          <MpButton url={url} />
        </>}
    </div>
  );
};

export default BuyNowButton;
