import Image from "next/image";

export default function Card({ id, image, user, price, title, userImage }) {
  return (
    <div className="object-cover flex flex-col justify-center align-first grid-cols-1 w-[180px] py-3 ">
      <div className="relative h-[300px]">
        <Image
          alt={`Imagen de perfil del usuario ${id}`}
          src={image}
          fill
          sizes="100vw"
          style={{
            objectFit: "cover",
          }}
          className="rounded-3xl"
        />
      </div>
      <div>
        <h3 className="text-sm font-medium pt-1">${price}</h3>
        <h3 className="text-sm font-semibold">{title}</h3>
        <div className="flex">
          <Image
            className="rounded-full"
            src={userImage}
            width={20}
            height={20}
            alt={`Imagen de perfil del usuario ${id}`}
          />

          <h3 className="text-sm font-light">{user}</h3>
        </div>
      </div>
    </div>
  );
}
