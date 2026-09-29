"use client";

import Image from "next/image";
import { useState } from "react";
import {
    FaEnvelope,
    FaPhone,
    FaMapMarkerAlt,
    FaBirthdayCake,
    FaTint,
    FaInstagram,
    FaLinkedinIn,
    FaWhatsapp,
    FaGlobe,
    FaPhoneAlt,
} from "react-icons/fa";

/* =========================================================
   CINEMATIC ANIMATION
========================================================= */

const cinematicStyles = `
    /* =========================================
       CINEMATIC PROFILE
       ========================================= */

    .cinematic-profile {
        animation: profileFadeIn 0.35s ease-out both;
    }

    @keyframes profileFadeIn {
        from {
            opacity: 0;
        }

        to {
            opacity: 1;
        }
    }


    /* =========================================
       BACKGROUND
       ========================================= */

    .cinematic-background {
        animation:
            backgroundReveal
            0.85s
            cubic-bezier(0.16, 1, 0.3, 1)
            0s
            both;

        transform-origin: center center;
        will-change: transform, opacity, filter;
    }

    @keyframes backgroundReveal {
        0% {
            opacity: 0;
            transform:
                translateX(-90px)
                scale(1.18)
                rotate(-2deg);

            filter:
                blur(14px)
                brightness(0.35);
        }

        45% {
            opacity: 0.8;
            transform:
                translateX(-25px)
                scale(1.06)
                rotate(-0.5deg);

            filter:
                blur(5px)
                brightness(0.65);
        }

        75% {
            opacity: 1;
            transform:
                translateX(8px)
                scale(1.015)
                rotate(0.15deg);

            filter:
                blur(1px)
                brightness(0.9);
        }

        100% {
            opacity: 1;
            transform:
                translateX(0)
                scale(1)
                rotate(0);

            filter:
                blur(0)
                brightness(1);
        }
    }


    /* =========================================
       BACKGROUND LIGHT SWEEP
       ========================================= */

    .cinematic-background-wrapper::after {
        content: "";
        position: absolute;
        top: -30%;
        left: -60%;
        width: 45%;
        height: 160%;
        pointer-events: none;

        background: linear-gradient(
            90deg,
            transparent,
            rgba(255,255,255,0.35),
            transparent
        );

        transform: skewX(-18deg);

        animation:
            backgroundSweep
            1s
            ease-out
            0.15s
            both;
    }

    @keyframes backgroundSweep {
        0% {
            opacity: 0;
            transform:
                translateX(0)
                skewX(-18deg);
        }

        20% {
            opacity: 1;
        }

        100% {
            opacity: 0;
            transform:
                translateX(420%)
                skewX(-18deg);
        }
    }


    /* =========================================
       PERSON
       ========================================= */

    .cinematic-photo {
        animation:
            personReveal
            2s
            cubic-bezier(0.16, 1, 0.3, 1)
            1.1s
            both;

        transform-origin: center bottom;
        will-change: transform, opacity, filter;
    }

    @keyframes personReveal {
        0% {
            opacity: 0;

            transform:
                translateY(90px)
                translateX(45px)
                scale(0.78)
                rotate(3deg);

            filter:
                blur(10px)
                brightness(0.5);
        }

        45% {
            opacity: 1;

            transform:
                translateY(-12px)
                translateX(-8px)
                scale(1.04)
                rotate(-0.8deg);

            filter:
                blur(2px)
                brightness(0.9);
        }

        70% {
            transform:
                translateY(5px)
                translateX(2px)
                scale(0.99)
                rotate(0.2deg);

            filter:
                blur(0)
                brightness(1.03);
        }

        100% {
            opacity: 1;

            transform:
                translateY(8px)
                translateX(0)
                scale(1)
                rotate(0);

            filter:
                blur(0)
                brightness(1);
        }
    }


    /* =========================================
       PERSON LIGHT SWEEP
       ========================================= */

    .cinematic-photo-wrapper::after {
        content: "";
        position: absolute;
        top: -30%;
        left: -80%;
        width: 45%;
        height: 160%;
        pointer-events: none;

        background: linear-gradient(
            90deg,
            transparent,
            rgba(255,255,255,0.3),
            transparent
        );

        transform: skewX(-15deg);

        animation:
            personSweep
            0.8s
            ease-out
            1.25s
            both;
    }

    @keyframes personSweep {
        0% {
            opacity: 0;
            transform:
                translateX(0)
                skewX(-15deg);
        }

        25% {
            opacity: 0.8;
        }

        100% {
            opacity: 0;
            transform:
                translateX(420%)
                skewX(-15deg);
        }
    }


    /* =========================================
       NAME
       ========================================= */

    .cinematic-name {
    opacity: 0;

    animation:
        cinematicName
        0.65s
        cubic-bezier(0.16, 1, 0.3, 1)
        0.5s
        both;

    transform-origin: center;
    will-change: transform, opacity, filter;
}

    @keyframes cinematicName {
    0% {
        opacity: 0;
        transform: translateY(45px) scale(0.88);
        filter: blur(12px);
        letter-spacing: 0.25em;
        text-shadow: 0 0 0 rgba(255,255,255,0);
    }

    45% {
        opacity: 1;
        transform: translateY(-6px) scale(1.04);
        filter: blur(0);
        letter-spacing: 0.07em;
        text-shadow:
            0 0 20px rgba(255,255,255,0.25),
            0 0 40px rgba(255,255,255,0.12);
    }

    70% {
        transform: translateY(2px) scale(0.99);
        letter-spacing: 0.035em;
    }

    100% {
        opacity: 1;
        transform: translateY(0) scale(1);
        filter: blur(0);
        letter-spacing: 0.025em;
        text-shadow: 0 0 0 rgba(255,255,255,0);
    }
}


    /* =========================================
       NAME GLOW
       ========================================= */

  


    /* =========================================
       ROLE
       ========================================= */

    .cinematic-role {
        animation:
            cinematicRole
            0.55s
            cubic-bezier(0.16, 1, 0.3, 1)
            1s
            both;

        will-change: transform, opacity, filter;
    }

    @keyframes cinematicRole {
        0% {
            opacity: 0;

            transform:
                translateY(18px)
                scale(0.96);

            filter: blur(6px);
            letter-spacing: 0.15em;
        }

        60% {
            opacity: 1;

            transform:
                translateY(-2px)
                scale(1.01);

            filter: blur(0);
        }

        100% {
            opacity: 1;

            transform:
                translateY(0)
                scale(1);

            filter: blur(0);
            letter-spacing: normal;
        }
    }


    /* =========================================
       DIVIDER
       ========================================= */

    .cinematic-divider {
        animation:
            dividerReveal
            0.5s
            ease-out
            1.2s
            both;
    }

    @keyframes dividerReveal {
        0% {
            opacity: 0;
            transform: scaleX(0);
        }

        100% {
            opacity: 1;
            transform: scaleX(1);
        }
    }


    .cinematic-divider-dot {
        animation:
            dotReveal
            0.45s
            cubic-bezier(0.16, 1, 0.3, 1)
            5.25s
            both;
    }

    @keyframes dotReveal {
        0% {
            opacity: 0;
            transform: scale(0);
        }

        70% {
            opacity: 1;
            transform: scale(1.3);
        }

        100% {
            opacity: 1;
            transform: scale(1);
        }
    }


    /* =========================================
       MOBILE
       ========================================= */
@media (max-width: 640px) {

    .cinematic-background {
        animation-duration: 0.75s;
    }

    .cinematic-photo {
        animation-duration: 1.1s;
        animation-delay: 1.1s;
    }

    .cinematic-name {
        animation-delay: 2.25s;
    }

    .cinematic-name-glow {
        animation-delay: 2.25s;
    }

    .cinematic-role {
        animation-delay: 2.8s;
    }

    .cinematic-divider {
        animation-delay: 3.3s;
    }

    .cinematic-divider-dot {
        animation-delay: 3.45s;
    }
}


    /* =========================================
       REDUCED MOTION
       ========================================= */

    @media (prefers-reduced-motion: reduce) {

        .cinematic-profile,
        .cinematic-background,
        .cinematic-photo,
        .cinematic-name,
        .cinematic-name-glow,
        .cinematic-role,
        .cinematic-divider,
        .cinematic-divider-dot,
        .cinematic-background-wrapper::after,
        .cinematic-photo-wrapper::after {
            animation: none !important;
            opacity: 1 !important;
            transform: none !important;
            filter: none !important;
        }
    }
`;

/* =========================================================
   TYPES
========================================================= */

interface SanityAsset {
    url?: string;
}

interface EmployeePhoto {
    asset?: SanityAsset;
}

interface GalleryImage {
    _type: "image";
    asset?: SanityAsset;
}

interface GalleryVideo {
    _type: "video";
    url?: string;
}

type GalleryItem = GalleryImage | GalleryVideo;

interface SocialLink {
    title?: string;
    url?: string;
}

interface EmployeeData {
    name: string;

    slug?: {
        current?: string;
    };

    photo?: EmployeePhoto;

    role?: string;

    phone?: string;

    email?: string;

    phoneVisibility?: "show" | "mask" | "hide";

    phoneAction?: "call" | "whatsapp";

    address?: string;

    blood?: string;

    dob?: string;

    bio?: string;

    skills?: string[];

    isActive?: boolean;

    socialLinks?: SocialLink[];

    gallery?: GalleryItem[];
}

interface EmployeePageProps {
    data: EmployeeData | null;
}

/* =========================================================
   COMPONENT
========================================================= */

const EmployeePage = ({ data }: EmployeePageProps) => {
    const [activeImage, setActiveImage] = useState<string | null>(null);

    /*
     * NEW:
     * Person only appears after the background animation
     * actually finishes.
     */
    const [showPerson, setShowPerson] = useState(false);

    /*
     * NEW:
     * Name/role/divider only start after the person
     * animation has finished.
     */
    const [showText, setShowText] = useState(false);

    /* =========================================================
       PROFILE NOT FOUND
    ========================================================= */

    if (!data) {
        return (
            <main className="min-h-screen bg-background flex items-center justify-center px-6">
                <div className="text-center">

                    <p className="text-xs uppercase tracking-[4px] text-primary mb-4">
                        Innovate Wedding Company
                    </p>

                    <h1 className="text-3xl font-semibold">
                        Profile Not Found
                    </h1>

                    <p className="mt-3 text-foreground/60">
                        The requested employee profile could not be found.
                    </p>

                </div>
            </main>
        );
    }

    /* =========================================================
       GALLERY
    ========================================================= */

    const images: GalleryImage[] =
        data.gallery?.filter(
            (item): item is GalleryImage =>
                item._type === "image" &&
                Boolean(item.asset?.url)
        ) || [];

    const videos: GalleryVideo[] =
        data.gallery?.filter(
            (item): item is GalleryVideo =>
                item._type === "video" &&
                Boolean(item.url)
        ) || [];

    /* =========================================================
       PHONE
    ========================================================= */

    const getPhoneNumber = (): string => {
        if (!data.phone) {
            return "";
        }

        const digits = data.phone.replace(/\D/g, "");

        if (digits.startsWith("91") && digits.length === 12) {
            return digits;
        }

        return `91${digits}`;
    };

    const getPhoneHref = (): string => {
        const number = getPhoneNumber();

        if (!number) {
            return "#";
        }

        if (data.phoneAction === "whatsapp") {
            return `https://wa.me/${number}`;
        }

        return `tel:+${number}`;
    };

    const getMaskedPhone = (): string => {
        if (!data.phone) {
            return "";
        }

        const digits = data.phone.replace(/\D/g, "");

        if (digits.length < 4) {
            return "****";
        }

       return `${digits.slice(0, 2)}******${digits.slice(-4)}`;
    };

    /* =========================================================
       DATE
    ========================================================= */

    const formatDate = (date?: string): string => {
        if (!date) {
            return "";
        }

        try {
            return new Date(date).toLocaleDateString("en-IN", {
                day: "2-digit",
                month: "long",
                year: "numeric",
            });
        } catch {
            return date;
        }
    };

    /* =========================================================
       YOUTUBE
    ========================================================= */

    const getYouTubeEmbedUrl = (url: string): string => {
        try {
            const parsedUrl = new URL(url);

            if (parsedUrl.hostname.includes("youtu.be")) {
                return `https://www.youtube.com/embed/${parsedUrl.pathname.slice(
                    1
                )}`;
            }

            if (parsedUrl.hostname.includes("youtube.com")) {
                const videoId = parsedUrl.searchParams.get("v");

                if (videoId) {
                    return `https://www.youtube.com/embed/${videoId}`;
                }
            }

            return url;
        } catch {
            return url;
        }
    };

    /* =========================================================
       SOCIAL ICON
    ========================================================= */

    const getSocialIcon = (title?: string) => {
        const value = title?.toLowerCase() || "";

        if (value.includes("instagram")) {
            return <FaInstagram />;
        }

        if (value.includes("linkedin")) {
            return <FaLinkedinIn />;
        }

        if (value.includes("whatsapp")) {
            return <FaWhatsapp />;
        }

        return <FaGlobe />;
    };

    /* =========================================================
       MAIN
    ========================================================= */

    return (
        <main className="min-h-screen bg-background text-foreground overflow-x-hidden">

            <style>{cinematicStyles}</style>

            {/* =====================================================
                BACKGROUND
            ===================================================== */}

            <div className="fixed inset-0 pointer-events-none overflow-hidden">

                <div
                    className="
                        absolute
                        top-0
                        left-1/2
                        -translate-x-1/2
                        w-[700px]
                        h-[400px]
                        bg-primary/5
                        blur-3xl
                        rounded-full
                    "
                />

            </div>

            <div className="relative max-w-5xl mx-auto px-5 sm:px-6 py-14 md:py-20">

                {/* =================================================
                    COMPANY
                ================================================= */}

                <div className="text-center mb-12">

                    <p className="text-[10px] sm:text-xs uppercase tracking-[5px] text-primary">
                        Innovate Wedding Company
                    </p>

                </div>

                {/* =================================================
                    PROFILE HEADER
                ================================================= */}

              <section className="text-center cinematic-profile">

    <div className="flex justify-center">

        <div
            className="
                relative
                w-[280px]
                h-[480px]
                sm:w-[330px]
                sm:h-[500px]
                md:w-[360px]
                md:h-[530px]
            "
        >

            {/* =========================================
                STAGE 1 - BACKGROUND
                ========================================= */}

            <div
                className="
                    absolute
                    inset-0
                    overflow-hidden
                    rounded-[28px]
                    cinematic-background-wrapper
                    cinematic-background
                    shadow-2xl
                "
            >
                <Image
                    src="/bg.png"
                    alt=""
                    fill
                    priority
                    sizes="
                        (max-width: 640px) 280px,
                        (max-width: 768px) 330px,
                        360px
                    "
                    className="object-cover"
                />

                <div className="absolute inset-0 bg-black/15" />
            </div>


            {/* =========================================
                STAGE 2 - EMPLOYEE
                ========================================= */}

            {data.photo?.asset?.url ? (
                <div
                    className="
                        absolute
                        inset-0
                        flex
                        items-end
                        justify-center
                        z-10
                        pb-0
                    "
                >
<div
    className="
        relative
        w-[250px]
        h-[400px]
        sm:w-[295px]
        sm:h-[455px]
        md:w-[325px]
        md:h-[510px]
        cinematic-photo-wrapper
        cinematic-photo
    "
>
                        <Image
                            src={data.photo.asset.url}
                            alt={data.name}
                            fill
                            priority
                            sizes="
                                (max-width: 640px) 245px,
                                (max-width: 768px) 275px,
                                300px
                            "
                            className="
                                object-contain
                                drop-shadow-[0_25px_35px_rgba(0,0,0,0.32)]
                            "
                        />
                    </div>
                </div>
            ) : (
                <div
                    className="
                        absolute
                        inset-0
                        flex
                        items-center
                        justify-center
                        z-10
                    "
                >
                    <div
                        className="
                            relative
                            w-[210px]
                            h-[285px]
                            sm:w-[240px]
                            sm:h-[325px]
                            md:w-[260px]
                            md:h-[350px]
                            rounded-[18px]
                            border
                            border-white/20
                            bg-black/20
                            backdrop-blur-sm
                            flex
                            items-center
                            justify-center
                            cinematic-photo
                        "
                    >
                        <span className="text-xs text-white/50">
                            No Photo
                        </span>
                    </div>
                </div>
            )}

        </div>
    </div>


    {/* =========================================
        NAME
        ========================================= */}

    <div className="mt-10">

        <h1
            className="
                text-4xl
                sm:text-5xl
                md:text-6xl
                font-serif
                font-normal
                tracking-wide
                text-primary
                cinematic-name
            "
        >
            {data.name}
        </h1>


        {/* =========================================
            ROLE
            ========================================= */}

        {data.role && (
            <p
                className="
                    mt-3
                    text-sm
                    sm:text-base
                    text-primary
                    font-medium
                    cinematic-role
                "
            >
                {data.role}
            </p>
        )}

    </div>


    {/* =========================================
        DIVIDER
        ========================================= */}

    <div
        className="
            flex
            items-center
            justify-center
            gap-3
            mt-5
            cinematic-divider
        "
    >
        <span className="w-16 h-px bg-primary/40" />

        <span
            className="
                w-2
                h-2
                rounded-full
                bg-primary
                cinematic-divider-dot
            "
        />

        <span className="w-16 h-px bg-primary/40" />
    </div>

</section>


                {/* =================================================
                    ABOUT
                ================================================= */}

                {data.bio && (

                    <section className="max-w-3xl mx-auto mt-16 text-center">

                        <p className="text-[10px] uppercase tracking-[4px] text-primary mb-4">
                            About
                        </p>

                        <h2 className="text-2xl sm:text-3xl font-semibold mb-6">
                            A Little About Me
                        </h2>

                        <p className="text-sm sm:text-base leading-8 text-foreground/65">
                            {data.bio}
                        </p>

                    </section>

                )}


                {/* =================================================
                    PERSONAL DETAILS
                ================================================= */}

                {(data.address || data.dob || data.blood) && (

                    <section className="mt-16">

                        <div className="text-center mb-8">

                            <p className="text-[10px] uppercase tracking-[4px] text-primary mb-3">
                                Details
                            </p>

                            <h2 className="text-2xl sm:text-3xl font-semibold">
                                Personal Details
                            </h2>

                        </div>

                        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">

                            {data.address && (

                                <div className="text-center p-6 rounded-2xl bg-secondary/20 border border-primary/10">

                                    <div className="flex justify-center mb-4">

                                        <div className="w-10 h-10 rounded-full border border-primary/15 flex items-center justify-center text-primary">

                                            <FaMapMarkerAlt size={13} />

                                        </div>

                                    </div>

                                    <p className="text-[10px] uppercase tracking-[2px] text-foreground/40 mb-2">
                                        Address
                                    </p>

                                    <p className="text-sm text-foreground/70 leading-6">
                                        {data.address}
                                    </p>

                                </div>

                            )}

                            {data.dob && (

                                <div className="text-center p-6 rounded-2xl bg-secondary/20 border border-primary/10">

                                    <div className="flex justify-center mb-4">

                                        <div className="w-10 h-10 rounded-full border border-primary/15 flex items-center justify-center text-primary">

                                            <FaBirthdayCake size={13} />

                                        </div>

                                    </div>

                                    <p className="text-[10px] uppercase tracking-[2px] text-foreground/40 mb-2">
                                        Date of Birth
                                    </p>

                                    <p className="text-sm text-foreground/70">
                                        {formatDate(data.dob)}
                                    </p>

                                </div>

                            )}

                            {data.blood && (

                                <div className="text-center p-6 rounded-2xl bg-secondary/20 border border-primary/10">

                                    <div className="flex justify-center mb-4">

                                        <div className="w-10 h-10 rounded-full border border-primary/15 flex items-center justify-center text-primary">

                                            <FaTint size={13} />

                                        </div>

                                    </div>

                                    <p className="text-[10px] uppercase tracking-[2px] text-foreground/40 mb-2">
                                        Blood Group
                                    </p>

                                    <p className="text-lg font-medium text-foreground/75">
                                        {data.blood}
                                    </p>

                                </div>

                            )}

                        </div>

                    </section>

                )}


                {/* =================================================
                    SKILLS
                ================================================= */}

                {data.skills && data.skills.length > 0 && (

                    <section className="mt-16 text-center">

                        <p className="text-[10px] uppercase tracking-[4px] text-primary mb-3">
                            Expertise
                        </p>

                        <h2 className="text-2xl sm:text-3xl font-semibold mb-8">
                            Skills & Expertise
                        </h2>

                        <div className="flex flex-wrap justify-center gap-3">

                            {data.skills.map((skill, index) => (

                                <span
                                    key={`${skill}-${index}`}
                                    className="
                                        px-5
                                        py-2.5
                                        rounded-full
                                        border
                                        border-primary/15
                                        bg-secondary/20
                                        text-sm
                                        text-foreground/70
                                    "
                                >
                                    {skill}
                                </span>

                            ))}

                        </div>

                    </section>

                )}


                {/* =================================================
                    GALLERY
                ================================================= */}

                {(images.length > 0 || videos.length > 0) && (

                    <section className="mt-16">

                        <div className="text-center mb-9">

                            <p className="text-[10px] uppercase tracking-[4px] text-primary mb-3">
                                Portfolio
                            </p>

                            <h2 className="text-2xl sm:text-3xl font-semibold">
                                Work & Gallery
                            </h2>

                        </div>

                        {images.length > 0 && (

                            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">

                                {images.map((image, index) => (

                                    <button
                                        key={index}
                                        type="button"
                                        onClick={() =>
                                            setActiveImage(
                                                image.asset?.url || null
                                            )
                                        }
                                        className="
                                            relative
                                            aspect-[4/5]
                                            overflow-hidden
                                            rounded-2xl
                                            bg-secondary/20
                                            group
                                        "
                                    >

                                        <Image
                                            src={image.asset?.url || ""}
                                            alt={`${data.name} work ${
                                                index + 1
                                            }`}
                                            fill
                                            className="
                                                object-cover
                                                transition
                                                duration-500
                                                group-hover:scale-105
                                            "
                                        />

                                    </button>

                                ))}

                            </div>

                        )}

                        {videos.length > 0 && (

                            <div
                                className={`grid md:grid-cols-2 gap-5 ${
                                    images.length > 0 ? "mt-5" : ""
                                }`}
                            >

                                {videos.map((video, index) => (

                                    <div
                                        key={index}
                                        className="
                                            aspect-video
                                            rounded-2xl
                                            overflow-hidden
                                            bg-secondary/20
                                            border
                                            border-primary/10
                                        "
                                    >

                                        <iframe
                                            src={getYouTubeEmbedUrl(
                                                video.url || ""
                                            )}
                                            title={`${data.name} video ${
                                                index + 1
                                            }`}
                                            className="w-full h-full border-0"
                                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                            allowFullScreen
                                        />

                                    </div>

                                ))}

                            </div>

                        )}

                    </section>

                )}


                {/* =================================================
                    SOCIAL
                ================================================= */}

                {data.socialLinks &&
                    data.socialLinks.length > 0 && (

                        <section className="mt-16 text-center">

                            <p className="text-[10px] uppercase tracking-[4px] text-primary mb-3">
                                Connect
                            </p>

                            <h2 className="text-2xl sm:text-3xl font-semibold mb-8">
                                Social Media
                            </h2>

                            <div className="flex flex-wrap justify-center gap-3">

                                {data.socialLinks.map(
                                    (social, index) => {

                                        if (!social.url) {
                                            return null;
                                        }

                                        return (

                                            <a
                                                key={`${social.url}-${index}`}
                                                href={social.url}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="
                                                    inline-flex
                                                    items-center
                                                    gap-3
                                                    px-5
                                                    py-3
                                                    rounded-full
                                                    border
                                                    border-primary/15
                                                    bg-secondary/20
                                                    text-sm
                                                    text-foreground/70
                                                    hover:border-primary
                                                    hover:text-primary
                                                    transition
                                                "
                                            >

                                                {getSocialIcon(
                                                    social.title
                                                )}

                                                {social.title ||
                                                    "Social Profile"}

                                            </a>

                                        );
                                    }
                                )}

                            </div>

                        </section>

                    )}


                
{/* =================================================
    FIXED CONTACT BAR
================================================= */}

{(data.email || data.phone) && (
    <div
        className="
            fixed
            bottom-0
            left-0
            w-full
            z-[100]
            bg-background/80
            backdrop-blur-lg
            border-t
            border-primary/10
            px-2
            sm:px-4
            py-3
            flex
            flex-wrap
            items-center
            justify-center
            gap-x-2
            gap-y-2
            sm:gap-4
        "
    >

        {/* PHONE */}
        {data.phone && data.phoneVisibility === "show" && (
            <a
                href={getPhoneHref()}
                target={
                    data.phoneAction === "whatsapp"
                        ? "_blank"
                        : undefined
                }
                rel={
                    data.phoneAction === "whatsapp"
                        ? "noopener noreferrer"
                        : undefined
                }
                className="
                    inline-flex
                    items-center
                    justify-center
                    gap-1
                    sm:gap-2
                    px-2
                    sm:px-4
                    py-2
                    rounded-full
                    border
                    border-primary
                    hover:bg-primary
                    hover:text-background
                    transition
                    text-[10px]
                    sm:text-sm
                    whitespace-nowrap
                    max-w-full
                "
            >
                {data.phoneAction === "whatsapp" ? (
                    <FaWhatsapp className="shrink-0" size={12} />
                ) : (
                    <FaPhoneAlt className="shrink-0" size={12} />
                )}

                <span>{data.phone}</span>
            </a>
        )}

        {/* MASK - NO CLICK */}
        {data.phone && data.phoneVisibility === "mask" && (
            <span
                className="
                    inline-flex
                    items-center
                    justify-center
                    gap-1
                    sm:gap-2
                    px-2
                    sm:px-4
                    py-2
                    rounded-full
                    border
                    border-primary/30
                    opacity-70
                    text-[10px]
                    sm:text-sm
                    whitespace-nowrap
                    max-w-full
                "
            >
                <FaPhoneAlt className="shrink-0" size={12} />
                {getMaskedPhone()}
            </span>
        )}

        {/* EMAIL */}
        {data.email && (
            <a
                href={`mailto:${data.email}`}
                className="
                    inline-flex
                    items-center
                    justify-center
                    gap-1
                    sm:gap-2
                    px-2
                    sm:px-4
                    py-2
                    rounded-full
                    border
                    border-primary
                    hover:bg-primary
                    hover:text-background
                    transition
                    text-[10px]
                    sm:text-sm
                    max-w-full
                    min-w-0
                    break-all
                    sm:break-normal
                "
            >
                <FaEnvelope className="shrink-0" size={12} />
                <span>{data.email}</span>
            </a>
        )}

    </div>
)}






                {/* =================================================
                    FOOTER
                ================================================= */}

                <div className="text-center mt-16">

                    <div className="flex justify-center items-center gap-3 mb-3">

                        <span className="w-8 h-px bg-primary/20" />

                        <span className="w-1 h-1 rounded-full bg-primary/50" />

                        <span className="w-8 h-px bg-primary/20" />

                    </div>

                    <p className="text-[10px] uppercase tracking-[3px] text-foreground/30">
                        Innovate Wedding Company
                    </p>

                </div>

                

            </div>



            


            {/* =====================================================
                LIGHTBOX
            ===================================================== */}

            {activeImage && (

                <div
                    className="
                        fixed
                        inset-0
                        z-[999]
                        bg-black/90
                        flex
                        items-center
                        justify-center
                        p-5
                    "
                    onClick={() => setActiveImage(null)}
                >

                    <div className="relative w-full max-w-5xl h-[85vh]">

                        <Image
                            src={activeImage}
                            alt={`${data.name} gallery`}
                            fill
                            className="object-contain"
                        />

                    </div>

                    <button
                        type="button"
                        onClick={() => setActiveImage(null)}
                        className="
                            absolute
                            top-5
                            right-6
                            text-white
                            text-4xl
                            font-light
                            hover:opacity-60
                        "
                        aria-label="Close image"
                    >
                        ×
                    </button>

                </div>

            )}

            

        </main>
    );
};

export default EmployeePage;