"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { FaEnvelope } from "react-icons/fa";
import { FaPhone } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";

const EmployeePage = ({ data }: any) => {
    const [activeIndex, setActiveIndex] = useState<number | null>(null);

    if (!data) return null;

    if (data?.isActive === false) {
        return (
            <div className="h-screen flex items-center justify-center text-center">
                <p className="text-lg text-foreground/70">
                    This profile is inactive
                </p>
            </div>
        );
    }

    // const getEmailUI = () => {
    //     if (!data.email) return null;

    //     return (
    //         <a
    //             href={`mailto:${data.email}`}
    //             target="_blank"
    //             rel="noopener noreferrer"
    //             className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-primary text-sm hover:bg-primary hover:text-background transition"
    //         >
    //             <MdEmail className="text-lg" />{data.email}
    //         </a>

    //     );
    // };

    // // 🔒 PHONE UI (SECURE)
    // const getPhoneUI = () => {
    //     if (!data.phone || data.phoneVisibility === "hide") return null;

    //     const getMaskedPhone = (phone: string) => {
    //         if (!phone || phone.length < 10) return "+91 **** ****";

    //         const start = phone.slice(0, 2);
    //         const end = phone.slice(-2);

    //         return `+91 ${start} ****** ${end}`;
    //     };

    //     if (data.phoneVisibility === "mask") {
    //         return (
    //             <span className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-primary/30 text-sm opacity-70">
    //                 <FaPhone className="" />{getMaskedPhone(data.phone)}
    //             </span>
    //         );
    //     }

    //     return (
    //         <Link
    //             href={
    //                 data.phoneAction === "whatsapp"
    //                     ? `https://wa.me/91${data.phone}`
    //                     : `tel:+91${data.phone}`
    //             }
    //             className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-primary text-sm hover:bg-primary hover:text-background transition"
    //         >
    //             <FaPhone className="" />+91 {data.phone}
    //         </Link>
    //     );
    // };

    return (
        <div className="bg-background text-foreground min-h-screen">

            {/* ================= HERO ================= */}

            <section className="relative overflow-hidden py-20 px-6">

                {/* Background */}
                <div className="absolute inset-0 bg-gradient-to-br from-secondary/40 via-background to-background" />
                <div className="absolute w-[140%] h-[300px] bg-primary/20 rotate-[-15deg] -top-20 -left-20 rounded-full blur-3xl" />

                <div className="relative max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">

                    {/* LEFT */}
                    <div className="space-y-6">

                        <p className="text-xs tracking-[4px] text-primary uppercase">
                            Innovate Wedding Company
                        </p>

                        <h1 className="text-3xl md:text-5xl font-semibold leading-tight">
                            {data.name}
                        </h1>

                        {data.role && (
                            <p className="text-lg text-primary font-medium">
                                {data.role}
                            </p>
                        )}

                        <div className="flex flex-wrap gap-3">

                            {/* PHONE */}
                            {data.phone && data.phoneVisibility === "show" && (
                                <a
                                    href={
                                        data.phoneAction === "whatsapp"
                                            ? `https://wa.me/91${data.phone}`
                                            : `tel:+91${data.phone}`
                                    }
                                    className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-primary text-sm hover:bg-primary hover:text-background transition"
                                >
                                    <FaPhone className="" /> +91 {data.phone}
                                </a>
                            )}

                            {/* MASK */}
                            {data.phoneVisibility === "mask" && data.phone && (
                                <span className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-primary/30 text-sm opacity-70">
                                    <FaPhone className="" /> +91 {data.phone.slice(0, 2)} ******{data.phone.slice(-2)}
                                </span>
                            )}

                            {/* EMAIL */}
                            {data.email && (
                                <a
                                    href={`mailto:${data.email}`}
                                    onClick={(e) => {
                                        e.stopPropagation(); // 🔥 important
                                    }}
                                    className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-primary text-sm hover:bg-primary hover:text-background transition"
                                >
                                    <FaEnvelope className="" /> {data.email}
                                </a>
                            )}

                        </div>

                    </div>

                    {/* IMAGE */}
                    {data.photo?.asset?.url && (
                        <div className="relative w-full h-[420px] group">
                            <Image
                                src={data.photo.asset.url}
                                alt={data.name}
                                fill
                                className="object-contain transition duration-500 group-hover:scale-105"
                            />
                        </div>
                    )}

                </div>
            </section>

            {/* ================= ABOUT + DETAILS ================= */}

            {(data.bio || data.address || data.blood || data.dob) && (
                <section className="max-w-5xl mx-auto px-6 pb-16 space-y-10">

                    {/* ABOUT */}
                    {data.bio && (
                        <div className="text-center max-w-3xl mx-auto">
                            <h2 className="text-xl font-semibold mb-4">About</h2>
                            <p className="text-foreground/70 leading-relaxed">
                                {data.bio}
                            </p>
                        </div>
                    )}

                    {/* DETAILS */}
                    {(data.address || data.blood || data.dob) && (
                        <div className="grid md:grid-cols-3 gap-6 text-center">

                            {data.address && (
                                <div className="p-5 rounded-xl border border-primary/10 bg-secondary/40">
                                    <p className="text-xs text-foreground/50 mb-1">Address</p>
                                    <p className="text-sm">{data.address}</p>
                                </div>
                            )}

                            {data.blood && (
                                <div className="p-5 rounded-xl border border-primary/10 bg-secondary/40">
                                    <p className="text-xs text-foreground/50 mb-1">Blood Group</p>
                                    <p className="text-sm">{data.blood}</p>
                                </div>
                            )}

                            {data.dob && (
                                <div className="p-5 rounded-xl border border-primary/10 bg-secondary/40">
                                    <p className="text-xs text-foreground/50 mb-1">Date of Birth</p>
                                    <p className="text-sm">
                                        {new Date(data.dob).toLocaleDateString("en-GB")}
                                    </p>
                                </div>
                            )}

                        </div>
                    )}

                </section>
            )}

            {/* ================= SKILLS ================= */}

            {data.skills?.length > 0 && (
                <section className="max-w-4xl mx-auto px-6 pb-16 text-center">
                    <h2 className="text-lg font-semibold mb-6">Skills</h2>

                    <div className="flex flex-wrap justify-center gap-3">
                        {data.skills.map((skill: string, i: number) => (
                            <span
                                key={i}
                                className="px-4 py-2 bg-secondary rounded-full text-sm border border-primary/10"
                            >
                                {skill}
                            </span>
                        ))}
                    </div>
                </section>
            )}

            {/* ================= SOCIAL ================= */}

            {data.socialLinks?.length > 0 && (
                <section className="max-w-4xl mx-auto px-6 pb-16 text-center">
                    <h2 className="text-lg font-semibold mb-6">Social Media</h2>

                    <div className="flex flex-wrap gap-4 justify-center">
                        {data.socialLinks.map((item: any, i: number) => (
                            <a
                                key={i}
                                href={item.url}
                                target="_blank"
                                className="px-5 py-2 border border-primary rounded-full text-sm hover:bg-primary hover:text-background transition"
                            >
                                {item.title}
                            </a>
                        ))}
                    </div>
                </section>
            )}

            {/* ================= GALLERY ================= */}

            {data.gallery?.length > 0 && (
                <section className="max-w-6xl mx-auto px-6 pb-24">

                    <h2 className="text-lg font-semibold mb-10 text-center">
                        Gallery
                    </h2>

                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">

                        {data.gallery.map((item: any, i: number) => {

                            if (item._type === "image") {
                                return (
                                    <div
                                        key={i}
                                        onClick={() => setActiveIndex(i)}
                                        className="overflow-hidden rounded-xl cursor-pointer group"
                                    >
                                        <Image
                                            src={item.asset.url}
                                            alt=""
                                            width={400}
                                            height={500}
                                            className="w-full h-auto transition duration-500 group-hover:scale-105"
                                        />
                                    </div>
                                );
                            }

                            if (item._type === "video" && item.url) {
                                const id = item.url.split("v=")[1]?.split("&")[0];

                                return (
                                    <iframe
                                        key={i}
                                        src={`https://www.youtube.com/embed/${id}`}
                                        className="w-full h-[200px] rounded-xl"
                                        allowFullScreen
                                    />
                                );
                            }

                            return null;
                        })}
                    </div>
                </section>
            )}

            {/* ================= LIGHTBOX ================= */}

            {activeIndex !== null &&
                data.gallery[activeIndex]?._type === "image" && (
                    <div
                        className="fixed inset-0 bg-black/90 flex items-center justify-center z-50"
                        onClick={() => setActiveIndex(null)}
                    >
                        <Image
                            src={data.gallery[activeIndex].asset.url}
                            alt=""
                            width={900}
                            height={900}
                            className="object-contain max-h-[90vh]"
                        />
                    </div>
                )}

        </div>
    );
};

export default EmployeePage;