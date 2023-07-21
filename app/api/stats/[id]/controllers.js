import prisma from "../../db/client";

const getSales = async (id) => {
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

const getTotalProducts = async () => {
  const products = await prisma.product.findMany();
  let active = 0;
  let inactive = 0;
  let pending = 0;

  products.map((product) => {
    if (product.status === "ACTIVE") active++;
    if (product.status === "INACTIVE") inactive++;
    if (product.status === "PENDING") pending++;
  });

  return { active, inactive, pending };
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

export { getSales, getTotalProducts, getProvinceSales, getTotalUsers };
