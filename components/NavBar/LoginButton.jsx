"use client";
import React from "react";
import { useSession } from "next-auth/react";
import Link from "next/link";
import Image from "next/image";
import avatar from "../../public/images/userImage.svg";
import { usePathname } from "next/navigation";
import { useDispatch } from "react-redux";
import { setPath } from "../../store/slice";

function LoginButton() {
  const { data: session } = useSession();
  const path = usePathname();
  if (localStorage && path !== "/login") {
    localStorage.setItem("path", path);
  }
  //dispatch a un estado global

  return (
    <>
      {session && session.user ? null : (
        <li className="px-4 py-2 hover:bg-gray-100">
          <Link className="flex" href="/login">
            <Image src={avatar} width={20} height={20} alt="icon" />
            <p className="px-7">Iniciar Sesion</p>
          </Link>
        </li>
      )}
    </>
  );
}

export default LoginButton;
