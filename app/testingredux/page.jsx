'use client'
import { useDispatch, useSelector } from "react-redux";
import { rename } from "@/store/slice";
export default function Page() {
   const [newValue, setnewValue] = useState('')
    const nombre = useSelector(state => state.valores.nombre)
    const dispacht= useDispatch();
    const handlerChange=()=>{
      dispacht(rename(newValue)) ; 
    }
    return (
      <div className=" z-10">
        {nombre}
        <input type="text" value={newValue} onChange={event =>setnewValue(event.target.value)} />
        <button onClick={handlerChange}>cambiar</button>
      </div>
    );
  }