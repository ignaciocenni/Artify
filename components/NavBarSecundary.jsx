import Image from "next/image";
import Link from "next/link";
import logo from "../public/images/logo.jpg";

export default function NavBarSecundary() {
  return (
    <nav className="h-[100px] w-full flex justify-between items-start gap-2.5 py-5 px-8">
      <Link href="/">
        <Image src={logo} alt="logo" />
      </Link>
    </nav>
  );
}
