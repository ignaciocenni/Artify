"use client";
import Image from "next/image";
import Link from "next/link";
import ImageLogin from "./ImageLogin";
import { useState } from "react";
import ButtonSession from "./ButtonSession";
import LoginButton from "./LoginButton";
import LogoutButton from "./LogoutButton";
import CartButton from "./CartButton";
import { useSelector } from "react-redux";
import SearchBar from "../SearchBar";
const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const product = useSelector((state) => state.valores.cartQuantity);

  return (
    <nav className="flex justify-between items-center py-3 px-8 mb-4 shadow-md">
      <div className="flex content-center items-center ">
        <Image
          className="pr-2 h-2/4"
          src="/images/logo.svg"
          width={65.31}
          height={40}
          alt="logo"
        />

        <button className="inline-block align-baseline hover:text-[var(--background-sec)] mt-2 text-[var(--detail)] font-extrabold ">
          <Link href="/">
            <p className="px-4 text-sm">Explorar</p>
          </Link>
        </button>
      </div>

      <SearchBar />

      <div className="flex content-center items-center gap-5 ">
        <Link href="/post-product">
          <button className="hover:bg-[var(--background-sec)] hover:text-black text-white bg-[var(--detail)]  rounded-lg flex content-center items-center shadow-sm text-xs font-bold px-2 h-11">
            <h1 className="">+ Crear publicación</h1>
          </button>
        </Link>
      </div>
      <div className="flex content-center items-center gap-5 ">
        <Link href="/cart">
          <CartButton />
        </Link>
      </div>
      <div className="flex gap-5">
        <ImageLogin />
        <div className="relative flex justify-evenly ">
          <button
            onClick={toggleDropdown}
            className="focus:outline-none focus:ring px-4 relative hover:bg-[var(--primary)] hover:shadow-lg rounded-full ">
            <Image
              src="/images/arrow-down.svg"
              width={20}
              height={40}
              alt="menu"
            />
          </button>
        </div>
      </div>
      {isOpen && (
        <div className="absolute top-16 right-0 w-[20%] bg-white border rounded shadow z-40 ">
          <ul className="py-1 px-2">
            <ButtonSession />
            <LoginButton />
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
            <LogoutButton />
          </ul>
        </div>
      )}
    </nav>
  );
};

export default NavBar;
