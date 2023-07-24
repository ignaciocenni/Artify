"use client";
import Card from "./Card";
import Loading from "../app/loading";
import NotFound from "./notFound";

export default function Cards({ products }) {
  const response = products;
  return (
    <>
      {response && response.length > 0 ? (
        <div className="grid grid-cols-4 px-2 items-center justify-center">
          {response.map((resp) => (
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
      ) : response && response.length == 0 ? (
        <NotFound />
      ) : (
        <Loading />
      )}
    </>
  );
}
