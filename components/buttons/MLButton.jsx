import Image from "next/image";
import React from "react";
import logo from "../../public/images/MercadoPago-logo.svg";

const MLButton = () => {
  return (
    <div className="flex h-16">
      <button class="flex items-center bg-blue-500 hover:bg-blue-700 text-white text-base font-bold py-2 px-4 rounded gap-3">
        <Image src={logo} width={100} alt="logoML"></Image>
        <h1>Enlazar Mercado Pago</h1>
      </button>
    </div>
  );
};

export default MLButton;
