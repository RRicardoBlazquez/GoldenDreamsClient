'use client'
import { useForm } from "react-hook-form";

export default function RegisterPage() {
    const { register, handleSubmit } = useForm();

    const onSubmit = handleSubmit(data => {
        console.log(data);
    })

    return (
        <article>
            <form onSubmit={onSubmit} className="flex flex-col gap-4">
                <label htmlFor="name">Nombre</label>
                <input type="text"
                    {...(register("name", {
                        required: {
                            value: true,
                            message: "El nombre es requerido"
                        }
                    }))} />
                <label htmlFor="email">Email</label>
                <input type="email"
                    {...(register("email", {
                        required: {
                            value: true,
                            message: "El email es requerido"
                        }
                    }))}
                />
                <label htmlFor="password">Contraseña</label>
                <input type="password"
                    {...(register("password", {
                        required: {
                            value: true,
                            message: "La contraseña es requerida"
                        }
                    }))}
                />
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