"use client";
import CardUser from "./CardUser";


const CardsUser = ({users}) => {
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
