"use client";
import CardPublication from "./CardPublication";
import { useSelector, useDispatch } from "react-redux";
import { useSession } from "next-auth/react";
import { useEffect } from "react";
import { GET_INFO } from "../../store/slice";
import axios from "axios";
const CardsPublication = () => {
  const { data: session } = useSession();
  const dispatch = useDispatch();

  useEffect(() => {
    const getProducts = () => {
      return axios.get("/api/products");
    };
    const products = getProducts().then(() => (products.data ? dispatch(GET_INFO(products.data)) : ""));
  }, [dispatch]);

  let allproducts = useSelector((state) => state.valores.dashProducts);
  let products = [...allproducts];
  if (session && session.user.role === "USER") {
    products = allproducts.filter((product) => product.user.email === session.user.email);
  } else {
    products = allproducts;
  }

  return (
    <>
      {products.length ? (
        products.map((product) => (
          <CardPublication
            key={product.id}
            id={product.id}
            image={product.image}
            user={`${product.user.name} ${product.user.lastName}`}
            price={product.price}
            title={product.name}
            category={product.category}
            userImage={product.user.image}
            status={product.status}
          />
        ))
      ) : (
        <div className="px-4 py-3 rounded-lg shadow-md items-center gap-3 inline-flex mx-3 font-medium">No hay publicaciones</div>
      )}
    </>
  );
};

export default CardsPublication;
