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

        let ticking = false;
        let locked = false;
        let lockTimeout: ReturnType<typeof setTimeout> | null = null;

        const HIDE_AT = 140;
        const SHOW_AT = 80;

        const updateLogoState = () => {

            if (!locked && window.innerWidth >= 768) {

                const currentScrollY = window.scrollY;

                setHideLogo((prev) => {

                    if (!prev && currentScrollY > HIDE_AT) {
                        // logo hide aaguthu -> header height maarum,
                        // andha maatram vachu scrollY thana shift aagum,
                        // so andha transition (500ms) mudiyara varaikkum lock pannu
                        locked = true;
                        if (lockTimeout) clearTimeout(lockTimeout);
                        lockTimeout = setTimeout(() => { locked = false; }, 550);
                        return true;
                    }

                    if (prev && currentScrollY < SHOW_AT) {
                        locked = true;
                        if (lockTimeout) clearTimeout(lockTimeout);
                        lockTimeout = setTimeout(() => { locked = false; }, 550);
                        return false;
                    }

                    return prev;

                });

            }

            ticking = false;

        };

        const handleScroll = () => {

            if (!ticking) {
                window.requestAnimationFrame(updateLogoState);
                ticking = true;
            }

        };

        window.addEventListener("scroll", handleScroll, { passive: true });

        return () => {
            window.removeEventListener("scroll", handleScroll);
            if (lockTimeout) clearTimeout(lockTimeout);
        };

    }, []);

    return (

        <header className="sticky top-0 z-50 backdrop-blur-md bg-background transition-all duration-500">

            {/* LOGO + HAMBURGER */}

            <div
                style={{ overflowAnchor: "none" }}
                className={`flex items-center md:justify-center justify-between px-6 overflow-hidden transition-all duration-500
py-4 max-h-[120px] opacity-100 translate-y-0
${hideLogo
                        ? "md:max-h-0 md:opacity-0 md:-translate-y-5 md:py-0"
                        : "md:max-h-[120px] md:opacity-100 md:translate-y-0 md:py-4"
                    }`}
            >

                <Link href="/">
                    <Image
                        src="/innovate logo.png"
                        alt="Innovate Logo"
                        width={160}
                        height={60}
                        className="h-auto w-auto transition-all duration-500"
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