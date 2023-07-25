import { useState } from "react";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import numberConverte from '../app/cart/cardCart/numberConverte'

export default function BuyDetail() {
   const [cartDetail, setCartDetail]= useState([])
    const totalBuy = useSelector((state)=>state.valores.totalPrice)
    useEffect(() => {
    const cartProducts = JSON.parse(localStorage.getItem("products")) || [];
    setCartDetail(cartProducts)
    },[])

    return (
        <div className="p-6 rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold mb-4">Tu carrito de compras</h1>
        <div className="space-y-4">
          {cartDetail &&
            cartDetail.map((produc) => (
              <div key={produc.id}>
                <p className="text-lg font-medium mb-2">{produc.title}</p>
                <div className="grid grid-cols-2 items-center gap-4">
                  <div className="text-left">
                    <p className="text-gray-500">Cantidad: {produc.quantity}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-green-600 font-semibold">
                      Total: ${numberConverte(produc.unit_price * produc.quantity)}
                    </p>
                  </div>
                </div>
                <hr className="border-gray-300 my-4" />
              </div>
            ))}
        </div>
        <h2 className="text-2xl font-bold mt-6">Total = ${numberConverte(totalBuy)}</h2>
      </div>
  )
}
