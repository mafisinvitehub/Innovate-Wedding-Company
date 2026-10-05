"use client";

import Image from "next/image";
import {
    FaGlobe,
    FaInstagram,
    FaYoutube,
    FaMapMarkerAlt,
    FaLinkedin,
    FaWhatsapp,
    FaPhoneAlt,
    FaEnvelope,
    FaUserPlus,
    FaExternalLinkAlt,
} from "react-icons/fa";



const links = [
    {
        title: "Website",
        description: "Visit our official website",
        href: "https://innovateweddingcompany.com/",
        icon: FaGlobe,
    },
    {
        title: "Call Us",
        description: "Get in touch with us",
        href: "tel:+91 93610 35209",
        icon: FaPhoneAlt,
    },
    {
        title: "Instagram",
        description: "Follow us on Instagram",
        href: "https://www.instagram.com/innovate.wedding.company.pvt?stkn=MTVlNWZ4aDRrYnB1Yg==",
        icon: FaInstagram,
    },
     {
        title: "WhatsApp",
        description: "Chat with our team",
        href: "https://wa.me/+919361035209",
        icon: FaWhatsapp,
    },
    
    {
        title: "Email",
        description: "Send us an email",
        href: "mailto:innovateweddingcompany@gmail.com",
        icon: FaEnvelope,
    },
    {
        title: "YouTube",
        description: "Watch our latest videos",
        href: "https://www.youtube.com/@InnovateWeddingCompany",
        icon: FaYoutube,
    },
    {
        title: "LinkedIn",
        description: "Connect with us on LinkedIn",
        href: "https://www.linkedin.com/company/innovate-wedding-company/",
        icon: FaLinkedin,
    },
    {
        title: "Location",
        description: "Find us on Google Maps",
        href: "https://maps.app.goo.gl/qN4JdVhL2UaJ9SCt7",
        icon: FaMapMarkerAlt,
    }
   
];

/* =========================================================
   CONNECT PAGE
   ========================================================= */

export default function ConnectPage() {
    /* =========================================================
       SAVE CONTACT
       ========================================================= */

    const saveContact = () => {
        const vCard = `BEGIN:VCARD
VERSION:3.0
FN:Innovate Wedding Company
ORG:Innovate Wedding Company
TEL:+919361035209
EMAIL:innovateweddingcompany@gmail.com
URL:https://innovateweddingcompany.com/
END:VCARD`;

        const blob = new Blob([vCard], {
            type: "text/vcard;charset=utf-8",
        });

        const url = URL.createObjectURL(blob);

        const link = document.createElement("a");
        link.href = url;
        link.download = "Innovate-Wedding-Company.vcf";

        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);

        URL.revokeObjectURL(url);
    };

    return (
        <main className="min-h-screen bg-background text-foreground overflow-x-hidden">

            {/* =====================================================
                BACKGROUND EFFECT
            ===================================================== */}

            <div className="fixed inset-0 pointer-events-none overflow-hidden">

                <div
                    className="
                        absolute
                        top-0
                        left-1/2
                        -translate-x-1/2
                        w-[600px]
                        h-[300px]
                        bg-primary/5
                        blur-3xl
                        rounded-full
                    "
                />

                <div
                    className="
                        absolute
                        bottom-0
                        right-0
                        w-[300px]
                        h-[250px]
                        bg-primary/5
                        blur-3xl
                        rounded-full
                    "
                />

            </div>


            {/* =====================================================
                MAIN CONTENT
            ===================================================== */}

            <div
                className="
                    relative
                    w-full
                    max-w-xl
                    mx-auto
                    px-5
                    sm:px-6
                    pt-4
                    sm:pt-6
                    pb-8
                    sm:pb-10
                "
            >

                {/* =================================================
                    TITLE
                ================================================= */}

                <section className="text-center">

                    <h1
                        className="
                            mt-1
                            text-3xl
                            sm:text-4xl
                            md:text-5xl
                            font-serif
                            font-normal
                            tracking-wide
                            text-primary
                        "
                    >
                        Let&apos;s Connect
                    </h1>


                    {/* DESCRIPTION */}

                    <p
                        className="
                            mt-2
                            text-sm
                            sm:text-base
                            leading-6
                            text-foreground/60
                            max-w-md
                            mx-auto
                        "
                    >
                        Explore our website, social media, location
                        and contact details.
                    </p>


                    {/* DIVIDER */}

                    <div
                        className="
                            flex
                            items-center
                            justify-center
                            gap-3
                            mt-4
                        "
                    >

                        <span className="w-10 sm:w-14 h-px bg-primary/30" />

                        <span
                            className="
                                w-2
                                h-2
                                rounded-full
                                bg-primary
                            "
                        />

                        <span className="w-10 sm:w-14 h-px bg-primary/30" />

                    </div>

                </section>


                {/* =================================================
                    LINKS
                ================================================= */}

                <section className="mt-6 sm:mt-7">

                    <div className="space-y-3">

                        {links.map((link) => {

                            const Icon = link.icon;

                            return (
                                <a
                                    key={link.title}
                                    href={link.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="
                                        group
                                        flex
                                        items-center
                                        gap-4
                                        w-full
                                        p-4
                                        sm:p-5
                                        rounded-2xl
                                        border
                                        border-primary/10
                                        bg-secondary/20
                                        backdrop-blur-sm
                                        transition-all
                                        duration-300
                                        hover:border-primary
                                        hover:bg-primary/5
                                    "
                                >

                                    {/* ICON */}

                                    <div
                                        className="
                                            shrink-0
                                            w-11
                                            h-11
                                            sm:w-12
                                            sm:h-12
                                            rounded-full
                                            border
                                            border-primary/15
                                            flex
                                            items-center
                                            justify-center
                                            text-primary
                                            transition
                                            duration-300
                                            group-hover:border-primary
                                            group-hover:bg-primary
                                            group-hover:text-background
                                        "
                                    >
                                        <Icon size={17} />
                                    </div>


                                    {/* TEXT */}

                                    <div className="min-w-0 flex-1 text-left">

                                        <h2
                                            className="
                                                text-sm
                                                sm:text-base
                                                font-medium
                                                text-foreground
                                            "
                                        >
                                            {link.title}
                                        </h2>

                                        <p
                                            className="
                                                mt-1
                                                text-xs
                                                sm:text-sm
                                                text-foreground/50
                                            "
                                        >
                                            {link.description}
                                        </p>

                                    </div>


                                    {/* EXTERNAL LINK ICON */}

                                    <FaExternalLinkAlt
                                        size={14}
                                        className="
                                            shrink-0
                                            text-primary/40
                                            transition-all
                                            duration-300
                                            group-hover:text-primary
                                            group-hover:translate-x-0.5
                                            group-hover:-translate-y-0.5
                                        "
                                    />

                                </a>
                            );

                        })}

                    </div>

                </section>


                {/* =================================================
                    SAVE CONTACT
                ================================================= */}

                <section className="mt-4">

                    <button
                        type="button"
                        onClick={saveContact}
                        className="
                            w-full
                            inline-flex
                            items-center
                            justify-center
                            gap-3
                            px-5
                            py-4
                            rounded-full
                            border
                            border-primary
                            text-primary
                            text-sm
                            font-medium
                            transition
                            duration-300
                            hover:bg-primary
                            hover:text-background
                        "
                    >

                        <FaUserPlus size={16} />

                        Save Contact

                    </button>

                </section>


                {/* =================================================
                    SMALL NOTE
                ================================================= */}

                <p
                    className="
                        text-center
                        mt-5
                        text-[10px]
                        sm:text-xs
                        uppercase
                        tracking-[3px]
                        text-foreground/30
                    "
                >
                    Scan • Connect • Stay in touch
                </p>

            </div>

        </main>
    );
}