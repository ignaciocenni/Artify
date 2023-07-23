import prisma from "../db/client";

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
export { getProvinceSales, getTotalProducts, getTotalUsers };
