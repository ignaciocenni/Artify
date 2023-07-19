"use client";
import CardPublication from "./CardPublication";

const CardsPublication = ({ products }) => {
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
          />
        ))
      ) : (
        <div>No hay informacion!</div>
      )}
    </>
  );
};

export default CardsPublication;
