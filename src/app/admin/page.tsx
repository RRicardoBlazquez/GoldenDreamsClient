import Link from "next/link"

export default function adminDashboard() {
    return (
        <article className="h-full w-full flex justify-around">
            <Link href={'/admin/productos'}>
                <h1>Productos</h1>
            </Link>
            <Link href={'/admin/pedidos'}>
                <h1>Pedidos</h1>
            </Link>
            <Link href={'/admin/ventas'}>
                <h1>Ventas</h1>
            </Link>

        </article>
    )
}