import Image from "next/image";
import Link from "next/link";

export default function Card(props) {
  const { id, image, user, price, title, userImage } = props
  return (
    <div className="object-cover flex flex-col justify-center align-first grid-cols-1 px-3 py-3 ">
      <div className="relative h-[300px]">
        <Link
          href={`/detail/${id}`}
        >
          <Image
            id="id"
            alt={`Imagen de perfil del usuario ${id}`}
            src={image}
            fill
            sizes="100vw"
            style={{
              objectFit: "cover",
            }}
            className="rounded-3xl"
          />
        </Link>
      </div>
      <div>
        <h3 className="text-sm font-medium pt-1 ">${price}</h3>
        <h3 className="text-sm font-semibold h-[50px]">{title}</h3>
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
    </div >
  );
}
