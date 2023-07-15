import { useRouter } from "next/navigation";
import axios from "axios";
import Link from "next/link";
import { useState } from "react";
const postProductsMP = async (products) => {

  try {
    const res = (await axios.post("/api/checkoutPro", products)).data;
    return res.url
  } catch (error) {
    return {error: error.message };
  }
};
const BuyNowButton = () =>{
  const [url, setUrl] = useState("")
  const products = JSON.parse(localStorage.getItem("products")) || []
  const productsClean = products.map((product) => {
    return {
      name: product.title,
      price: product.unit_price,
      stock: product.quantity
    }
  })
 //const router = useRouter()
  const handleClick = async (event) => {
    event.preventDefault();
    const response = await postProductsMP(productsClean);
    setUrl(response)
    console.log(response);
    //router.push(`${response}`);
  };
  return(
    <div>
      <button 
      onClick={handleClick}
      className="hover:bg-[var(--background-sec)] hover:text-black w-full text-white bg-[var(--detail)] py-5 justify-center rounded-lg flex content-center items-center gap-5 shadow-xl">
        <h1 className="text-xs font-extrabold">Detalles de compra</h1>
      </button>
      {url && <Link href={url}>
      <button 
      className="hover:bg-[var(--background-sec)] hover:text-black w-full text-white bg-[var(--detail)] py-5 justify-center rounded-lg flex content-center items-center gap-5 shadow-xl">
        <h1 className="text-xs font-extrabold">Comprar Ahora</h1>
      </button>
      </Link>}
    </div>
    );
}

export default BuyNowButton;