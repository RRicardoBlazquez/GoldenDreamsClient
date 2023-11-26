import Card from "@/components/home/Card";
import { productInterface } from "@/types/interface";

export default function listProduct() {
    const listDestacados: productInterface[] = [
        { id: '1', name: 'Vestidos', image: 'https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQ9ptbmE8EvCl3Kb8EgaX9tgYR4LBrOtT8krxB_8XwWaNSwS5kbZGKcNMAhhOgCg_xpKGoe7KtD7rP9NYu31dt5a_A6PwbRyOiQW4tftvvlYPVhD89h0PBav9M&usqp=CAc', price: '3500', size: ["L"] },
        { id: '2', name: 'Pantalones', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIgHqDDCuziodsPpGRAK0j373juj-NJuSy6xTr7RFeuA&s', price: '350', size: ["L"] },
        { id: '3', name: 'Faldas', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQo3B0kz1Mtc2ywF3sqib-wAQXy1S-DZ3zKlVFfIZXgWQ&s', price: '150', size: ["M"] },
        { id: '4', name: 'Blusas', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjcY_iTKEXZpoh1C3an_Q0sOoSg1MGZIpBwYJldHT4&s', price: '50', size: ["XL"] },
        { id: '5', name: 'Chaquetas', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFh6OUjNF9k5moLfRN6Oc2l-dvExfgS4FsVnS4RFdv&s', price: '500', size: ["P"] },
    ]


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