import Image from "next/image";
import Link from "next/link";
import logo from "../public/images/logo.jpg";

export default function NavBarSecundary() {
  return (
    <nav className="h-[100px] w-full flex justify-between items-start gap-2.5 py-5 px-8">
      <Link href="/">
        <Image src={logo} alt="logo" />
      </Link>

      <Link href="/signin">
        <button
          className="text-white text-xs font-extrabold px-4 py-5 bg-neutral-950 rounded-lg flex-col justify-start items-start inline-flex"
          type="submit">
          Cuenta Nueva
        </button>
      </Link>

    </nav>
  );
}
