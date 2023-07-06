import prisma from "../../db/client";

const getProduct = async (id) => {
  const searchedUser = await prisma.Product.findFirst({
    where: {
      id: id,
    },
    include: {
      reviews: true,
    },
  });
  if (!searchedUser) throw new Error("Product doesn't exist");
  return searchedUser;
};

const deleteProduct = async (id) => {
  const searchedUser = await prisma.Product.findFirst({
    where: {
      id: id,
    },
  });
  if (!searchedUser) throw new Error("Product doesn't exist");
  const searchIdProd = await prisma.Product.delete({
    where: {
      id: id,
    },
  });
  return searchIdProd;
};

export { getProduct, deleteProduct };
