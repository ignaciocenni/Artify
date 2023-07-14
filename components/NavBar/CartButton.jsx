"use client";
import Image from "next/image";
import cart from "../../public/images/cart.svg";

export default function CartButton({ products}) {
 
  const amount = products.map((product)=>{
   return product.quantity
  })
  
  const totalAmount = amount.reduce((accumulator, currentValue) => accumulator + currentValue, 0)
  
  return (
    <div className="p-1 relative hover:bg-[var(--primary)] hover:shadow-lg rounded-full ">
      <Image src={cart} alt="cart" />
      {totalAmount > 0 && (
        <div className="absolute bottom-0 right-0 flex items-center justify-center w-6 h-6 bg-[var(--extra)] rounded-full border-2 border-black">
          <span className="text-white text-xs">{totalAmount}</span>
        </div>
      )}
    </div>
  );
}
