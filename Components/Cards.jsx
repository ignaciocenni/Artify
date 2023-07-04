import React from "react";
import Card from "./Card";
import { publicacionesArtesania } from "./data";

export const Cards = () => {
  return (
    <div className="grid grid-cols-4 w-[800px] px-2">
      {publicacionesArtesania.map((data) => (
        <Card
          key={data.id}
          id={data.id}
          image={data.imagenProducto}
          user={data.username}
          price={data.precio}
          title={data.titulo}
          userImage={data.imagenUsuario}
        />
      ))}
    </div>
  );
};

