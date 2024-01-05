import Link from 'next/link'
import React from 'react'

interface ButtonProps {
    children: string
    className?: string
    link?: string
    onClick?: () => void
}

const Button = ({ children, className, link, onClick }: ButtonProps) => {

    return (
        <Link onClick={onClick} href={link || "#"} className={`rounded relative inline-flex group items-center justify-center px-3.5 py-2 m-1 cursor-pointer border-b-4 border-l-2 active:border-purple-600 active:shadow-none shadow-lg bg-gradient-to-tr from-primary-800 to-primary-700 border-primary-900 text-white ${className} overflow-hidden`}>
            <span className="absolute w-0 h-0 transition-all duration-300 ease-out bg-white rounded-full group-hover:w-32 group-hover:h-32 opacity-10"></span>
            <span className="relative font-semibold">
                {children}
            </span>
        </Link>
    )
}

export default Button