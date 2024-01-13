import { NextResponse } from "next/server";
import db from '@/libs/db';

export async function POST(request: Request) {
    const { name, image, description, price, stock, category } = await request.json();

    try {

        const newProduct = await db.product.create({
            data: {
                name, image, description, price, stock, category
            }
        })
        return NextResponse.json(newProduct)

    } catch (error) {
        return NextResponse.json({ message: "No se pudo crear el producto" })
    }
}

