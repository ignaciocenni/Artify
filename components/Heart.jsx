"use client";
import { useState } from "react";
import Image from "next/image";
import favorite from "../public/images/favorite_fill.svg";
import favoriteBorder from "../public/images/favorite-borde.svg";

export default function Heart() {
  const [toggle, setToggle] = useState(false);

  const handleToggle = () => {
    setToggle(!toggle);
  };
  return (
    <div>
      {toggle ? (
        <button onClick={handleToggle}>
          <Image 
          src={favorite} 
          alt="favorite" 
          height={30}
          width={30}/>
        </button>
      ) : (
        <button onClick={handleToggle}>
          <Image 
          src={favoriteBorder} 
          alt="favorite"
          height={30}
          width={30}
           />
        </button>
      )}
    </div>
  );
}
