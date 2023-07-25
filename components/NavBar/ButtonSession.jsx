"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { useSession } from "next-auth/react";
import avatar from "../../public/images/userImage.svg";

export default function ButtonSession() {
  const { data } = useSession();

  if (data && data.user) {
    return (
      <>
        <li className="px-4 py-2 hover:bg-gray-100">
          <Link className="flex" href={`/profile/${data?.user?.id}`}>
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
          <Link
            className="flex"
            href={`/dashboard/edit-profile/${data?.user?.id}`}>
            <Image src="/images/edit.svg" width={20} height={20} alt="icon" />
            <p className="px-7">Configuración</p>
          </Link>
        </li>
      </>
    );
  }
  return null;
}
