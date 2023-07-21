"use client";
import { initMercadoPago, Wallet } from '@mercadopago/sdk-react'
import Link from 'next/link';



export default function MpButton({url}) {
    initMercadoPago(process.env.NEXT_PUBLIC_KEY);
  return (
    <div>
      <Link href={`${url}`}>
      <button
        className='className="hover:bg-[var(--background-sec)] hover:text-black w-full text-white bg-[var(--detail)] py-5 justify-center rounded-lg flex content-center items-center gap-5 shadow-xl'
       type='button'>
        Comprar ahora !
      </button>
      </Link>
    </div>
  );
}