import { NextResponse } from "next/server";
import { getUser,updateUser,deleteUser } from "./controllers";

export async function GET(request, { params }) {
  const { id } = params;

  try {
    const response = await getUser(id);
    return NextResponse.json(response, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 404 });
  }
}



export async function PUT(request,{params}) {
    const {id} = params;
    const { name, email, password } = await request.json();
  
    try {
      const user = await updateUser(id, name, email, password);
      return NextResponse.json(user, { status: 200 });
    } catch (error) {
      return NextResponse.json({ error: error.message }, { status: 404 });
    }
  }
  
  export async function DELETE(request,{params}) {
    const { id } = params
  
    try {
      await deleteUser(id);
      return NextResponse.json({ message: "User deleted" }, { status: 200 });
    } catch (error) {
      return NextResponse.json({ error: error.message }, { status: 404 });
    }
  }
  