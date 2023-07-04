import prisma from "../db/client";

const allUsers = async () => {
  const response = await prisma.User.findMany({
    include: {
      products: true,
    },
  });

  if (!response.length) throw new Error("Users not found");
  return response;
};

const addUser = async (name, email, password, rol) => {
  if (!name || !email || !password || !rol) throw new Error("Missing arguments");

  const searchedUser = await prisma.User.findFirst({ where: { email } });
  if (searchedUser === null) {
    const newUser = await prisma.User.create({
      data: {
        name,
        email,
        password,
        rol,
      },
    });

    return newUser;
  } else throw new Error("User already exists");
};

const updateUser = async (id, name, email, password) => {
  if (!id && !name && !email && !password) throw new Error("Missing arguments");

  const user = await prisma.User.update({
    where: {
      id: id,
    },
    data: {
      name: name,
      email: email,
      password: password,
    },
  });

  return user;
};

const deleteUser = async (id) => {
  if (!id) throw new Error("Missing id");
  if (typeof id !== "number") throw new Error("Id must be a number");

  const searchedUser = await prisma.User.findFirst({ where: { id } });

  if (searchedUser === null) throw new Error("User not found");

  const user = await prisma.User.delete({
    where: {
      id: id,
    },
  });

  return user;
};

export { allUsers, addUser, updateUser, deleteUser };
