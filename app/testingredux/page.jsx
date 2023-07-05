'use client'
import { useDispatch, useSelector } from "react-redux";
import { rename } from "@/store/slice";
import {useState} from 'react'
export default function Page() {
   const [newValue, setnewValue] = useState('')
    const nombre = useSelector(state => state.valores.nombre)
    const dispacht= useDispatch();
    const handlerChange=()=>{
      dispacht(rename(newValue)) ; 
      setnewValue('')
    }
    return (
      <div className=" z-10">
        {nombre}
        <br />
        <input type="text" value={newValue} onChange={event =>setnewValue(event.target.value)} />
        <button onClick={handlerChange}>cambiar</button>
      </div>
    );
  }