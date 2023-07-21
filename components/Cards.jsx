"use client";
import Card from "./Card";
import Loading from "../app/loading";
import NotFound from "../app/notFound";

export default  function Cards({ products }) {
  const response =  products;
  return (
    <div className="grid grid-cols-4 w-1/2 px-2">
      {response && response.length > 0 ? (
        response.map((resp) => (
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
        )) 
      ) : response && response.length ? (
        <NotFound />
      ) : (
        <Loading />
      )}
    </div>
  );
}
