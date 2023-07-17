import mercadopago from "mercadopago";
import { NextResponse } from "next/server";

export async function POST(req) {
  mercadopago.configure({
    access_token: process.env.NEXT_ACCESS_TOKEN,
  });
  const requestData = await req.json();
 
   const products = requestData.map((ele) => ({
      description: ele.description,
     id: ele.id,
     title: ele.name,
     unit_price: Number(ele.price),
     quantity: Number(ele.stock),
     }))  
  const URL = "http://localhost:3000/";
  try {
    const preference = {
      items:products,
      auto_return: "approved",
      back_urls: {
        success: `${URL}/purchase-status`,
        failure: `${URL}/profile`,
        pending: `${URL}`,
      },
    };

    const response = await mercadopago.preferences.create(preference)
    return NextResponse.json({ id: response.body.id }, { status: 200 });
  } catch (error) {
    return NextResponse.json("entra en catch", { status: 400 });
  }
}
