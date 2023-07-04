"use client"
import Image from "next/image"
import { useState } from "react"


const NavBar = () => {
    const [inputSearch, setInputSearch] = useState("")

const handlerValue = (event) => {
    const value = event.target.value
    setInputSearch(value)
}
const handlerText = () => {
    console.log(inputSearch);
}

  return (
    <div className="flex justify-center items-center h-24 w-full pt-2.5">
        <nav className="flex justify-center w-2/4 bg-[#F3E8FF] rounded">
            <div className="flex items-center w-full justify-around">
                <Image className="pr-2 h-2/4" src="/images/logo.svg" width={65.31} height={40}/>
                <button className="text-black text-xs border-2 border-black rounded h-11">
                    <p className="px-4">Explorar</p>
                </button>
                <input
                 
                onChange={handlerValue}
                className="text-black h-11 border-2 border-black rounded-full bg-[#F3E8FF] " 
                type="text" />
                <button 
                onClick={handlerText}
                className="text-black text-xs border-2 border-black rounded h-11">
                    <p className="px-4">Buscar</p>
                </button>
                <div className="flex justify-evenly w-1/5">
                <Image src="/images/me.png" width={50} height={50}/>
                <Image src="/images/menuButton.svg" width={40} height={40}/>
                </div>
            </div>   
        </nav>
    </div>
  )
}

export default NavBar