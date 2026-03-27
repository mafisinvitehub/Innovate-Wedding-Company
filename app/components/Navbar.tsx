"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const links = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Our Work", href: "/our-work" },
    { name: "Contact", href: "/contact" },
];

export default function Navbar() {

    const pathname = usePathname();
    const [open, setOpen] = useState(false);
    const [hideLogo, setHideLogo] = useState(false);

    useEffect(() => {

        const handleScroll = () => {

            if (window.innerWidth >= 768) { // desktop only
                if (window.scrollY > 120) {
                    setHideLogo(true);
                } else {
                    setHideLogo(false);
                }
            }

        };

        window.addEventListener("scroll", handleScroll);

        return () => window.removeEventListener("scroll", handleScroll);

    }, []);

    return (

        <header className="sticky top-0 z-50 backdrop-blur-md bg-background">

            {/* LOGO + HAMBURGER */}

            <div className={`flex items-center md:justify-center justify-between px-6 py-4 transition-all duration-500 ${hideLogo ? "hidden md:hidden" : ""}`}>

                <Link href="/">
                    <Image
                        src="/temp-images/innovate-logo.png"
                        alt="Innovate Logo"
                        width={160}
                        height={60}
                    />
                </Link>

                {/* HAMBURGER */}

                <button
                    onClick={() => setOpen(!open)}
                    className="md:hidden relative w-8 h-8"
                >

                    <span className={`absolute h-[2px] w-8 bg-foreground transition-all duration-300 ${open ? "rotate-45 top-4" : "top-2"}`}></span>

                    <span className={`absolute h-[2px] w-8 bg-foreground transition-all duration-300 ${open ? "opacity-0" : "top-4"}`}></span>

                    <span className={`absolute h-[2px] w-8 bg-foreground transition-all duration-300 ${open ? "-rotate-45 top-4" : "top-6"}`}></span>

                </button>

            </div>


            {/* CENTER LINE */}

            <div className="hidden md:block border-t border-secondary mb-2"></div>


            {/* DESKTOP MENU */}

            <nav className="hidden md:flex justify-center">

                <ul className="flex gap-10 text-base">

                    {links.map((link) => {

                        const isActive =
                            pathname === link.href ||
                            (pathname.startsWith(link.href) && link.href !== "/");

                        return (

                            <li key={link.name} className="relative group md:mb-4">

                                <Link
                                    href={link.href}
                                    className={`px-2 pt-3 pb-2 transition-colors duration-300

${isActive
                                            ? "text-primary"
                                            : "text-foreground hover:text-primary"
                                        }

`}
                                >

                                    {link.name}

                                    {/* ACTIVE TOP LINE */}

                                    {isActive && (
                                        <span className="absolute -top-2 left-0 w-full h-[3px] bg-primary"></span>
                                    )}

                                    {/* HOVER TOP LINE */}

                                    <span className="absolute -top-2 left-0 w-0 h-[3px] bg-primary transition-all duration-300 group-hover:w-full"></span>

                                </Link>

                            </li>

                        )

                    })}

                </ul>

            </nav>


            {/* MOBILE MENU */}

            <div
                className={`md:hidden overflow-hidden transition-all duration-500 z-50 ps-8 ${open ? "max-h-[400px] py-6" : "max-h-0"}`}
            >

                <div className="flex flex-col items-left gap-6">

                    {links.map((link) => {

                        const isActive =
                            pathname === link.href ||
                            (pathname.startsWith(link.href) && link.href !== "/");

                        return (

                            <Link
                                key={link.name}
                                href={link.href}
                                onClick={() => setOpen(false)}
                                className={`text-lg w-20

${isActive
                                        ? "text-primary border-b border-r border-primary"
                                        : "text-foreground"
                                    }

`}
                            >

                                {link.name}

                            </Link>

                        )

                    })}

                </div>

            </div>

        </header>

    )

}