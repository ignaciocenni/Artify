"use client";

import Image from "next/image";
import Link from "next/link";
import { useSession } from "next-auth/react";

export default function SlideBarSettings() {
  const { data } = useSession();

  if (data && data.user) {
    return (
      <section className="flex fixed top-[10vh] left-0 w-1/6 z-50 h-[100vh] pb-10 flex-col justify-start items-center gap-4 shadow-lg">
        <div className="py-4 justify-center items-center gap-2.5 inline-flex w-full">
          <div className="flex justify-center items-center">
            <Image
              src={data && data.user ? data.user.image : avatar}
              width={40}
              height={40}
              alt="imagen del user"
              className="rounded-full shadow-2xl"
            />
            <div className="px-4">
              <h1 className="font-bold">
                {data && data.user ? data.user.name : null}
              </h1>
            </div>
          </div>
        </div>

        <Link
          className="w-full px-5 flex flex-row justify-start items-center gap-7"
          href="/dashboard">
          <Image
            className=" "
            src="/images/controlPanelImage.svg"
            width={30}
            height={30}
            alt="icon"
          />
          <h1 className="text-lg">Panel de Control</h1>
        </Link>

        <div className="w-56 border-b border-neutral-400 py-3"></div>
        <div className="w-56 "></div>

        <div className=" w-full px-5 flex flex-row justify-start items-center gap-7">
          <Image src="/images/edit.svg" alt="explore" width={30} height={30} />
          <h1 className="font-bold">Configuración</h1>
        </div>

        <div className="w-full pl-20 justify-start items-center gap-8 flex ">
          <Link href={`/dashboard/edit-profile/${data?.user?.id}`}>
            <button className="px-1 border-l-2 border-[var(--primary)] hover:border-[var(--extra)]">
              Editar Perfil
            </button>
          </Link>
        </div>
        <div className="w-full pl-20 justify-start items-center gap-8 flex ">
          <Link href="#aboutMe">
          <button className="px-1 border-l-2 border-[var(--primary)] hover:border-[var(--extra)]">
            Contraseña
          </button>
          </Link>
        </div>
        <div className="w-full pl-20 justify-start items-center gap-8 flex ">
        <Link href="#socials">
          <button className="px-1 border-l-2 border-[var(--primary)] hover:border-[var(--extra)]">
            Redes Sociales
          </button>
        </Link>
        </div>
        <div className="w-full pl-20 justify-start items-center gap-8 flex ">
        <Link href="#socials">
          <button className="px-1 border-l-2 border-[var(--primary)] hover:border-[var(--extra)]">
            Pagos
          </button>
        </Link>
        </div>
        <div className="w-full pl-20 justify-start items-center gap-8 flex ">
        <Link href="#socials">
          <button className="px-1 border-l-2 border-[var(--primary)] hover:border-[var(--extra)]">
            Otros
          </button>
        </Link>
        </div>

        <div className="w-56 border-b border-neutral-400 py-3"></div>
        <div className="w-56 "></div>

      </section>
    );
  }
  return null;
}
