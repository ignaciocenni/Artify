"use client";
import Card from "./Card";
import Suspense from'react'
import Loading from "@/app/loading";

export default function Cards({ products }) {
  const response = products
  console.log(response);
  return (
    <div className="grid grid-cols-4 w-1/2 px-2">
      {!response.length? (
            <Loading/>// Renderiza el mensaje de error
          ) : (
            response.map((resp) => (
          
              <Card
                key={resp.id}
                id={resp.id}
                image={resp.image}
                user={`${resp.user.name} ${resp.user.lastName}`}
                price={resp.price}
                title={resp.name}
                userImage={resp.user.image}
              />
            ))
          )}
   

      

    </div>
  );
}
