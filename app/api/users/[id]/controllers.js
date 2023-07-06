import prisma from "../../db/client";

const getUser = async (id) => {
  const user = await prisma.user.findFirst({
    where: {
      id: +id,
    },
  });

  if (!user) throw new Error("User not found");

  return user;
};
const updateUser = async (id, name, email, password) => {
  if (!id && !name && !email && !password) throw new Error("Missing arguments");

  const user = await prisma.User.update({
    where: {
      id: +id,
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
  const searchedUser = await prisma.User.findFirst({ where: { id : +id } });

  if (searchedUser === null) throw new Error("User not found");

  const user = await prisma.User.delete({
    where: {
      id: +id,
    },
  });

  return user;
};

export { getUser, updateUser, deleteUser };
