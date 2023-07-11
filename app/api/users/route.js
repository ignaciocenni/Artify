import { NextResponse } from "next/server";
import { allUsers, addUser } from "./controllers";

export async function GET() {
  try {
    const response = await allUsers();
    return NextResponse.json(response, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 404 });
  }
}

export async function POST(request) {
  const { name, password, lastName, email, rol, provinceId, aboutMe } =
    await request.json();

  try {
    const newUser = await addUser(
      name,
      password,
      lastName,
      email,
      rol,
      provinceId,
      aboutMe
    );
    return NextResponse.json(newUser, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 404 });
  }
}
