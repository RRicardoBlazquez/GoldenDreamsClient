'use client'
import { useForm } from "react-hook-form";

export default function RegisterPage() {
    const { register, handleSubmit, watch } = useForm();

    const onSubmit = handleSubmit(data => {
        console.log(data);
    })

    return (
        <article>
            <form onSubmit={onSubmit} className="flex flex-col gap-4 py-24">

                <input className={`relative w-full px-4 py-2 border-b-2 border-b-black rounded pt-2 top-6 text-black
                `} type="text"
                    {...(register("name", {
                        required: {
                            value: true,
                            message: "El nombre es requerido"
                        }
                    }))} />
                <label className={`absolute transition-all duration-200 ease-in-out ${watch("name")
                    ? "top-1 left-5 text-xs text-black"
                    : "top-[44px] left-7 -translate-y-1/2 text-black"
                    } `} htmlFor="name">Nombre</label>

                <input className={`relative w-full px-4 py-2 border-b-2 border-b-black rounded pt-2 top-6 text-black
        `} type="email"
                    {...(register("email", {
                        required: {
                            value: true,
                            message: "El email es requerido"
                        }
                    }))}
                />
                <label className={`absolute transition-all duration-200 ease-in-out ${watch("email")
                    ? "top-1 left-5 text-xs text-black"
                    : "top-[44px] left-7 -translate-y-1/2 text-gray-400"
                    } `} htmlFor="email">Email</label>
                <input type="password"
                    {...(register("password", {
                        required: {
                            value: true,
                            message: "La contraseña es requerida"
                        }
                    }))}
                />
                <label htmlFor="password">Contraseña</label>
                <label htmlFor="confirmPassword">Confirmar Contraseña</label>
                <input type="password"
                    {...(register("confirmPassword", {
                        required: {
                            value: true,
                            message: "La confirmacion es requerida"
                        }
                    }))}
                />

                <button>Registrarse</button>
            </form>
        </article>
    )
}