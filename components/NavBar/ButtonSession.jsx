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
        <li className="px-4 py-2 hover:bg-gray-200">
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
