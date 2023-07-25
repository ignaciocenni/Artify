import { useDispatch } from "react-redux";
import { localProducts } from "../../store/slice";
import Swal from "sweetalert2";
import Image from "next/image";

export default function ButtonCloseCart({ id, setProducts, setUrl }) {
  const dispatch = useDispatch();

  const cartList = JSON.parse(localStorage.getItem("products"));

  const handlerClick = async (id) => {
    setUrl("");
    if (cartList.length === 1) {
      Swal.fire({
        title: "Si eliminas este producto tu carrito quedara vacio",
        text: "¿Estas seguro de eliminarlo?",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Si, quiero borrarlo!",
      }).then(async (result) => {
        if (result.isConfirmed) {
          Swal.fire("Tu producto fue eliminado exitosamente!", "", "success");
          const newCartList = cartList.filter((item) => item.id != id);
          localStorage.setItem("products", JSON.stringify(newCartList));
          setProducts(newCartList);
          dispatch(localProducts(newCartList));

          const newList = await JSON.parse(localStorage.getItem("products"));
          if (newCartList.length === 0) {
            dispatch(localProducts(newList));
          }
        }
      });
    } else {
      const newCartList = cartList.filter((item) => item.id != id);
      localStorage.setItem("products", JSON.stringify(newCartList));
      setProducts(newCartList);
      dispatch(localProducts(newCartList));

      const newList = await JSON.parse(localStorage.getItem("products"));
      if (newCartList.length === 0) {
        dispatch(localProducts(newList));
      }
    }
  };

  return (
    <button onClick={() => handlerClick(id)}>
      <Image alt="close" width={25} height={25} src="/images/close.svg" />
    </button>
  );
}
