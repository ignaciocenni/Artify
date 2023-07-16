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
      select: {
        id: true,
        name: true,
        price: true,
        image: true,
        userId: true,
        user: true,
        category: true,
        user: {
          select: {
            name: true,
            lastName: true,
            email: true,
            image: true,
            province: {
              select: {
                name: true,
              },
            },
          },
        },
        category: {
          select: {
            name: true,
          },
        },
      },
    });
    if (!response.length) throw new Error("Not found");
    return response;
  }
  const response = await prisma.Product.findMany({
    select: {
      id: true,
      name: true,
      price: true,
      image: true,
      userId: true,
      user: true,
      category: true,
      user: {
        select: {
          name: true,
          lastName: true,
          email: true,
          image: true,
          province: {
            select: {
              name: true,
            },
          },
        },
      },
      category: {
        select: {
          name: true,
        },
      },
    },
  });
  if (!response.length) throw new Error("Products not found");
  return response;
};

const addProduct = async (name, description, price, stock, image, userEmail, categoryId, authName, authImage) => {
  if (!name || !description || !price || !stock || !image || !userEmail || !categoryId || !authName) throw new Error("Missing arguments");

  // Validates:
  //Name
  const nameRegex = /^[a-zA-Z0-9\s.,áéíóúÁÉÍÓÚñÑ]*$/;
  if (!nameRegex.test(name)) throw new Error("The must be a normal name...");

  //Description
  if (description.length <= 10 && !nameRegex.test(description)) throw new Error("The description must contain at least 10 characters.");

  //Price
  if (price <= 0) throw new Error("Price cannot be less than or equal to $0");

  //Stock
  if (stock <= 0) throw new Error("Stock cannot be less than 0 units.");

  let user = await prisma.user.findFirst({
    where: {
      email: userEmail,
    },
  });
  const firstName = authName.split(" ")[0];
  const lastName = authName.split(" ")[1];
  if (!user) {
    await prisma.user.create({
      data: {
        name: firstName,
        password: "thirdPartyAuth",
        lastName: lastName,
        email: userEmail,
        image: authImage,
        province: {
          connect: {
            id: 1,
          },
        },
      },
    });
    user = await prisma.user.findFirst({
      where: {
        email: userEmail,
      },
    });
  }

  const newProduct = await prisma.Product.create({
    data: {
      name,
      description,
      price,
      stock,
      image,
      userId: user.id,
      categoryId,
    },
  });

  return newProduct;
};

export { getAllProducts, addProduct };
