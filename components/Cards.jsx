"use client";
import Card from "./Card";
import LoadingPublication from "./loadings/LoadingPublication";
import NotFounded from "./NotFounded";

export default function Cards({ products }) {
  return (
    <>
      {products && products.length > 0 ? (
        <div className="grid grid-cols-5 px-2 gap-4 w-full items-center justify-center">
          {products.map((resp) => (
            <Card
              key={resp.id}
              id={resp.id}
              image={resp.image}
              user={`${resp.user.name} ${resp.user.lastName}`}
              price={resp.price}
              title={resp.name}
              userImage={resp.user.image}
              userId={resp.userId}
            />
          ))}
        </div>
      ) : products && products.length == 0 ? (
        <div className="flex justify-center items-center w-full">
          <NotFounded />
        </div>
      ) : (
        <div className="flex flex-col justify-center items-center w-full">
          <LoadingPublication />
        </div>
      )}
    </>
  );
}
