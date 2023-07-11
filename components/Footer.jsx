import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <div className="flex flex-col w-full items-start pt-2 bg-[#281834]">
      <div className="flex py-5 items-center gap-24">
        <div className="flex flex-col px-7 gap-3">
          <Image
            src="/images/logoWhite.svg"
            width={60}
            height={40}
            alt="logo"
          />
          <h1 className="flex w-24 text-white text-xs font-extralight">
            Lorem ipsum dolor, sit amet consectetur adip Culpa placeat labore
            animi?
          </h1>
        </div>
        <div className="flex gap-2 items-start">
          <div className="text-xs font-extralight flex flex-col w-[350px] py-3 px-1 gap-1 items-start border-t border-t-stone-50 text-white">
            <h1 className="py-3 font-bold text-lg">Ayuda</h1>
            <Link href="/" className="hover:underline">
              Contáctanos
            </Link>
            <Link href="/" className="hover:underline">
              Métodos de pago
            </Link>
            <Link href="/" className="hover:underline">
              Preguntas frecuentes
            </Link>
            <Link href="/" className="hover:underline">
              Politicas de privacidad
            </Link>
            <Link href="/" className="hover:underline">
              Terminos y condiciones
            </Link>
          </div>
          <div className="text-xs font-extralight flex flex-col w-[350px] py-3 px-1 gap-1 items-start border-t border-t-stone-50 text-white">
            <h1 className="py-3 font-bold text-lg">Acerca de Artify </h1>
            <Link href="/" className="hover:underline">
              correo@dominio.com
            </Link>
            <Link href="/" className="hover:underline">
              +54 156943903
            </Link>
            <Link href="/" className="hover:underline">
              Avenida Siempreviva 742 Springfield USA
            </Link>
          </div>
          <div className="text-xs font-extralight flex flex-col w-[350px] py-3 px-1 gap-1 items-start border-t border-t-stone-50 text-white">
            <h1 className="py-3 font-bold text-lg">Redes Sociales </h1>
            <div className="flex gap-2 content-center items-center">
              <Image
                src="/images/instagram.svg"
                width={20}
                height={20}
                alt="logo"
              />
              <a href="https://www.instagram.com/" className="hover:underline">
                Instagram
              </a>
            </div>
            <div className="flex gap-2 content-center items-center">
              <Image
                src="/images/facebook.svg"
                width={20}
                height={20}
                alt="logo"
              />
              <a href="https://www.facebook.com/" className="hover:underline">
                Facebook
              </a>
            </div>
            <div className="flex gap-2 content-center items-center">
              <Image
                src="/images/linkedin.svg"
                width={20}
                height={20}
                alt="logo"
              />
              <a href="https://www.linkedin.com/" className="hover:underline">
                Linkedin
              </a>
            </div>
          </div>
        </div>
      </div>
      <h1 className="w-full flex py-4 justify-center items-center border-t border-t-stone-50 text-xs text-white">
        © ARTIFY Todos los derechos reservados, 2023
      </h1>
    </div>
  );
}
