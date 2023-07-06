import React from "react";
import Card from "./Card";
import { publicacionesArtesania } from "./databs";
export default function Cards({data}) {
  const info = data[0]
  console.log(info);
  return (
    <div className="grid grid-cols-4 w-1/2 px-2">
      {info.map((resp) => (
        <Card
        key={resp.id}
        id={resp.id}
        image={resp.image}
        user={resp.name}
        price={resp.price}
        title={resp.name}
        userImage={resp.image}
        />
      ))}
    </div>
  );
}
