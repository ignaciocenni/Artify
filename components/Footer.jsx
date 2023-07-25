import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <div className="flex flex-col w-full items-center pt-2 justify-center bg-[#281834]">
      <div className="flex border-b-2 border-stone-300 justify-between w-full  ">
        <div className="flex flex-col px-7 gap-3 justify-center items-center">
          <Image src="/images/logoWhite.svg" width={100} height={40} alt="logo" />
          <h1 className="flex  text-white text-xs font-extralight">
             Creatividad y originalidad hecho a mano.
          </h1>
        </div>
          <div className="text-xs font-extralight flex flex-col w-[350px] py-3 px-1 gap-1 items-start text-white">
            <h1 className="py-3 font-bold text-lg">Acerca de Artify </h1>
            <Link href="/" className="hover:underline">
              artifypf@gmail.com
            </Link>
            <Link href="/" className="hover:underline">
              +54 156943903
            </Link>
            <Link href="/" className="hover:underline">
              Avenida Siempreviva 742 Springfield USA /{" "}
            </Link>
          </div>
          <div className="text-xs font-extralight flex flex-col w-[350px] py-3 px-1 gap-1 items-start text-white">
            <h1 className="py-3 font-bold text-lg">Redes Sociales </h1>
            <div className="flex gap-2 content-center items-center">
              <Image src="/images/instagram.svg" width={20} height={20} alt="logo" />
              <a href="https://www.instagram.com/" className="hover:underline">
                Instagram
              </a>
            </div>
            <div className="flex gap-2 content-center items-center">
              <Image src="/images/facebook.svg" width={20} height={20} alt="logo" />
              <a href="https://www.facebook.com/" className="hover:underline">
                Facebook
              </a>
            </div>
            <div className="flex gap-2 content-center items-center">
              <Image src="/images/linkedin.svg" width={20} height={20} alt="logo" />
              <a href="https://www.linkedin.com/" className="hover:underline">
                Linkedin
              </a>
            </div>
          </div>
      </div>
      <h1 className="w-full flex py-4 justify-center items-center text-xs text-white">
        © ARTIFY Todos los derechos reservados, 2023
      </h1>
    </div>
  );
}
