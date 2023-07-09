"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { search } from "../store/slice";

const NavBar = () => {
  const dispatch = useDispatch();
  const [isOpen, setIsOpen] = useState(false);

  const [inputSearch, setInputSearch] = useState("");

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handlerValue = async (event) => {
    const value = event.target.value;
    const res = await fetch(`http://localhost:3000/api/products?name=${event.target.value}`).then(
      (res) => res.json()
    );
    dispatch(search(res));
  };
  const handlerText = () => {};

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
          <button className="text-[var(--detail)] text-xs font-extrabold ">
            <Link href="/">
              <p className="px-4">Explorar</p>
            </Link>
          </button>
        </div>
        <div className="flex content-center items-center gap-10">
          <input
            onChange={handlerValue}
            className="text-black px-3 w-72 h-11 rounded-full bg-[#F3E8FF] focus:outline-none "
            type="text"
          />
          <button
            onClick={handlerText}
            className="hover:bg-[var(--background-sec)] hover:text-black text-white bg-[var(--detail)]  rounded-lg flex content-center items-center shadow-xl text-xs font-bold px-6 h-11"
          >
            <h1 className="">Buscar</h1>
          </button>
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
            <button onClick={toggleDropdown} className="rounded  focus:outline-none focus:ring">
              <Image 
              src="/images/menuButton.svg" 
              width={40} 
              height={40} 
              alt="menu" />
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
                  alt="icon" />
                  <p className="px-7">Perfil</p>
                </Link>
              </li>
              <li className="px-4 py-2 hover:bg-gray-100">
                <Link className="flex" href="/">
                  <Image 
                  src="/images/pencilImage.svg" 
                  width={20} 
                  height={20} 
                  alt="icon" />
                  <p className="px-7">Editar</p>
                </Link>
              </li>
              <li className="px-4 py-2 hover:bg-gray-100">
                <Link className="flex" href="/settings">
                  <Image 
                  src="/images/controlPanelImage.svg" 
                  width={20} 
                  height={20} 
                  alt="icon" />
                  <p className="px-7">Panel de Control</p>
                </Link>
              </li>
              <li className="px-4 py-2 hover:bg-gray-100">
                <Link className="flex" href="/">
                  <Image 
                  src="/images/lupaImage.svg" 
                  width={20} 
                  height={20} 
                  alt="icon" />
                  <p className="px-7">Explorar</p>
                </Link>
              </li>
              <li className="px-4 py-2 hover:bg-gray-100">
                <Link className="flex" href="/settings">
                  <Image 
                  src="/images/settingsImage.svg" 
                  width={20} 
                  height={20} 
                  alt="icon" />
                  <p className="px-7">Configurar</p>
                </Link>
              </li>
              <li className="px-4 py-2 hover:bg-gray-100">
                <Link className="flex" href="/">
                  <Image 
                  src="/images/leaveSession.svg" 
                  width={20} 
                  height={20} 
                  alt="icon" />
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
