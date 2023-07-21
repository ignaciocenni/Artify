import { NextResponse } from "next/server";
import { getUserSales, getUserProducts, getUserProvinceSales, getTotalProducts, getProvinceSales, getTotalUsers } from "./controllers";

export async function GET(req, { params }) {
  const { id } = params;

  try {
    // ADMIN
    const totalUsers = await getTotalUsers(); //total de usuarios
    const provinceSales = await getProvinceSales(); //total de ventas por provincia
    const productStatus = await getTotalProducts(); //total de productos segun su estado

    // USER
    const totalSales = await getUserSales(id); //total de ventas de un usuario
    const productUserStatus = await getUserProducts(id); //total de productos segun su estado de un usuario
    const userProvinceSales = await getUserProvinceSales(id); //total de ventas por provincia de un usuario
    return NextResponse.json(
      {
        admin: { totalUsers: totalUsers, provinceSales: provinceSales, productStatus: productStatus },
        user: { totalSales: totalSales, productUserStatus: productUserStatus, userProvinceSales: userProvinceSales },
      },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json({ error: error.message });
  }
}
