import { listaCategorias } from "@/types/constantes"

const listCategorias = listaCategorias;

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