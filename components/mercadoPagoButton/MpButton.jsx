"use client";

import Image from 'next/image';
import Link from 'next/link';
import MercadoLogo from "../../public/images/logo_mp_nuevo.png"


export default function MpButton({url}) {
    
  return (
    <div>
      <Link href={`${url}`}>
      <button
        className="bg-sky-500 hover:bg-sky-600 w-full h-12 text-white py-5 justify-center rounded-md flex content-center items-center gap-5 shadow-xl"
       type='button'>
        <Image 
        alt="logo-mp"
        width={40}
        height={30} 
        src={MercadoLogo}
        >
        </Image>
        Paga con Mercado Pago
      </button>
      </Link>
    </div>
  );
}