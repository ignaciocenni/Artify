import prisma from "../db/client";

const getAllProducts = async () => {
  const response = await prisma.Product.findMany();
  if (!response.length) throw new Error("There are not product");
  return response;
};

const addProduct = async (name, description, price, stock, image, userId, categoryId) => {
  if (!name || !description || !price || !stock || !image || !userId || !categoryId)
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

const updateProduct = async (id, name, description, price, stock, image) => {
  if (!id && !name && !description && !price && !stock && !image)
    throw new Error("Missing argument");

  const product = await prisma.product.update({
    where: {
      id: id,
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

export { getAllProducts, addProduct, updateProduct };
