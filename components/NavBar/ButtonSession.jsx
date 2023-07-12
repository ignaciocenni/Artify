"use client"
import Image from "next/image";
import React from "react";
import { useSession } from "next-auth/react";
import Link from "next/link";
import avatar from "../../public/images/userImage.svg";

const ButtonSession = () => {
  const { data: session } = useSession();

  if (session && session.user) {
    return (
      <>
        <li className="px-4 py-2 hover:bg-gray-100">
          <h1>Hola!</h1>
          <h1 className="font-bold text-lg">{session.user.name}</h1>
        </li>
        <li className="px-4 py-2 hover:bg-gray-100">
          <Link className="flex" href="/profile">
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
        <li className="px-4 py-2 hover:bg-gray-100">
          <Link className="flex" href="/">
            <Image
              src="/images/pencilImage.svg"
              width={20}
              height={20}
              alt="icon"
            />
            <p className="px-7">Editar</p>
          </Link>
        </li>
        <li className="px-4 py-2 hover:bg-gray-100">
          <Link className="flex" href="/settings">
            <Image
              src="/images/controlPanelImage.svg"
              width={20}
              height={20}
              alt="icon"
            />
            <p className="px-7">Panel de Control</p>
          </Link>
        </li>
        <li className="px-4 py-2 hover:bg-gray-100">
          <Link className="flex" href="/settings">
            <Image
              src="/images/settingsImage.svg"
              width={20}
              height={20}
              alt="icon"
            />
            <p className="px-7">Configurar</p>
          </Link>
        </li>
      </>
    );
  }
  return null;
};

export default ButtonSession;
