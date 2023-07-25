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
  try {
    const preference = {
      items:products,
      auto_return: "approved",
      back_urls: {
        success: `${process.env.BASE_URL}/purchase-status`,
        failure: `${process.env.BASE_URL}/purchase-status`,
        pending: `${process.env.BASE_URL}`,
      },
    };

    const response = await mercadopago.preferences.create(preference)
    
    return NextResponse.json({ url: response.body.init_point }, { status: 200 });
  } catch (error) {
    return NextResponse.json("entra en catch", { status: 400 });
  }
}
