'use client'
import Link from "next/link"
import { usePathname } from "next/navigation"

const links = [
    { name: 'Inicio', href: '/', icon: '' },
    { name: 'Productos', href: '/product', icon: '' },
    { name: 'Contactanos', href: '/contact', icon: '' },
    { name: 'Carrito', href: '/shopping', icon: '' },
]

export default function Navegation() {
    const pathname = usePathname();
    return (
        <header className="w-full h-20 bg-rose-400 fixed z-20">
            <nav className="flex justify-around items-center w-full h-full">
                {links.map((link) => {
                    return (
                        <Link
                            key={link.name}
                            href={link.href}
                            className={`${pathname === link.href ? 'text-white' : ''}`}
                        >
                            <p>{link.name}</p>
                        </Link>
                    )
                })}
            </nav>

        </header>
    )
}