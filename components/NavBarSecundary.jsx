import Image from "next/image";
import Link from "next/link";
import logo from "../public/images/logo.jpg";

export default function NavBarSecundary() {
  return (
    <nav className="h-[100px] w-full flex justify-between items-start gap-2.5 py-5 px-8">
      <Link href="/">
        <Image 
        src={logo} 
        alt="logo"
        width={50}
        height={50} />
      </Link>

      <Link href="/">
        <button className="px-[25px] py-[15px] bg-neutral-950 rounded-lg flex-col justify-start items-start inline-flex">
          <h1 className="text-white text-[12px] font-extrabold">Volver</h1>
        </button>
      </Link>
    </nav>
  );
}
