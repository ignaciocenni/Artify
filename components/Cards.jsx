"use client"
import Card from "./Card";

export default function Cards({ products }) {
  const response = products.slice(0, 1)[0]
  console.log(response);
  return (
    <div className="grid grid-cols-4 w-1/2 px-2">
      {response && response.map((resp) => (
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
