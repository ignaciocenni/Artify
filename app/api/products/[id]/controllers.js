import prisma from "../../db/client";

const getProduct = async (id) => {
  const searchedUser = await prisma.Product.findFirst({
    where: {
      id: +id,
    },
    include: {
      reviews: true,
      province: {
        select: {
          name: true,
        },
      },
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
        },
      },
    },
  });
  if (!searchedUser) throw new Error("Product doesn't exist");
  return searchedUser;
};

const updateProduct = async (id, name, description, price, stock, saveImage, deleteImage, status, province) => {
  // Validates:
  //Name
  const nameRegex = /^[a-zA-Z0-9\s.,áéíóúÁÉÍÓÚñÑ]*$/;

  if (!nameRegex.test(name)) throw new Error("The must be a normal name...");

  // Description

  //if (description.length <= 10 && !nameRegex.test(description)) throw new Error("The description must contain at least 10 characters.");


  // Price
  if (price <= 0) throw new Error("Price cannot be less than or equal to $0");

  // Stock
  if (stock <= 0) throw new Error("Stock cannot be less than 0 units.");

  //Image
  const oldProduct = await prisma.product.findFirst({ where: { id: +id } });

  let images = oldProduct.image;
  if (deleteImage) {
    if (Array.isArray(deleteImage)) {
      images = images.filter((img) => !deleteImage.includes(img));
    } else {
      images = images.filter((img) => img !== deleteImage);
    }
  }

  if (saveImage) {
    images = Array.isArray(saveImage) ? [...images, ...saveImage] : [...images, saveImage];
  }

  const product = await prisma.product.update({
    where: {
      id: +id,
    },
    data: {
      name: name,
      description: description,
      price: price,
      stock: stock,
      image: images,
      status: status,
      province: province,
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
