"use client";
import CardPublication from "./CardPublication";
import { useSelector } from "react-redux";
import { useSession } from "next-auth/react";
const CardsPublication = () => {
  const { data: session } = useSession();
  const allproducts = useSelector((state) => state.valores.dashProducts);

  let products;
  if (session && session.user.role === "USER") {
    products = allproducts.filter(
      (product) => product.user.email === session.user.email
    );
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
        <div className="px-4 py-3 rounded-lg shadow-md items-center gap-3 inline-flex mx-3 font-medium">
          No hay publicaciones
        </div>
      )}
    </>
  );
};

export default CardsPublication;
