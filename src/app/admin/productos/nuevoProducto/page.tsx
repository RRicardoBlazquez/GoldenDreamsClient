'use client'
import { SubmitHandler, useForm } from "react-hook-form";

type Inputs = {
    name: string,
    description: string,
    price: number,
    stock: number,
    category: string,
    sizes: string,
};

export default function NewProduct() {
    const { register, handleSubmit, watch, formState: {
        errors
    } } = useForm<Inputs>();

    const onSubmit: SubmitHandler<Inputs> = data => { console.log(data); }

    return (
        <article className="h-full w-full flex flex-col items-center">
            <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-2">
                <label htmlFor="name">Nombre</label>
                <input className={` w-full px-4 py-2 border-2 border-black rounded pt-2 top-6 text-black
        `}
                    {...(register("name", {
                        required: {
                            value: true,
                            message: "El nombre es requerido",
                        },
                        minLength: {
                            value: 3,
                            message: "Nombre debe tener al menos tres caracteres"
                        },
                        maxLength: {
                            value: 20,
                            message: "Nombre debe tener como maximo 20 caracteres"
                        }
                    }))} />
                {errors.name && <span className="text-red-500 font-light">{errors.name.message} </span>}

                <label htmlFor="description" >Descripcion</label>
                <textarea className={` w-full px-4 py-2 border-2 border-black rounded pt-2 top-6 text-black
        `}
                    {...(register("description", {
                        required: {
                            value: true,
                            message: "La descripcion es requerida"
                        }
                    }))}
                />
                {errors.description && <span className="text-red-500 font-light">{errors.description.message} </span>}
                <label htmlFor="price">Precio</label>
                <input className={` w-full px-4 py-2 border-2 border-black rounded pt-2 top-6 text-black
        `}
                    {...(register("price", {
                        required: {
                            value: true,
                            message: "El precio es requerido"
                        }
                    }))}
                />
                {errors.price && <span className="text-red-500 font-light">{errors.price.message} </span>}
                <label htmlFor="stock">Cantidad</label>
                <input
                    {...(register("stock", {
                        required: {
                            value: true,
                            message: "La cantidad es requerida"
                        }
                    }))}
                />
                <label htmlFor="category">Categoria</label>
                <select {...register("category")} >
                    <option value="pantalones">Pantalones</option>
                    <option value="remeras">Remeras</option>
                    <option value="vestidos">Vestidos</option>
                </select>

                <label htmlFor="sizes">Talle</label>
                <select {...register("sizes")} >
                    <option value="s">S</option>
                    <option value="m">M</option>
                    <option value="g">G</option>
                    <option value="l">L</option>
                    <option value="xl">XL</option>
                </select>


                <button>Agregar</button>
                <pre>
                    {JSON.stringify(watch(), null, 2)}
                </pre>
            </form>
        </article>
    )
}