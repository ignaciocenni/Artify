import { NextResponse } from "next/server";
import { data } from "../response";
export async   function GET(){
    return NextResponse.json(data)
}