import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

interface Props{
    params : { id : number}
}

export async function GET(request : NextRequest,{params} :  Props){
    const users =  await prisma.user.findUnique({
        where : { id : params.id}
    });
    return NextResponse.json(users)

}

