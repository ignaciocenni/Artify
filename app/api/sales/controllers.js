import prisma from "../db/client";

const getAllSales = async () => {
  const response = await prisma.Sales.findMany({
    select: {
      id: true,
      seller: true,
      sellerId: true,
      customer: true,
      customerId: true,
      //saledProduct: true,
      //productId: true,
      //totalPrice: true,
      //productQuantity: true,
    },
  });

  if (!response.length) throw new Error("Anything sale in the DataBase.");
  return response;
};

const addSale = async (
  sellerId,
  customerId,
  productId,
  totalPrice,
  productQuantity
) => {
  const newSale = await prisma.Sales.create({
    data: {
      sellerId,
      customerId,
      productId,
      totalPrice,
      productQuantity,
    },
  });

  return newSale;
};

export { getAllSales, addSale };
