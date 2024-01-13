import { NextResponse } from "next/server";
import db from '@/libs/db';

interface Params {
    params: { id: number };
}

export async function DELETE(request: Request, { params }: Params) {
    const { id } = params;

    try {
        const deleteProduct = await db.product.delete({
            where: {
                id: id,
            }
        })
        return deleteProduct ? NextResponse.json({ message: "El producto fue borrado con exito", deleteProduct }) : NextResponse.json({ message: "El producto no se pudo borrar" })
    } catch (error) {
        if (error instanceof Error) {
            return NextResponse.json({ message: error.message }, { status: 500, })
        }
    }
}

export async function PUT(request: Request, { params }: Params) {
    try {
        const { id } = params;
        const { name, image, description, price, stock, category } = await request.json();
        const updateProduct = await db.product.update({
            where: {
                id: id,
            },
            data: {
                name,
                image,
                description,
                price,
                stock,
                category,
            }
        })
        return NextResponse.json({ message: "Modificación exitosa", updateProduct })

    } catch (error) {
        if (error instanceof Error) {
            return NextResponse.json(
                {
                    message: error.message,
                },
                { status: 500 }
            )
        }
    }
}