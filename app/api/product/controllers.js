import prisma from "../db/client";

// Seria necesario incluir los usuarios?
const allProducts = async () => {
  const response = await prisma.Product.findMany();
  if (response.length) throw new Error("There are not products.");
  return response;
};

const addProduct = async (
  name,
  description,
  price,
  stock,
  image,
  userId,
  categoryId
) => {
  if (
    !name ||
    !description ||
    !price ||
    !stock ||
    !image ||
    !userId ||
    !categoryId
  )
    throw new Error("Missing arguments");

  const newProduct = await prisma.Product.create({
    data: {
      name,
      description,
      price,
      stock,
      image,
      userId,
      categoryId,
    },
  });

  return newProduct;
};

// Check this function.
const productDelete = async (id) => {
  if (isNaN(id)) throw new Error("Id must be a number");

  const searchIdProd = await prisma.Product.delete({
    where: {
      id: parseInt(id),
    },
  });
};

//...

export { allProducts, addProduct, productDelete };
