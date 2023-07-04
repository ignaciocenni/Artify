import { NextResponse } from "next/server";
import { allUsers, addUser } from "./controllers";

export async function GET() {
  try {
    const res = await allUsers();
    return NextResponse.json(res, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 404 });
  }
}

export async function POST(request) {
  const { name, email, password, rol } = await request.json();

  try {
    const newUser = await addUser(name, email, password, rol);
    return NextResponse.json(newUser, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 404 });
  }
}
