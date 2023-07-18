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
  if (!name || !email || !password || !lastName || !rol) throw new Error("Missing arguments");

  // Validates:

  // Email
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  if (!emailRegex.test(email)) throw new Error("Enter a valid email.");

  // Password
  // Verifica que la contraseña tenga al menos un dígito y esté compuesta por caracteres
  // alfanuméricos y no alfanuméricos, con una longitud entre 8 y 16 caracteres.
  const passwordRegex = /^(?=.*\d)[A-Za-z\d\W]{8,16}$/;
  if (!passwordRegex.test(password))
    throw new Error(
      "The password must have between 8 and 16 characters, at least one digit, at least one lowercase letter, at least one uppercase letter, and at least one non-alphanumeric character."
    );
  const searchedUser = await prisma.User.findFirst({ where: { email } });
  if (!searchedUser === null) throw new Error("User already exists");
  const newUser = await prisma.User.create({
    data: {
      name,
      password,
      lastName,
      email,
      rol,
      provinceId,
    },
  });
  return newUser;
};

export { allUsers, addUser };
