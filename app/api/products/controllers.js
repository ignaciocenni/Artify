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

const addProduct = async (name, description, price, stock, image, userId, categoryId) => {
  if (!name || !description || !price || !stock || !image || !userId || !categoryId)
    throw new Error("Missing arguments");
  const nameRegex = /^[a-zA-Z0-9\s.,áéíóúÁÉÍÓÚñÑ]*$/;

  if (!nameRegex.test(name)) throw new Error("The must be a normal name...");
  if (description.length <= 12) throw new Error("The description must be more of 12 letters.");
  if (price <= 0) throw new Error("Price cannot be less than or equal to $0");

  // const imageRegex = /\.(jpg|jpeg|png)$/i;
  // if (!imageRegex.test(image)) {
  //   return NextResponse.json(
  //     { error: "The image format must be valid." },
  //     { status: 400 }
  //   );
  // }
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

export { getAllProducts, addProduct };
