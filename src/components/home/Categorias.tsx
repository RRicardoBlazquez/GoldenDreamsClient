
const listCategorias = [
    { id: '1', name: 'Vestidos', image: 'https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQ9ptbmE8EvCl3Kb8EgaX9tgYR4LBrOtT8krxB_8XwWaNSwS5kbZGKcNMAhhOgCg_xpKGoe7KtD7rP9NYu31dt5a_A6PwbRyOiQW4tftvvlYPVhD89h0PBav9M&usqp=CAc' },
    { id: '2', name: 'Pantalones', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIgHqDDCuziodsPpGRAK0j373juj-NJuSy6xTr7RFeuA&s' },
    { id: '3', name: 'Faldas', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQo3B0kz1Mtc2ywF3sqib-wAQXy1S-DZ3zKlVFfIZXgWQ&s' },
    { id: '4', name: 'Blusas', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjcY_iTKEXZpoh1C3an_Q0sOoSg1MGZIpBwYJldHT4&s' },
    { id: '5', name: 'Chaquetas', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFh6OUjNF9k5moLfRN6Oc2l-dvExfgS4FsVnS4RFdv&s' }
]

export default function Categorias() {
    return (
        <>

            {listCategorias.map((cat) => {
                return (
                    <div key={cat.id} className="h-80 w-72 flex flex-col-reverse items-center">
                        <img src={cat.image} alt={cat.name} className="h-80 w-72" />
                        <h1 className="absolute bg-slate-500 text-white">{cat.name} </h1>
                    </div>
                )
            })}

        </>
    )
}