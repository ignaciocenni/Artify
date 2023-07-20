"use client";
import Image from "next/image";
import React from "react";
import { useRouter } from "next/navigation";
import { useSession, signOut } from "next-auth/react";

const ButtonSession = () => {
  const router = useRouter();
  const { data: session } = useSession();
  const handler = async () => {
    localStorage.removeItem("products")
    const res = await signOut().then(() => (res ? router.back() : ""));
  };

  if (session && session.user) {
    return (
      <>
        <li className="px-4 py-2 hover:bg-gray-200">
          <button className="flex" onClick={handler}>
            <Image src="/images/leaveSession.svg" width={20} height={20} alt="icon" />
            <p className="px-7">Cerrar Sesiòn</p>
          </button>
        </li>
      </>
    );
  }
  return null;
};

export default ButtonSession;
