"use client";
import React from "react";
import { useState } from "react";
import SearchBar from "../SearchBar";
import logoWhite from "../../public/images/logoWhite.svg";
import Image from "next/image";
import OptionPublicationBar from "./OptionPublicationBar";
import OptionBar from "./OptionBar";
import CardsPublication from "./CardsPublication";
import ColPublication from "./ColPublication";
import ColUsers from "./ColUsers";
import CardsUser from "./CardsUser";
import { useSelector } from "react-redux";

const Dashboard = () => {
  const [activeOption, setActiveOption] = useState("publications");

  const products = useSelector((state) => state.valores.products);

  const users = useSelector((state) => state.valores.users);

  return (
    <div className="w-full flex-col justify-start items-start flex">
      <div className="flex flex-col w-full h-44 px-2 py-6 bg-gradient-to-l from-pink-500 via-purple-400 to-purple-900  justify-start items-start gap-5 ">
        <div className="w-full px-2 flex justify-between items-center">
          <div className="flex flex-col">
            <h1 className="text-white font-light text-xl">
              Hola bienvenido de nuevo!
            </h1>
            <h1 className="text-white font-semibold">dashboard • ADMIN</h1>
          </div>
          <Image src={logoWhite} width={180} height={180} alt="logo" />
        </div>
        <OptionBar
          setActiveOption={setActiveOption}
          activeOption={activeOption}
        />
      </div>
      {activeOption == "publications" ? (
        <div className="flex flex-col w-full">
          <div className="px-6 pt-11 pb-2.5 justify-start items-start gap-2 inline-flex">
            <OptionPublicationBar />
          </div>
          <ColPublication/>
          <CardsPublication products={products} />
        </div>
      ) : (
        <div className="w-full flex flex-col pt-11">
          <ColUsers/>
          <CardsUser users={users} />
        </div>
      )}
    </div>
  );
};

export default Dashboard;
