import apply from "../../public/images/apply.svg";
import Image from "next/image";
import axios from "axios"
import { useDispatch } from "react-redux";
import { GET_INFO } from "../../store/slice";


function ApplyButton({id,value}) {
  const dispatch = useDispatch()
  
  const handleApply = async (id,value) => {
    if(value === "PENDING" || value ==="ACTIVE" || value === "INACTIVE"){
      await axios.put(`api/products/${id}`, {"status":`${value}`})
      const products = await axios.get("api/products")
      dispatch(GET_INFO(products))
      
    }else{
      await axios.put(`api/users/${id}`, {"rol":`${value}`})
      const users = await axios.get("api/users")
      dispatch(GET_INFO(users))
      
    }

    }

  return (
    <>
      <button onClick={()=>handleApply(id,value)} className="w-24 h-10 px-3 py-1 bg-purple-600 rounded-full shadow-md shadow-zinc-400 justify-center items-center gap-1 flex">
        <h1 className="text-white text-xs">Aplicar</h1>
        <Image width={30} src={apply} height={30} alt="" />
      </button>
    </>
  );
}

export default ApplyButton;
