import prisma from "../../db/client";

const getProduct = async (id) => {
  const searchedUser = await prisma.Product.findFirst({
    where: {
      id: +id,
    },
    include: {
      reviews: true,
      category: {
        select: {
          name: true,
        },
      },
      user: {
        select: {
          email: true,
          name: true,
        },
      },
    },
  });
  if (!searchedUser) throw new Error("Product doesn't exist");
  return searchedUser;
};

const updateProduct = async (id, name, description, price, stock, image) => {
  if (!id && !name && !description && !price && !stock && !image)
    throw new Error("Missing argument");

  const product = await prisma.product.update({
    where: {
      id: +id,
    },
    data: {
      name: name,
      description: description,
      price: price,
      stock: stock,
      image: image,
    },
  });
  return product;
};

const deleteProduct = async (id) => {
  const searchedUser = await prisma.Product.findFirst({
    where: {
      id: +id,
    },
  });
  if (!searchedUser) throw new Error("Product doesn't exist");
  const searchIdProd = await prisma.Product.delete({
    where: {
      id: +id,
    },
  });
  return searchIdProd;
};

export { getProduct, deleteProduct, updateProduct };
