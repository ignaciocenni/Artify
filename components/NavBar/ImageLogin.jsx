"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { useSession } from "next-auth/react";
import avatar from "../../public/images/userImage.svg";

const ImageLogin = () => {
  const { data: session } = useSession();

  return (
    <div>
      <Link href="/profile">
        <Image
          src={session && session.user ? session.user.image : avatar}
          width={50}
          height={50}
          alt="imagen del user"
          className="rounded-full shadow-2xl"
        />
      </Link>
    </div>
  );
};

export default ImageLogin;
