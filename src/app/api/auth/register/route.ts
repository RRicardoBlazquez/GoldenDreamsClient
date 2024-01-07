import { NextResponse } from "next/server";
import db from '@/libs/db'
import bcrypt from 'bcrypt';



export async function POST(request) {
    const data = await request.json();
    console.log(data);

    const hashedPassword = await bcrypt.hash(data.password, 10)

    const newUser = await db.user.create({
        data: {
            name: data.name,
            email: data.email,
            password: hashedPassword
        }
    })

    const { password: __, ...user } = newUser;

    return NextResponse.json(user)

}