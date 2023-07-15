"use client";
import { initMercadoPago, Wallet } from '@mercadopago/sdk-react'



export default function MpButton() {
    initMercadoPago(process.env.NEXT_PUBLIC_KEY);
  return (
    <div id="wallet_container">   
        <Wallet 
        on
        initialization={{ preferenceId:"1420702233-c184daa1-476d-4954-a1cb-d47b488d4b1a"}} />
    </div>
  );
}