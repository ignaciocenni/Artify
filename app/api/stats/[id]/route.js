import { NextResponse } from "next/server";
import { getSales, getTotalProducts, getProvinceSales, getTotalUsers } from "./controllers";

export async function GET(req, { params }) {
  const { id } = params;

  try {
    const totalUsers = await getTotalUsers(); //total de usuarios
    const provinceSales = await getProvinceSales(); //total de ventas por provincia
    const productStatus = await getTotalProducts(); //total de productos segun su estado(TODOS)
    const totalSales = await getSales(id); //total de ventas de un usuario
    return NextResponse.json(
      { admin: { totalUsers: totalUsers, provinceSales: provinceSales, productStatus: productStatus }, user: { totalSales: totalSales } },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json({ error: error.message });
  }
}
