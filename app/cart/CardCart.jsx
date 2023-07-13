'use client'
import Image from "next/image";
import { useState } from "react";
import numberConverte from './numberConverte'

export default function Card({ id, image, name, price, stock }) {
    const [quantity, setQuantity] = useState(1)
    const [restStock, setrestStock] = useState(stock - 1)
    const total = numberConverte(price * quantity)
    const handlerPlus = () => {
        if (restStock > 0) {
            setQuantity(quantity + 1),
            setrestStock(restStock - 1)
        }
    }
    const handlerRest = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1),
            setrestStock(restStock + 1)
        }
    }
    return (
        <div
            className="flex flex-col border border-gray-300 rounded p-4 mb-4"
        >
            <div className="flex items-center mb-4">
                <div className="relative h-24 w-24 mr-4">
                    <Image
                        id={id}
                        alt={`Imagen de producto ${name}`}
                        src={image}
                        fill
                        className="rounded-3xl"
                    />
                </div>
                <div>
                    <p className="font-bold">{name}</p>
                    <p>${price} ARS.</p>
                    <p>Stock: {restStock} unidades.</p>
                </div>
            </div>
            <div className="w-max p-2 ">
                <button className="border-2 inline-block p-2" onClick={handlerPlus} >+</button>
                <button className="border-2 inline-block p-2">{quantity}</button>
                <button className="border-2 inline-block p-2" onClick={handlerRest}>-</button>
            </div>
            <div>Total:{total}</div>
        </div>
    )
}
