import { NextResponse } from "next/server";
import { postAllProvinces, postAllUsers, postAllProducts, postAllCategory } from "./controllers";

export async function POST() {
  try {
    // const provinces = await postAllProvinces();
    // const users = await postAllUsers();
    const products = await postAllProducts();
    // const reviews = await postAllCategory();
    return NextResponse.json({ message: "DataBase Full" }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 404 });
  }
}
