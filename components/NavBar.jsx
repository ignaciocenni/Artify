"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const NavBar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const [inputSearch, setInputSearch] = useState("");

    const toggleDropdown = () => {
      setIsOpen(!isOpen);
    };

  const handlerValue = (event) => {
    const value = event.target.value;
    setInputSearch(value);
  };
  const handlerText = () => {
    console.log(inputSearch);
  };

  return (
    <div className="flex justify-center items-center h-24 w-full pt-2.5">
      <nav className="flex justify-center w-2/4 bg-[#FAF5FF] rounded">
        <div className="flex items-center w-full justify-around">
        <Link href="/">
          <Image
            className="pr-2 h-2/4"
            src="/images/logo.svg"
            width={65.31}
            height={40}
          />
        </Link>
          <button className="text-black text-xs border-2 border-black rounded h-11">
            <Link href="/">
            <p className="px-4">Explorar</p>
            </Link>
          </button>
          <input
            onChange={handlerValue}
            className="text-black h-11 border-2 border-black rounded-full bg-[#F3E8FF] "
            type="text"
          />
          <button
            onClick={handlerText}
            className="text-black text-xs border-2 border-black rounded h-11"
          >
            <p className="px-4">Buscar</p>
          </button>
        <Link href="/profile">
        <Image src="/images/me.png" width={50} height={50} />
        </Link>
        <div className="relative flex justify-evenly w-1/5">
    
        <button
        onClick={toggleDropdown}
        className="px-4 py-2 text-gray-800 bg-gray-200 rounded hover:bg-gray-300 focus:outline-none focus:ring"
        >
        <Image src="/images/menuButton.svg" width={40} height={40} />
        </button>

      {isOpen && (
        <div className="absolute mt-14 bg-white border rounded shadow z-40">
          <ul className="py-1">
            <li className="px-4 py-2 hover:bg-gray-100">
                <Link className="flex" href="/profile">
                    <Image src="/images/userImage.svg" width={20} height={20} />
                    <p>Perfil</p>
                </Link>
            </li>
            <li className="px-4 py-2 hover:bg-gray-100">
                <Link className="flex" href="/">
                    <Image src="/images/pencilImage.svg" width={20} height={20} />
                    <p>Editar</p>
                </Link>
            </li>
            <li className="px-4 py-2 hover:bg-gray-100">
                <Link className="flex" href="/">
                    <Image src="/images/controlPanelImage.svg" width={20} height={20} />
                    <p>Panel de Control</p>
                </Link>
            </li>
            <li className="px-4 py-2 hover:bg-gray-100">
                <Link className="flex" href="/">
                    <Image src="/images/lupaImage.svg" width={20} height={20} />
                    <p>Explorar</p>
                </Link>
            </li>
            <li className="px-4 py-2 hover:bg-gray-100">
                <Link className="flex" href="/">
                    <Image src="/images/settingsImage.svg" width={20} height={20} />
                    <p>Configurar</p>
                </Link>
            </li>
            <li className="px-4 py-2 hover:bg-gray-100">
                <Link className="flex" href="/">
                    <Image src="/images/leaveSession.svg" width={20} height={20} />
                    <p>Cerrar Sesiòn</p>
                </Link>
            </li>
          </ul>
        </div>
      )}
    </div>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
