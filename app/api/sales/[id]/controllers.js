import prisma from "../../db/client";

const getSeller = async (id) => {
  const searchSell = await prisma.Seller.findFirst({
    where: {
      id: +id,
    },
    include: {
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

export { getSeller };
