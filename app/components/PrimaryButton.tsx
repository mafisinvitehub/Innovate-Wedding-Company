"use client"

import Link from "next/link"

interface ButtonProps {
    label: string
    href?: string
    onClick?: () => void
    className?: string
    textClassName?: string
    bgClassName?: string
}

const PrimaryButton = ({ label, href, onClick, className = "", textClassName = "", bgClassName = "" }: ButtonProps) => {

    const buttonContent = (
        <button
            onClick={onClick}
            className={`group relative overflow-hidden border px-6 py-3 text-sm tracking-wide cursor-pointer ${className}`}
        >

            <span className={`relative z-10 flex items-center gap-2 transition-colors duration-300 ${textClassName}`}>
                {label}
                <span className="transition-transform duration-300 group-hover:translate-x-1">
                    →
                </span>
            </span>

            <span className={`absolute inset-0 scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100 ${bgClassName}`}></span>

        </button>
    )

    if (href) {
        return <Link href={href}>{buttonContent}</Link>
    }

    return buttonContent
}

export default PrimaryButton