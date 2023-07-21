import { NextResponse } from "next/server";
import { getTotalUsers, getProvinceSales, getTotalProducts } from "./controllers";
export async function GET(req) {
  try {
    // ADMIN
    const totalUsers = await getTotalUsers(); //total de usuarios
    const provinceSales = await getProvinceSales(); //total de ventas por provincia
    const productStatus = await getTotalProducts(); //total de productos segun su estado
    return NextResponse.json({ totalUsers: totalUsers, provinceSales: provinceSales, productStatus: productStatus }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: error.message });
  }
}
