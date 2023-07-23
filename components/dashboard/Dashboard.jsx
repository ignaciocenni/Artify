"use client";
import { useState } from "react";
import logoWhite from "../../public/images/logoWhite.svg";
import Image from "next/image";
import OptionPublicationBar from "./OptionPublicationBar";
import OptionUserBar from "./OptionUserBar.jsx";
import OptionBar from "./OptionBar";
import CardsPublication from "./CardsPublication";
import ColPublication from "./ColPublication";
import ColUsers from "./ColUsers";
import CardsUser from "./CardsUser";
import CardsMetrics from "./CardsMetrics";
import { useSelector } from "react-redux";
import { useSession } from "next-auth/react";

const Dashboard = () => {
  const { data: session } = useSession();

  const [activeOption, setActiveOption] = useState("publications");

  const allUsers = useSelector((state) => state.valores.users);

  const [users, setUsers] = useState(allUsers);

  return (
    <div className="w-full flex-col justify-start items-start flex">
      <div className="flex flex-col w-full h-44 px-2 py-6 bg-gradient-to-l from-pink-500 via-purple-400 to-purple-900  justify-start items-start gap-5 ">
        <div className="w-full px-2 flex justify-between items-center">
          <div className="flex flex-col">
            <h1 className="text-white font-light text-xl">Bienvenido de nuevo!</h1>
            <h1 className="text-white font-semibold">Dashboard • {session ? session.user.role : null}</h1>
          </div>
          <Image src={logoWhite} width={180} height={180} alt="logo" />
        </div>
        <OptionBar setActiveOption={setActiveOption} activeOption={activeOption} session={session} />
      </div>
      {activeOption == "publications" ? (
        <div className="flex flex-col w-full">
          <div className="px-6 pt-11 pb-2.5 justify-start items-start gap-2 inline-flex">
            <OptionPublicationBar />
          </div>
          <ColPublication />
          <CardsPublication />
        </div>
      ) : activeOption == "user" ? (
        <div className="w-full flex flex-col ">
          <div className="px-6 pt-11 pb-2.5 justify-start items-start gap-2 inline-flex">
            <OptionUserBar />
          </div>
          <ColUsers />
          <CardsUser />
        </div>
      ) : (
        <CardsMetrics session={session} />
      )}
    </div>
  );
};

export default Dashboard;
