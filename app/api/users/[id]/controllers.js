import prisma from "../../db/client";

const getUser = async (id) => {
  const user = await prisma.user.findFirst({
    where: {
      id: id,
    },
  });

  if (!user) throw new Error("User not found");

  return user;
};

const updateUser = async (id, name, email, password, lastName, image, aboutMe, wallet, cbu, alias, socials, status, rol) => {
  // Validates:
  // Name and lastName
  const nameRegex = /^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s']+$/;

  /* if (name && lastName) {
    if (!nameRegex.test(name) && !nameRegex.test(lastName)) throw new Error("Enter a correct name.");
  }

  // Email
  if (email) {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    if (!emailRegex.test(email)) throw new Error("Enter a valid email.");
  }

  // Password
  if (password) {
    const passwordRegex = /^(?=.*\d)[A-Za-z\d\W]{8,16}$/;

    if (!passwordRegex.test(password))
      throw new Error(
        "The password must have between 8 and 16 characters, at least one digit, at least one lowercase letter, at least one uppercase letter, and at least one non-alphanumeric character."
      );
  }
  // AboutMe
  if (aboutMe) {
    if (aboutMe.length < 40) throw new Error("You have to add a description of yourself, or your work, of at least 5 characters.");
  }
 */
  const user = await prisma.User.update({
    where: {
      id: id,
    },
    data: {
      name: name,
      email: email,
      password: password,
      lastName: lastName,
      image: image,
      aboutMe: aboutMe,
      wallet: wallet,
      cbu: cbu,
      alias: alias,
      socials: socials,
      status: status,
      rol: rol,
    },
  });

  return user;
};

const deleteUser = async (id) => {
  const searchedUser = await prisma.User.findFirst({ where: { id: id } });

  if (searchedUser === null) throw new Error("User not found");

  const user = await prisma.User.delete({
    where: {
      id: id,
    },
  });

  return user;
};

export { getUser, updateUser, deleteUser };
