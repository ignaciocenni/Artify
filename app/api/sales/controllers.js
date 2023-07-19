import prisma from "../db/client";

const getAllSales = async () => {
  const response = await prisma.Sales.findMany({
    select: {
      id: true,
      seller: true,
      sellerId: true,
      customer: true,
      customerId: true,
      saledProduct: true,
      totalPrice: true,
      productQuantity: true,
    },
  });
};

export { getAllSales };
