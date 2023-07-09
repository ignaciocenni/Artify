"use client"
import Cards from "@/Components/Cards";
import NavBar from "@/Components/NavBar";
import Image from "next/image";
import Link from "next/link";
import { useSelector } from "react-redux";

export default function Profile() {
  const products = useSelector(state => state.valores.products);
  return (
    <div className="z-10">
      <NavBar />
      <div className="flex justify-center items-center w-full">
        <div className="flex w-2/4 justify-evenly">
            <div className="flex justify-center flex-col items-center">
                <Image src="/images/me-194.9x150.png" width={144} height={144} />
                <h1 className="pb-2 font-bold text-3xl">@Username</h1>
                <p className="pb-2">Artesano</p>
                <div className="flex w-full justify-around">
                    <Link href="/">Post</Link>
                    <Link href="/">Location</Link>
                </div>
            </div>
            <div className="flex w-2/4 items-center">
                <p className="text-sm">Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Ipsum nam expedita repellendus rerum dignissimos recusandae,
                neque doloremque, inventore hic vel cupiditate tenetur placeat
                tempora quibusdam, omnis earum natus dolorem adipisci? Lorem,
                 ipsum dolor sit amet consectetur adipisicing elit. Fugiat eos
                  tempora reprehenderit </p>
            </div>
        </div>
      </div>
      <div className="flex justify-center items-center w-full">
        <Cards products={products}/>
      </div>
    </div>
  );
}
