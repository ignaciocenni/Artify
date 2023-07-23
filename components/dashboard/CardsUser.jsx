"use client";

import CardUser from "./CardUser";
import { useSelector } from "react-redux";

const CardsUser = () => {
  const users = useSelector((state) => state.valores.dashUsers);
  return (
    <>
      {users.length ? (
        users.map((user) => (
          <CardUser
            key={user.id}
            id={user.id}
            name={user.name}
            lastName={user.lastName}
            email={user.email}
            rol={user.rol}
            image={user.image}
          />
        ))
      ) : (
        <div>No hay informacion!</div>
      )}
    </>
  );
};

export default CardsUser;
