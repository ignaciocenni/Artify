import prisma from "../db/client";

const allProvinces = async () => {
  const response = await prisma.Province.findMany();
  return response;
};

export { allProvinces };
