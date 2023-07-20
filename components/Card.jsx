import Image from "next/image";
import Link from "next/link";

export default function Card(props) {
  const { id, image, user, price, title, userImage } = props;
  return (
    <div className="object-cover flex flex-col justify-center align-first grid-cols-1 pb-3 my-2 mx-2 bg-[var(--primary)] rounded-3xl  shadow-sm shadow-zinc-400">
      <div className="relative h-80">
        <Link href={`/detail/${id}`}>
          <Image
            id="id"
            alt={`Imagen de perfil del usuario ${id}`}
            src={image[0]}
            fill
            sizes="100vw"
            style={{
              objectFit: "cover",
            }}
            className="rounded-3xl"
          />
        </Link>
      </div>
      <div className="px-2">
        <h3 className="text-sm font-medium pt-1">${price}</h3>
        <h3 className="text-sm font-semibold py-2">{title}</h3>
        <div className="flex pt-1">
          <Image className="rounded-full" src={userImage} width={20} height={20} alt={`Imagen de perfil del usuario ${id}`} />

          <h3 className="px-1 text-sm font-light">{user}</h3>
        </div>
      </div>
    </div>
  );
}
