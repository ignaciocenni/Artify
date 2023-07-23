"use client";
import Image from "next/image";
import React from "react";
import { useRouter } from "next/navigation";
import { useSession, signOut } from "next-auth/react";
import Swal from "sweetalert2";

const ButtonSession = () => {
  const { data: session } = useSession();
  const handler = () => {
    Swal.fire({
      icon: "warning",
      title: "Seguro que deseas cerrar sesión?",
      showDenyButton: true,
      confirmButtonText: "Si",
      denyButtonText: `No`,
    }).then(async (result) => {
      if (result.isConfirmed) {
        if (localStorage) {
          localStorage.removeItem("products");
        }
        signOut();
        let timerInterval;
        Swal.fire({
          title: "Cerrando sesión",
          timer: 4000,
          timerProgressBar: true,
          didOpen: () => {
            Swal.showLoading();
            const b = Swal.getHtmlContainer().querySelector("b");
            timerInterval = setInterval(() => {
              b.textContent = Swal.getTimerLeft();
            }, 100);
          },
          willClose: () => {
            clearInterval(timerInterval);
          },
        }).then((result) => {
          /* Read more about handling dismissals below */
        });
      } else if (result.isDenied) return "";
    });
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
