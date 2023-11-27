import Card from "@/components/home/Card";
import { listaProductos } from "@/types/constantes";
import { productInterface } from "@/types/interface";

export default function listProduct() {
    const listDestacados: productInterface[] = listaProductos;


    return (
        <section className="h-full w-full flex flex-col items-center">
            {/* <h1>Nombre de la categoria</h1>
            <h1>filtrados</h1>
            <h1>Todos los productos de esa categoria</h1> */}
            <ul className="flex flex-row flex-wrap h-full w-full justify-around">
                {listDestacados.map((product, index) => {
                    return (
                        <li key={index} >
                            <Card id={product.id} name={product.name} image={product.image} price={product.price} size={product.size} />
                        </li>
                    )
                })}
            </ul>
        </section>
    )
}