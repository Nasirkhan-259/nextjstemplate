import { NextRequest, NextResponse } from 'next/server';
import {PrismaClient} from '@prisma/client';

const prisma = new PrismaClient();

// export async function GET(request :  NextRequest){
//    const users =  await prisma.user.findMany();

//    return NextResponse.json(users)
// }

export async function POST(request : NextRequest){
    const body = await request.json()
    let checkuser = await prisma.user.findUnique({
        where : {email : body.email}
    })
    if(checkuser){
        return NextResponse.json({message : "User email already exists"},{status : 400})
    }
    const user = await prisma.user.create({
        data : {
            name : body.name,
            email : body.email
        }
    })
    return NextResponse.json({user},{status : 201})
}