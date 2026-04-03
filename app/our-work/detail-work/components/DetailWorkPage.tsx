"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";

type MediaItem = {
    type: "image" | "video";
    src: string;
};

const media: MediaItem[] = [
    { type: "image", src: "/temp-images/home/10.webp" },
    { type: "image", src: "/temp-images/home/9.jpg" },
    { type: "video", src: "/temp-videos/sample.mov" },
    { type: "image", src: "/temp-images/home/8.jpg" },
    { type: "image", src: "/temp-images/home/7.jpg" },
];

const WorkDetailPage: React.FC = () => {
    const [activeIndex, setActiveIndex] = useState<number | null>(null);
    const touchStartX = useRef<number | null>(null);

    const openModal = (i: number) => setActiveIndex(i);
    const closeModal = () => setActiveIndex(null);

    const next = () => {
        if (activeIndex === null) return;
        setActiveIndex((activeIndex + 1) % media.length);
    };

    const prev = () => {
        if (activeIndex === null) return;
        setActiveIndex(
            activeIndex === 0 ? media.length - 1 : activeIndex - 1
        );
    };

    // keyboard
    useEffect(() => {
        const handler = (e: KeyboardEvent) => {
            if (activeIndex === null) return;
            if (e.key === "ArrowRight") next();
            if (e.key === "ArrowLeft") prev();
            if (e.key === "Escape") closeModal();
        };
        window.addEventListener("keydown", handler);
        return () => window.removeEventListener("keydown", handler);
    }, [activeIndex]);

    // swipe
    const onTouchStart = (e: React.TouchEvent) => {
        touchStartX.current = e.touches[0].clientX;
    };

    const onTouchEnd = (e: React.TouchEvent) => {
        if (touchStartX.current === null) return;
        const diff = touchStartX.current - e.changedTouches[0].clientX;

        if (diff > 50) next();
        if (diff < -50) prev();

        touchStartX.current = null;
    };

    return (
        <div className="bg-background">

            {/* HERO */}
            <section className="relative w-full h-[80vh]">
                <Image
                    src="/temp-images/home/10.webp"
                    alt=""
                    fill
                    className="object-cover"
                    priority
                />
                <div className="absolute inset-0 bg-black/50" />
                <div className="absolute bottom-10 left-6 md:left-16 text-white">
                    <h1 className="text-3xl md:text-5xl font-semibold mb-2">
                        Arjun & Nisha
                    </h1>
                    <p className="text-sm opacity-80">
                        Chennai • Wedding Invitation
                    </p>
                </div>
            </section>

            {/* META */}
            <section className="max-w-5xl mx-auto px-6 py-12 grid md:grid-cols-3 gap-6 text-center md:text-left">
                <div>
                    <p className="text-xs text-primary uppercase">Client</p>
                    <p className="text-foreground">Arjun & Nisha</p>
                </div>
                <div>
                    <p className="text-xs text-primary uppercase">Location</p>
                    <p className="text-foreground">Chennai</p>
                </div>
                <div>
                    <p className="text-xs text-primary uppercase">Service</p>
                    <p className="text-foreground">Wedding Invitation</p>
                </div>
            </section>

            {/* STORY (optional) */}
            <section className="max-w-3xl mx-auto px-6 pb-16 text-center">
                <h2 className="text-2xl font-semibold text-foreground mb-4">
                    The Story
                </h2>
                <p className="text-foreground/70 leading-relaxed">
                    Inspired by South Indian traditions, this design blends
                    cultural richness with modern elegance. Every detail reflects
                    the couple’s personality and creates a timeless first impression.
                </p>
            </section>

            {/* MEDIA GALLERY */}
            <section className="max-w-7xl mx-auto px-6 pb-24 columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">

                {media.map((item, i) => (
                    <div
                        key={i}
                        className="relative rounded-2xl overflow-hidden cursor-pointer group break-inside-avoid"
                        onClick={() => openModal(i)}
                    >
                        {item.type === "image" ? (
                            <Image
                                src={item.src}
                                alt=""
                                width={500}
                                height={600}
                                className="w-full h-auto object-cover group-hover:scale-105 transition"
                            />
                        ) : (
                            <video
                                src={item.src}
                                className="w-full h-auto object-cover"
                                muted
                            />
                        )}

                        {/* Overlay */}
                        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 flex items-center justify-center transition">
                            <p className="text-white border px-4 py-2 rounded-full backdrop-blur-sm">
                                View
                            </p>
                        </div>
                    </div>
                ))}

            </section>

            {/* CTA */}
            <section className="pb-24 text-center px-6">
                <p className="text-foreground/70 mb-4">
                    Inspired by this design?
                </p>
                <Link
                    href="/contact"
                    className="text-primary border-b border-primary"
                >
                    Let’s Create Yours →
                </Link>
            </section>

            {/* MODAL */}
            {activeIndex !== null && (
                <div className="fixed inset-0 z-50 flex items-center justify-center">

                    <div
                        className="absolute inset-0 bg-black/80 backdrop-blur-md"
                        onClick={closeModal}
                    />

                    <div
                        className="relative w-[95%] max-w-7xl h-[85vh]"
                        onTouchStart={onTouchStart}
                        onTouchEnd={onTouchEnd}
                    >

                        <div className="relative w-full h-full rounded-2xl overflow-hidden">

                            {media[activeIndex].type === "image" ? (
                                <Image
                                    src={media[activeIndex].src}
                                    alt=""
                                    fill
                                    className="object-contain"
                                />
                            ) : (
                                <video
                                    src={media[activeIndex].src}
                                    controls
                                    autoPlay
                                    className="w-full h-full object-contain"
                                />
                            )}

                        </div>

                        {/* Controls */}
                        <button onClick={closeModal} className="absolute top-[-50px] right-0 text-white text-3xl">✕</button>

                        <button onClick={prev} className="absolute left-[-60px] bg-white/10 p-3 rounded-full text-white">←</button>
                        <button onClick={next} className="absolute right-[-60px] bg-white/10 p-3 rounded-full text-white">→</button>

                        <div className="absolute bottom-[-40px] text-white text-sm">
                            {activeIndex + 1} / {media.length}
                        </div>

                    </div>
                </div>
            )}

        </div>
    );
};

export default WorkDetailPage;