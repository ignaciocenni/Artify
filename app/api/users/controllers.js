import prisma from "../db/client";

const allUsers = async () => {
  const res = await prisma.User.findMany({
    include: {
      products: true,
    },
  });
  if (!res.length) {
    throw new Error("Users not found");
  } else return res;
};

const addUser = async (name, email, password, rol) => {
  if (!name || !email || !password || !rol)
    throw new Error("Arguments missing");

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

export { allUsers, addUser };
