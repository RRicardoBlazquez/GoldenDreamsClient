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
        <nav className="flex justify-around items-center h-20 bg-rose-400">
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
            <Link
                key={'link.name'}
                href={'/contact'}
                className='text-white'
            >
                <svg className="w-4 h-4 me-2 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M7.824 5.937a1 1 0 0 0 .726-.312 2.042 2.042 0 0 1 2.835-.065 1 1 0 0 0 1.388-1.441 3.994 3.994 0 0 0-5.674.13 1 1 0 0 0 .725 1.688Z" />
                    <path d="M17 7A7 7 0 1 0 3 7a3 3 0 0 0-3 3v2a3 3 0 0 0 3 3h1a1 1 0 0 0 1-1V7a5 5 0 1 1 10 0v7.083A2.92 2.92 0 0 1 12.083 17H12a2 2 0 0 0-2-2H9a2 2 0 0 0-2 2v1a2 2 0 0 0 2 2h1a1.993 1.993 0 0 0 1.722-1h.361a4.92 4.92 0 0 0 4.824-4H17a3 3 0 0 0 3-3v-2a3 3 0 0 0-3-3Z" />
                </svg>
            </Link>
        </nav>
    )
}