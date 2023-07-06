import prisma from "../db/client";

const getAllProducts = async (name) => {
  if (name) {
    const response = await prisma.Product.findMany({
      where: {
        name: {
          contains: name,
          mode: "insensitive",
        },
      },
      include: {
        reviews: true,
      },
    });
    if (!response.length) throw new Error("Not found");
    return response;
  }
  const response = await prisma.Product.findMany({
    include: {
      reviews: true,
    },
  });
  if (!response.length) throw new Error("Products not found");
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
