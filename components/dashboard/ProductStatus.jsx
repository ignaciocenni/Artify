import Image from "next/image";

function  ProductStatus(props) {
  const { image, text, quantity } = props;
  return (
    <div className="h-32 p-2.5 flex-col justify-center items-center inline-flex gap-2">
      <Image alt="product" src={image} width={35} height={35} />
      <div className="text-[var(--secundary)] text-5xl font-light">
        {quantity}
      </div>
      <div className="text-center italic text-neutral-500 text-xs">
        {text}
      </div>
    </div>
  );
}

export default ProductStatus;
