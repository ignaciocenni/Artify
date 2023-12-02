import Image from 'next/image'
import Link from 'next/link'

export default function Card({ id, image, user, price, title, userImage, userId }) {
  return (
    <div className="w-[200px] text-left flex flex-col justify-center align-first grid-cols-1 pb-3 bg-[var(--primary)] rounded-3xl  shadow-sm shadow-zinc-400 ">
      <div className="relative h-80">
        <Link href={`/detail/${id}`}>
          <Image
            id="id"
            alt={`Imagen de perfil del usuario ${id}`}
            src={image[0]}
            fill
            sizes="100vw"
            style={{
              objectFit: 'cover'
            }}
            className="rounded-t-3xl"
          />
        </Link>
      </div>
      <div className=" flex flex-col p-2 gap-2 ">
        <h3 className="text-sm font-medium ">${price}</h3>
        <h3 className="text-sm font-semibold  w-full  truncate">{title}</h3>
        <div className="flex">
          <Image className="rounded-full" src={userImage} width={20} height={20} alt={`Imagen de perfil del usuario ${id}`} />
          <Link href={`/profile/${userId}`}>
            <h3 className="px-1 text-sm font-light">{user}</h3>
          </Link>
        </div>
      </div>
    </div>
  )
}
