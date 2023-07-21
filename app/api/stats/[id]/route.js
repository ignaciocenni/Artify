import { NextResponse } from "next/server";
import { getUserSales, getUserProducts, getUserProvinceSales } from "./controllers";

export async function GET(req, { params }) {
  const { id } = params;

  try {
    // USER
    const totalSales = await getUserSales(id); //total de ventas de un usuario
    const productUserStatus = await getUserProducts(id); //total de productos segun su estado de un usuario
    const userProvinceSales = await getUserProvinceSales(id); //total de ventas por provincia de un usuario
    return NextResponse.json(
      {
        totalSales: totalSales,
        productUserStatus: productUserStatus,
        userProvinceSales: userProvinceSales,
      },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json({ error: error.message });
  }
}
