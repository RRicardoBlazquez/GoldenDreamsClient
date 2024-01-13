import { NextResponse } from "next/server";
import db from '@/libs/db';
import bcrypt from 'bcrypt';



export async function POST(request: Request) {
    const { name, email, password } = await request.json();

    const hashedPassword = await bcrypt.hash(password, 10)

    const newUser = await db.user.create({
        data: {
            name,
            email,
            password: hashedPassword
        }
    })

    const { password: __, ...user } = newUser;

    return NextResponse.json(user)
}