"use client";

import Image from "next/image";
import Link from "next/link";
import ImageLogin from "./ImageLogin";
import { useState, useEffect, useRef } from "react";
import ButtonSession from "./ButtonSession";
import LoginButton from "./LoginButton";
import LogoutButton from "./LogoutButton";
import CartButton from "./CartButton";
import SearchBar from "../SearchBar";
import { usePathname } from "next/navigation";
import { useSession } from "next-auth/react";
import Swal from "sweetalert2";

const NavBar = () => {
  const { data: session } = useSession();
  const path = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const node = useRef();

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleClick = () => {
    if (!session) {
      Swal.fire("Advertencia!", "Debes iniciar sesión para poder publicar!", "warning");
    }
  };

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (node.current.contains(e.target)) {
        // inside click
        return;
      }
      // outside click
      setIsOpen(false);
    };

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <>
      {path !== "/purchase-status" && (
        <nav className="flex justify-between items-center h-[10vh] py-3 px-8 shadow-md ">
          <Link href="/">
            <div className="flex content-center items-center ">
              <Image className="pr-2 h-2/4" src="/images/logo.svg" width={65.31} height={40} alt="logo" />
            </div>
          </Link>
          <SearchBar />
          <div className="flex content-center items-center gap-5 ">
            <Link href="/post-product">
              <button
                onClick={handleClick}
                className="hover:bg-[var(--background-sec)] hover:text-black text-white bg-[var(--detail)]  rounded-lg flex content-center items-center shadow-sm text-xs font-bold px-2 h-11"
              >
                <h1 className="">+ Crear publicación</h1>
              </button>
            </Link>
          </div>
          <div className="flex content-center items-center gap-5 ">
            <Link href="/cart">
              <CartButton />
            </Link>
          </div>
          <div ref={node} className="flex gap-5">
            <ImageLogin />
            {/* Dropdown button */}
            <div className="flex">
              <button
                onClick={toggleDropdown}
                className="focus:outline-none px-3 relative hover:bg-[var(--primary)] hover:shadow-lg rounded-full "
              >
                <Image src="/images/arrow-down.svg" width={20} height={20} alt="menu" />
              </button>
            </div>
          </div>
          {/* Dropdown */}
          {isOpen && (
            <div className="absolute mt-5 top-14 right-0 w-[20%] bg-[var(--background)] border rounded shadow z-40 ">
              <ul>
                <ButtonSession />
                <LoginButton />
                <LogoutButton />
              </ul>
            </div>
          )}
        </nav>
      )}
    </>
  );
};

export default NavBar;
