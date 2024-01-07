'use client'
import { useForm } from 'react-hook-form';

export default function LoginPage() {
    const { register } = useForm();

    return (
        <div>
            <form action="">
                <h1>Iniciar sesion</h1>
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

            </form>
        </div>
    )
}