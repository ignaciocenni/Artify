"use client"
import Image from "next/image";
import React from "react";
import { useSession } from "next-auth/react";
import Link from "next/link";
import avatar from "../../public/images/userImage.svg";

const ButtonSession = () => {
  const  {data} = useSession();
  const id = data.user.id
  if (data && data.user) {
    return (
      <>

        <li className="px-4 py-2 hover:bg-gray-100">
          <h1>Hola!</h1>
          <h1 className="font-bold text-lg">{data.user.name}</h1>
        </li>
        <li className="px-4 py-2 hover:bg-gray-100">
          <Link className="flex" href={`/profile/${id}`}>

            <Image
              className="rounded-full shadow-2xl"
              src={avatar}
              width={20}
              height={20}
              alt="icon"
            />
            <p className="px-7">Perfil</p>
          </Link>
        </li>
        <li className="px-4 py-2 hover:bg-gray-200">
          <Link className="flex" href="/dashboard">
            <Image
              src="/images/controlPanelImage.svg"
              width={20}
              height={20}
              alt="icon"
            />
            <p className="px-7">Panel de Control</p>
          </Link>
        </li>
        <li className="px-4 py-2 hover:bg-gray-200">
          <Link className="flex" href="/settings">
            <Image
              src="/images/settingsImage.svg"
              width={20}
              height={20}
              alt="icon"
            />
            <p className="px-7">Configuración</p>
          </Link>
        </li>
      </>
    );
  }
  return null;
};

export default ButtonSession;
