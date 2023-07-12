"use client";
import { initMercadoPago, Wallet } from '@mercadopago/sdk-react'



export default function MpButton() {
    initMercadoPago(process.env.NEXT_PUBLIC_KEY);
  return (
    <div id="wallet_container">   
        <Wallet initialization={{ preferenceId:"622073189-d721f3b5-7f1d-4ba2-b016-667f4f113363"}} />
    </div>
  );
}