import prisma from "../../db/client";

const getSale = async (id) => {
  const searchSale = await prisma.sales.findFirst({
    where: {
      id: +id,
    },
  });

  return searchSale;
};

export { getSale };
