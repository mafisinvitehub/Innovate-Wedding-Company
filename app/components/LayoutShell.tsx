"use client";

import { usePathname } from "next/navigation";
import Navbar from "./Navbar";
import Footer from "./Footer";

export default function LayoutShell({
    children,
}: {
    children: React.ReactNode;
}) {
    const pathname = usePathname();

    const isConnectPage = pathname === "/connect";

    return (
        <>
            {!isConnectPage && <Navbar />}

            {children}

            {!isConnectPage && <Footer />}
        </>
    );
}