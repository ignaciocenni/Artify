import mercadopago from "mercadopago";
import { NextResponse } from "next/server";

mercadopago.configure({
  access_token: process.env.NEXT_ACCESS_TOKEN,
});

export async function POST(req) {
  const requestData = await req.json();
  
  if (!requestData || typeof requestData !== "object") {
    return NextResponse.json("Invalid request data", { status: 400 });
  }
  
  const { name, price, stock } = requestData;
  
  if (typeof name !== "string" || typeof price !== "number" || typeof stock !== "number") {
    return NextResponse.json("Invalid request data", { status: 400 });
  }

  console.log(name, price, stock);    
  const URL = "http://localhost:3000/api/productosmp";
  try {
    const preference = {
      items: [
        {
          title: name,
          unit_price: Number(price),
          quantity: Number(stock),
        }
      ],
      auto_return: "approved",
      back_urls: {
        "success": `${URL}`,
        "failure": `${URL}`,
        "pending": `${URL}`
      },
      notification_url: `${URL}/api/notify`,
    };
    const response = await mercadopago.preferences.create(preference)
    return NextResponse.json({ url: response.body.init_point }, { status: 200 });
  } catch (error) {
    return NextResponse.json("entra en catch", { status: 400 });
  }
}