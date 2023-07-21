"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { useSession } from "next-auth/react";
import avatar from "../../public/images/userImage.svg";

const ImageLogin = () => {
  const { data: session } = useSession();

  return (
    <div className="flex justify-center items-center">
      <Link href="/profile">
        <Image
          src={session && session.user ? session.user.image : avatar}
          width={40}
          height={40}
          alt="imagen del user"
          className="rounded-full shadow-2xl"
        />
      </Link>
      <div className="px-4">
        <h1 className="text-sm">Hola!</h1>
        <Link href="/profile">
          <h1 className="font-bold hover:underline">
            {session && session.user ? session.user.name : null}
          </h1>
        </Link>
      </div>
    </div>
  );
};

export default ImageLogin;