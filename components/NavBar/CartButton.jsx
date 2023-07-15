"use client";
import Image from "next/image";
import cart from "../../public/images/cart.svg";
import { useSelector } from "react-redux";

export default function CartButton() {
  const quantity = useSelector((state) => state.valores.cartQuantity);

  return (
    <div className="p-1 relative hover:bg-[var(--primary)] hover:shadow-lg rounded-full ">
      <Image src={cart} alt="cart" />
      {quantity > 0 && (
        <div className="absolute bottom-0 right-0 flex items-center justify-center w-6 h-6 bg-[var(--extra)] rounded-full border-2 border-black">
          <span className="text-white text-xs">{quantity}</span>
        </div>
      )}
    </div>
  );
}
