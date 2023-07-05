import { NextResponse } from "next/server";
import { allUsers, addUser, updateUser, deleteUser } from "./controllers";

export async function GET() {
  try {
    const response = await allUsers();
    return NextResponse.json(response, { status: 200 });
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

export async function PUT(request) {
  const { id, name, email, password } = await request.json();

  try {
    const user = await updateUser(id, name, email, password);
    return NextResponse.json(user, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 404 });
  }
}

export async function DELETE(request) {
  const { id } = await request.json();

  try {
    await deleteUser(id);
    return NextResponse.json({ message: "User deleted" }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 404 });
  }
}
