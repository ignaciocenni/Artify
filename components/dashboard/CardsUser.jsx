"use client";

import CardUser from "./CardUser";
import { useSelector, useDispatch } from "react-redux";
import { getUsers } from "../../store/slice";
import axios from "axios";
import { useEffect } from "react";
const CardsUser = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    const getAllUsers = () => {
      return axios.get("/api/users");
    };
    const AllUsers = getAllUsers().then(() => (users.data ? dispatch(getUsers(AllUsers.data)) : ""));
  }, [dispatch]);
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
