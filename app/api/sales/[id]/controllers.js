import prisma from "../../db/client";

/* const getSale = async (id) => {
  const searchSale = await prisma.sales.findFirst({
    where: {
      id: +id,
    },
    include: {
      seller: true,
      customer: true,
      saledProduct: {
        select: {
          name: true,
          price: true,
        },
      },
    },
  });

  return searchSale;
}; */

const getSale = async (id) => {
  const searchSale = await prisma.Product.findFirst({
    where: {
      id: +id,
    },
    select: {
      sales: {
        include: {
          customer: true,
          saledProduct: true,
        },
      },
    },
  });

  return searchSale;
};

export { getSale };
