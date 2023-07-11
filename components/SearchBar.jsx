import { useDispatch } from "react-redux";
import { search } from "../store/slice";

export default function SearchBar() {
  const dispatch = useDispatch();

  const handlerValue = async (event) => {
    const res = await fetch(
      `http://localhost:3000/api/products?name=${event.target.value}`
    ).then((res) => res.json());
    dispatch(search(res));
  };

  return (
    <div className="flex flex-col content-center gap-2">
      <h1 className="text-2xl font-semibold">Buscar</h1>
      <input
        placeholder="ingrese aquí.."
        onChange={handlerValue}
        className="text-black px-3 w-60 h-11 rounded-xl bg-[var(--primary)] focus:outline-none "
        type="text"
      />
      {/* <button
        // onClick={}
        className="hover:bg-[var(--background-sec)] hover:text-black text-white bg-[var(--detail)]  rounded-lg flex content-center items-center shadow-xl text-xs font-bold px-6 h-11">
        <h1 className="">Buscar</h1>
      </button> */}
    </div>
  );
}
