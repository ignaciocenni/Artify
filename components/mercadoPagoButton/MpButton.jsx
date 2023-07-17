"use client";
import { initMercadoPago, Wallet } from '@mercadopago/sdk-react'



export default function MpButton({id}) {
    initMercadoPago(process.env.NEXT_PUBLIC_KEY);
  return (
    <div id="wallet_container">   
        <Wallet 
        on
        initialization={{ preferenceId: id}} />
    </div>
  );
}