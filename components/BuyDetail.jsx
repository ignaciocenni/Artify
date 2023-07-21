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
    <div>
        <h1>Estas por comprar:</h1>
        <div>
            {cartDetail && cartDetail.map((produc=>{
                return <div key={produc.id}>
                    <p>-{produc.title}</p>
                    <p>Cantidad: {produc.quantity} </p>
                    <p className="pb-3">Total: ${numberConverte(produc.unit_price * produc.quantity)} </p>
                     </div>
            }))}

        </div>

            <h2>Total = ${numberConverte(totalBuy)}</h2>

    </div>
  )
}
