import prisma from "../../db/client";

// ADMIN
const getTotalProducts = async () => {
  const products = await prisma.product.findMany();

  let productStatus = {
    ACTIVE: 0,
    INACTIVE: 0,
    PENDING: 0,
  };

  products.map((product) => {
    if (product.status === "ACTIVE") productStatus.ACTIVE++;
    if (product.status === "INACTIVE") productStatus.INACTIVE++;
    if (product.status === "PENDING") productStatus.PENDING++;
  });

  return productStatus;
};

const getProvinceSales = async () => {
  const sales = await prisma.sales.findMany();
  const provinces = await prisma.province.findMany();
  const products = await prisma.product.findMany();

  let provinceSales = {};

  provinces.map((province) => {
    provinceSales[province.name] = 0;
  });

  sales.map((sale) => {
    products.map(async (product) => {
      if (product.id === sale.productId) {
        let province = await prisma.province.findFirst({ where: { id: product.provinceId } });
        provinceSales[province.name]++;
      }
    });
  });
  return provinceSales;
};

const getTotalUsers = async () => {
  const users = await prisma.user.findMany();

  return users.length;
};

// USER
const getUserSales = async (id) => {
  const user = await prisma.user.findFirst({
    where: {
      id: id,
    },
    select: {
      sellerSales: true,
    },
  });

  const { sellerSales } = user;

  return sellerSales.length;
};

const getUserProducts = async (id) => {
  const products = await prisma.product.findMany({
    where: {
      userId: id,
    },
  });

  let productStatus = {
    ACTIVE: 0,
    INACTIVE: 0,
    PENDING: 0,
  };

  products.map((product) => {
    if (product.status === "ACTIVE") productStatus.ACTIVE++;
    if (product.status === "INACTIVE") productStatus.INACTIVE++;
    if (product.status === "PENDING") productStatus.PENDING++;
  });

  return productStatus;
};

const getUserProvinceSales = async (id) => {
  const userSales = await prisma.sales.findMany({
    where: {
      sellerId: id,
    },
  });

  const provinces = await prisma.province.findMany();
  let userProvinceSales = {};

  provinces.map((province) => {
    userProvinceSales[province.name] = 0;
  });

  userSales.map((sale) => {
    provinces.map(async (province) => {
      if (province.id === sale.provinceId) {
        userProvinceSales[province.name]++;
      }
    });
  });

  return userProvinceSales;
};

export { getUserSales, getUserProducts, getUserProvinceSales, getTotalProducts, getProvinceSales, getTotalUsers };
