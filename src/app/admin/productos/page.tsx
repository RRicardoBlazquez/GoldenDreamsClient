
import CardEdit from "@/components/admin/CardEdit";
import { listaProductos } from "@/types/constantes"
import Link from "next/link";

export default function AdminProduct() {
    const listDestacados = listaProductos;
    //aca tengo que seleccionar una card y cambiar los valores y mandarlos al backend

    return (
        <article className="h-full w-full flex flex-col items-center">
            <h1 className="p-10">Productos</h1>
            <Link href='/admin/productos/nuevoProducto' className="w-auto flex">
                <button className="flex-none w-full h-12 uppercase font-medium tracking-wider border border-slate-200 text-slate-900" type="button">+ Agregar producto</button>
            </Link>

            <ul className="flex flex-row flex-wrap h-full w-full justify-around py-5">
                {listDestacados.map((product, index) => {
                    return (
                        <li key={index} >
                            <CardEdit id={product.id} name={product.name} image={product.image} price={product.price} size={product.size} />
                        </li>
                    )
                })}
            </ul>
        </article>
    )
}