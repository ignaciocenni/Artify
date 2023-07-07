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

const addUser = async (name, password, lastName, email, rol, provinceId) => {
  if (!name || !email || !password || !lastName || !provinceId)
    throw new Error("Missing arguments");

  const searchedUser = await prisma.User.findFirst({ where: { email } });
  if (searchedUser === null) {
    const newUser = await prisma.User.create({
      data: {
        name,
        password,
        lastName,
        email,
        rol,
        province: {
          connect: {
            id: provinceId,
          },
        },
      },
    });

    return newUser;
  } else throw new Error("User already exists");
};

export { allUsers, addUser };
