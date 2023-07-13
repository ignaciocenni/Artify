import mercadopago from "mercadopago";
import { NextResponse } from "next/server";

mercadopago.configure({
  access_token: process.env.NEXT_ACCESS_TOKEN,
});

export async function POST(req) {
  const requestData = await req.json();
  const productos = requestData.map((ele)=>(
    {
    title: ele.name,
    unit_price: Number(ele.price),
    quantity: Number(ele.stock),
    }
  ))  
  const URL = "http://localhost:3000/detail";
  try {
    const preference = {
      items: productos,
      auto_return: "approved",
      back_urls: {
        "success": `${URL}`,
        "failure": `${URL}`,
        "pending": `${URL}`
      },
      notification_url: `${URL}/api/notify`,
    };
    const response = await mercadopago.preferences.create(preference)
    return NextResponse.json({ id: response.body.id }, { status: 200 });
  } catch (error) {
    return NextResponse.json("entra en catch", { status: 400 });
  }
}