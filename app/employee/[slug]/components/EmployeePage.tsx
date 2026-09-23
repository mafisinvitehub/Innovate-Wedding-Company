"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const EmployeePage = ({ data }: any) => {
    if (!data) return null;

    // ❌ inactive
    if (data?.isActive === false) {
        return (
            <div className="min-h-screen flex items-center justify-center text-center px-6">
                <p className="text-lg text-foreground/70">
                    This profile is no longer active.
                </p>
            </div>
        );
    }

    // 📞 phone logic
    const getPhoneDisplay = () => {
        if (!data.phone || data.phoneVisibility === "hide") return null;

        if (data.phoneVisibility === "mask") {
            return `+91 ${data.phone.slice(0, 2)}******${data.phone.slice(-2)}`;
        }

        return `+91 ${data.phone}`;
    };

    const getPhoneLink = () => {
        if (!data.phone) return "#";

        if (data.phoneAction === "whatsapp") {
            return `https://wa.me/91${data.phone}`;
        }

        return `tel:+91${data.phone}`;
    };

    const [activeIndex, setActiveIndex] = useState<number | null>(null);

    return (
        <div className="bg-background text-foreground">

            {/* ================================= HERO ================================= */}

            <section className="relative w-full overflow-hidden py-20 px-6">

                {/* Background */}
                <div className="absolute inset-0 bg-gradient-to-br from-secondary/40 to-background" />
                <div className="absolute w-[140%] h-[300px] bg-primary/20 rotate-[-20deg] top-20 -left-20 rounded-full blur-2xl" />

                <div className="relative max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">

                    {/* LEFT */}
                    <div>

                        {data.name && (
                            <h1 className="text-3xl md:text-5xl font-semibold mb-3">
                                {data.name}
                            </h1>
                        )}

                        {data.role && (
                            <p className="text-lg text-primary mb-6">
                                {data.role}
                            </p>
                        )}

                        {/* PHONE */}
                        {getPhoneDisplay() && (
                            <Link
                                href={getPhoneLink()}
                                className="inline-block border border-primary px-5 py-2 rounded-full text-sm hover:bg-primary hover:text-background transition"
                            >
                                {getPhoneDisplay()}
                            </Link>
                        )}

                    </div>

                    {/* RIGHT IMAGE */}
                    {data.photo?.asset?.url && (
                        <div className="relative w-full h-[400px]">
                            <Image
                                src={data.photo.asset.url}
                                alt={data.name}
                                fill
                                className="object-contain"
                            />
                        </div>
                    )}

                </div>
            </section>

            {/* ================================= ABOUT ================================= */}

            {data.bio && (
                <section className="max-w-3xl mx-auto px-6 py-16 text-center">
                    <h2 className="text-2xl font-semibold mb-4">About</h2>
                    <p className="text-foreground/70">{data.bio}</p>
                </section>
            )}

            {/* ================================= SKILLS ================================= */}

            {data.skills?.length > 0 && (
                <section className="max-w-4xl mx-auto px-6 pb-16">
                    <h2 className="text-xl font-semibold mb-6 text-center">Skills</h2>

                    <div className="flex flex-wrap gap-3 justify-center">
                        {data.skills.map((skill: string, i: number) => (
                            <span
                                key={i}
                                className="px-4 py-2 bg-secondary rounded-full text-sm"
                            >
                                {skill}
                            </span>
                        ))}
                    </div>
                </section>
            )}

            {/* ================================= SOCIAL ================================= */}

            {data.socialLinks?.length > 0 && (
                <section className="max-w-4xl mx-auto px-6 pb-16">
                    <h2 className="text-xl font-semibold mb-6 text-center">
                        Social Media
                    </h2>

                    <div className="space-y-3 text-center">
                        {data.socialLinks.map((item: any, i: number) => (
                            <a
                                key={i}
                                href={item.url}
                                target="_blank"
                                className="block text-primary underline"
                            >
                                {item.title}
                            </a>
                        ))}
                    </div>
                </section>
            )}

            {/* ================================= GALLERY ================================= */}

            {data.gallery?.length > 0 && (
                <section className="max-w-6xl mx-auto px-6 pb-24">

                    <h2 className="text-xl font-semibold mb-8 text-center">
                        Gallery
                    </h2>

                    <div className="columns-2 md:columns-3 gap-4 space-y-4">

                        {data.gallery.map((item: any, i: number) => {

                            // IMAGE
                            if (item._type === "image") {
                                return (
                                    <div
                                        key={i}
                                        onClick={() => setActiveIndex(i)}
                                        className="cursor-pointer"
                                    >
                                        <Image
                                            src={item.asset.url}
                                            alt=""
                                            width={500}
                                            height={600}
                                            className="rounded-xl w-full h-auto"
                                        />
                                    </div>
                                );
                            }

                            // VIDEO
                            if (item._type === "video" && item.url) {
                                const id = item.url.split("v=")[1]?.split("&")[0];

                                return (
                                    <iframe
                                        key={i}
                                        src={`https://www.youtube.com/embed/${id}`}
                                        className="w-full h-[250px] rounded-xl"
                                        allowFullScreen
                                    />
                                );
                            }

                            return null;
                        })}
                    </div>
                </section>
            )}

            {/* ================================= LIGHTBOX ================================= */}

            {activeIndex !== null &&
                data.gallery[activeIndex]?._type === "image" && (
                    <div
                        className="fixed inset-0 bg-black/80 flex items-center justify-center z-50"
                        onClick={() => setActiveIndex(null)}
                    >
                        <Image
                            src={data.gallery[activeIndex].asset.url}
                            alt=""
                            width={800}
                            height={800}
                            className="object-contain"
                        />
                    </div>
                )}

        </div>
    );
};

export default EmployeePage;