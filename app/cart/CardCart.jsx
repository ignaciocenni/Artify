import Image from "next/image";

export default function Card({ id, image, name, price, stock }) {
    return (
        <div
            className="flex flex-col border border-gray-300 rounded p-4 mb-4"
        >
            <div className="flex items-center mb-4">
                <div className="relative h-24 w-24 mr-4">
                    <Image
                        id="id"
                        alt={`Imagen de producto ${name}`}
                        src={image}
                        fill
                        className="rounded-3xl"
                    />
                </div>
                <div>
                    <p className="font-bold">{name}</p>
                    <p>${price} ARS.</p>
                    <p>Stock: {stock} unidades.</p>
                </div>
            </div>
            <div className="w-max p-2 ">
                <div className="border-2 inline-block p-2" >+</div>
                <div className="border-2 inline-block p-2">12</div>
                <div className="border-2 inline-block p-2">-</div>
            </div>
            <div>Total:</div>
        </div>
    )
}
