"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { UserAuth } from "@/app/context/AuthContext";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const { user, googleSignIn, logOut } = UserAuth();

  const handlerSignIn = async() => {
    try {
      await googleSignIn()
      
    } catch (error) {
      console.log(error)
    }
  }
  

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="flex justify-center items-center h-[100px] w-full pt-2.5">
      <nav className="flex py-5 justify-evenly w-1/2 h-[90px] ">
        <div className="flex content-center items-center ">
          <Link href="/">
            <Image
              className="pr-2 h-2/4"
              src="/images/logo.svg"
              width={65.31}
              height={40}
              alt="logo"
            />
          </Link>
          <button className="inline-block align-baseline  hover:text-[var(--background-sec)] mt-2 text-[var(--detail)] text-xs font-extrabold ">
            <Link href="/">
              <p className="px-4">Explorar</p>
            </Link>
          </button>
        </div>
        <div className="flex content-center items-center gap-5 ">
          <Link href="/post-product">
            <button className="hover:bg-[var(--background-sec)] hover:text-black text-white bg-[var(--detail)]  rounded-lg flex content-center items-center shadow-xl text-xs font-bold px-2 h-11">
              <h1 className="">+ Crear publicación</h1>
            </button>
          </Link>
          <Link href="/login">
            <button className="hover:bg-[var(--background-sec)] hover:text-black text-white bg-[var(--detail)]  rounded-lg flex content-center items-center shadow-xl text-xs font-bold px-2 h-11">
              <h1 className="">Iniciar Sesión</h1>
            </button>
          </Link>
        </div>
        <div className="flex gap-5">
          <Link href="/profile">
            <Image
              src="/images/me.png"
              width={50}
              height={50}
              alt="imagen del user"
              className="rounded-full shadow-2xl"
            />
          </Link>
          <div className="relative flex justify-evenly ">
            <button
              onClick={toggleDropdown}
              className="rounded  focus:outline-none focus:ring">
              <Image
                src="/images/menuButton.svg"
                width={40}
                height={40}
                alt="menu"
              />
            </button>
          </div>
        </div>
        {isOpen && (
          <div className="absolute top-0 right-0 w-[20%] bg-white border rounded shadow z-40 ">
            <ul className="py-1 px-2">
              <li className="px-4 py-2 hover:bg-gray-100">
                <Link className="flex" href="/profile">
                  <Image
                    src="/images/userImage.svg"
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
                <Link className="flex" href="/">
                  <Image
                    src="/images/lupaImage.svg"
                    width={20}
                    height={20}
                    alt="icon"
                  />
                  <p className="px-7">Explorar</p>
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
              <li className="px-4 py-2 hover:bg-gray-100">
                <Link className="flex" href="/">
                  <Image
                    src="/images/leaveSession.svg"
                    width={20}
                    height={20}
                    alt="icon"
                  />
                  <p className="px-7">Cerrar Sesiòn</p>
                </Link>
              </li>
            </ul>
          </div>
        )}
      </nav>
    </div>
  );
};

export default NavBar;
