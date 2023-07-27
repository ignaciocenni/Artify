"use client";
import Card from "./Card";
import Loading from "../app/loading";
import NotFound from "./notFound";
import LoadingPublication from "./loadings/LoadingPublication";

export default function Cards({ products }) {
  return (
    <>
      {products.length ? (
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
      ) : !products ? (
        <NotFound />
      ) : (
        <div className="flex justify-center items-center w-full">
          <LoadingPublication />
        </div>
      )}
    </>
  );
}
