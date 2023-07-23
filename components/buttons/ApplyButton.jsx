"use client";
import apply from "../../public/images/apply.svg";
import Image from "next/image";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { GET_INFO, getUsers, setDashUsers, setDashProducts } from "../../store/slice";
import Swal from "sweetalert2";
import { savingChanges } from "./alerts";

function ApplyButton({ id, value }) {
  const dispatch = useDispatch();
  const userRol = useSelector((state) => state.valores.userRol);
  const productStatus = useSelector((state) => state.valores.productStatus);
  const handleApply = async (id, value) => {
    Swal.fire(savingChanges);
    if (isNaN(+id)) {
      await axios.put(`api/users/${id}`, { rol: `${value}` });
      const newUsers = await axios.get("api/users");

      dispatch(getUsers(newUsers.data));
      if (userRol === "ADMIN") dispatch(setDashUsers([newUsers.data.filter((user) => user.rol === "ADMIN"), "ADMIN"]));
      if (userRol === "USER") dispatch(setDashUsers([newUsers.data.filter((user) => user.rol === "USER"), "USER"]));
      if (userRol === "ALL") dispatch(setDashUsers([newUsers.data, "ALL"]));
    } else {
      await axios.put(`api/products/${id}`, { status: `${value}` });
      const newProducts = await axios.get("api/products");

      dispatch(GET_INFO(newProducts.data));
      if (productStatus === "ACTIVE")
        dispatch(setDashProducts([newProducts.data.filter((product) => product.status === "ACTIVE"), "ACTIVE"]));
      if (productStatus === "INACTIVE")
        dispatch(setDashProducts([newProducts.data.filter((product) => product.status === "INACTIVE"), "INACTIVE"]));
      if (productStatus === "PENDING")
        dispatch(setDashProducts([newProducts.data.filter((product) => product.status === "PENDING"), "PENDING"]));
      if (productStatus === "ALL") dispatch(setDashProducts([newProducts.data]));
    }
  };

  return (
    <>
      <button
        onClick={() => handleApply(id, value)}
        className="w-24 h-10 px-3 py-1 bg-purple-600 rounded-full shadow-md shadow-zinc-400 justify-center items-center gap-1 flex"
      >
        <h1 className="text-white text-xs">Aplicar</h1>
        <Image width={30} src={apply} height={30} alt="" />
      </button>
    </>
  );
}

export default ApplyButton;
