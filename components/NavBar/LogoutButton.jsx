"use client"
import Image from "next/image";
import React from "react";
import { useSession, signOut } from "next-auth/react";

const ButtonSession = () => {
  const { data: session } = useSession();

  if (session && session.user) {
    return (
      <>
        <li className="px-4 py-2 hover:bg-gray-100">
          <button className="flex" onClick={signOut}>
            <Image
              src="/images/leaveSession.svg"
              width={20}
              height={20}
              alt="icon"
            />
            <p className="px-7">Cerrar Sesiòn</p>
          </button>
        </li>
      </>
    );
  }
  return null;
};

export default ButtonSession;
