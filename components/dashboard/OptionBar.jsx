"use client";
import Image from "next/image";
import React, { useState } from "react";
import people from "../../public/images/people.svg";
import release from "../../public/images/releases.svg";
import metrics from "../../public/images/bar-char.svg";

const OptionPublicationBar = (params) => {
  const {activeOption, setActiveOption} = params

  const handleOptionClick = (category) => {
    setActiveOption(category);
  };

  return (
    <div className="flex justify-center items-center gap-10">
      <button
        className={`px-3 py-2 ${
          activeOption === "publications"
            ? "shadow-lg border-b-4 border-[var(--extra)]"
            : ""
        }  relative bottom-5 left-5 px-3.5 py-2.5 bg-[var(--background)] rounded-lg shadow items-center gap-5 flex text-xl font-medium`}
        onClick={() => handleOptionClick("publications")}>
        <Image width={50} src={release} alt="release" />
        Publicaciones
      </button>
      <button
        className={`px-3 py-2 ${
          activeOption === "user"
            ? "shadow-lg border-b-4 border-[var(--extra)]"
            : ""
        }  relative bottom-5 left-5 px-3.5 py-2.5 bg-[var(--background)] rounded-lg shadow items-center gap-5 flex text-xl font-medium`}
        onClick={() => handleOptionClick("user")}>
        <Image width={50} src={people} alt="people" />
        Usuarios
      </button>
      <button
        className={`px-3 py-4 ${
          activeOption === "metrics"
            ? "shadow-lg border-b-4 border-[var(--extra)]"
            : ""
        }  relative bottom-5 left-5 px-3.5 py-2.5 bg-[var(--background)] rounded-lg shadow items-center gap-5 flex text-xl font-medium`}
        onClick={() => handleOptionClick("metrics")}>
        <Image width={38} src={metrics} alt="people" />
        Metricas
      </button>
    </div>
  );
};

export default OptionPublicationBar;
