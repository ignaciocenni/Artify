import prisma from "../db/client";

const getAllProvinces = async () => {
  const response = await prisma.Province.findMany();
  return response;
};

export { getAllProvinces };
