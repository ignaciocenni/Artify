import { NextResponse} from "next/server";
import {prisma} from '../users/route'

export async function GET(){
    const res = await prisma.Review.findMany()
    return NextResponse.json(res)
}

export async function POST(req){
    const { comment,rating,productId } = req.json();
    const newReview = await prisma.Review.create({
        data:{
            comment,
            rating,
            product:{
                connect:{id:productId}
            }
        }
    })
    return NextResponse.json(newReview)
}