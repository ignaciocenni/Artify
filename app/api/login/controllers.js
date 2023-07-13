import prisma from "../db/client";

const checkDates = async (email, password) => {
  if (!email || !password) throw new Error("Missing arguments");

  const userSearch = await prisma.User.findFirst({ where: { email } });

  if (!userSearch) throw new Error("Your account does not exist.");

  if (password === userSearch.password) return true;
};

export { checkDates };
