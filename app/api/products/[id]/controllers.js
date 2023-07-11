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
          lastName: true,
          image: true,
          province: {
            select: {
              name: true,
            },
          },
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

  // Validates:
  //Name
  const nameRegex = /^[a-zA-Z0-9\s.,áéíóúÁÉÍÓÚñÑ]*$/;
  if (!nameRegex.test(name)) throw new Error("The must be a normal name...");

  //Description
  if (description.length <= 10 && !nameRegex.test(description))
    throw new Error("The description must contain at least 10 characters.");

  //Price
  if (price <= 0) throw new Error("Price cannot be less than or equal to $0");

  //Stock
  if (stock <= 0) throw new Error("Stock cannot be less than 0 units.");

  //Image
  ///...

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
