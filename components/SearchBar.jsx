import { useDispatch, useSelector } from "react-redux";
import { search } from "../store/slice";
import Image from "next/image";
import lupa from "../public/images/search-white.svg";

export default function SearchBar() {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.valores.copyProducts);
  const handlerValue = (event) => {
    if (event.target.value === "") {
      dispatch(search([...products]));
    }
    const res = products.filter((product) =>
      product.name.toLowerCase().includes(event.target.value.toLowerCase())
    );
    dispatch(search(res));
  };

  return (
    <div className="flex content-center">
      {/* <h1 className="text-2xl font-semibold">Buscar</h1> */}
      <input
        placeholder="Buscar.."
        onChange={handlerValue}
        className="text-black px-3 w-60 h-11 focus:w-96 rounded-l-xl bg-[var(--primary)] focus:outline-none transition-all"
        type="text"
      />
      <div className="bg-[var(--detail)] px-3 flex rounded-r-xl">
        <Image src={lupa} width={20} height={20} alt="buscar" />
      </div>
    </div>
  );
}
