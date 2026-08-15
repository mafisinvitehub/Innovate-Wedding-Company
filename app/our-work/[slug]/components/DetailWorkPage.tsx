// "use client";

// import Image from "next/image";
// import Link from "next/link";
// import React, { useEffect, useRef, useState } from "react";

// type Props = {
//     data: any;
// };

// const WorkDetailPage: React.FC<Props> = ({ data }) => {

//     // console.log('data--->', data)

//     // 🔥 MEDIA BUILD (FIXED VIDEO + SAFE)
//     const media = [
//         ...(data?.gallery || []).map((img: any) => ({
//             type: "image",
//             src: img?.asset?.url,
//         })),
//         ...(data?.videos || []).map((vid: any) => {

//             // 🔥 YOUTUBE / URL VIDEO
//             if (vid?.url) {
//                 let embed = vid.url;

//                 if (embed.includes("youtube.com") || embed.includes("youtu.be")) {
//                     const id =
//                         embed.split("v=")[1]?.split("&")[0] ||
//                         embed.split("/shorts/")[1] ||
//                         embed.split("youtu.be/")[1];

//                     embed = `https://www.youtube.com/embed/${id}`;
//                 }

//                 return { type: "video", src: embed, isEmbed: true };
//             }

//             // 🔥 SANITY UPLOAD VIDEO (FINAL FIX)
//             if (vid?.file?.asset?._ref) {

//                 const ref = vid.file.asset._ref;

//                 // example: file-bc5b7120979f8c95cc7bb5b8ed28360008957b16-mp4
//                 const [, id, ext] = ref.split("-");

//                 return {
//                     type: "video",
//                     src: `https://cdn.sanity.io/files/${process.env.NEXT_PUBLIC_SANITY_PROJECT_ID}/${process.env.NEXT_PUBLIC_SANITY_DATASET}/${id}.${ext}`,
//                     isEmbed: false,
//                 };
//             }

//             return null;
//         }),
//     ].filter(Boolean);

//     const [activeIndex, setActiveIndex] = useState<number | null>(null);
//     const touchStartX = useRef<number | null>(null);
//     const [visibleCount, setVisibleCount] = useState(12);

//     const openModal = (i: number) => setActiveIndex(i);
//     const closeModal = () => setActiveIndex(null);

//     const next = () => {
//         if (activeIndex === null) return;
//         setActiveIndex((activeIndex + 1) % media.length);
//     };

//     const prev = () => {
//         if (activeIndex === null) return;
//         setActiveIndex(
//             activeIndex === 0 ? media.length - 1 : activeIndex - 1
//         );
//     };

//     // ✅ KEYBOARD SUPPORT
//     useEffect(() => {
//         const handleKey = (e: KeyboardEvent) => {
//             if (activeIndex === null) return;

//             if (e.key === "ArrowRight") next();
//             if (e.key === "ArrowLeft") prev();
//             if (e.key === "Escape") closeModal();
//         };

//         window.addEventListener("keydown", handleKey);
//         return () => window.removeEventListener("keydown", handleKey);
//     }, [activeIndex]);

//     // ✅ PRELOAD
//     useEffect(() => {
//         if (activeIndex === null) return;

//         const preload = (index: number) => {
//             const item = media[index];
//             if (item?.type === "image" && item?.src) {
//                 const img = new window.Image();
//                 img.src = item.src;
//             }
//         };

//         preload((activeIndex + 1) % media.length);
//         preload(
//             activeIndex === 0 ? media.length - 1 : activeIndex - 1
//         );
//     }, [activeIndex, media]);

//     // ✅ INFINITE SCROLL
//     useEffect(() => {
//         const handleScroll = () => {
//             if (
//                 window.innerHeight + window.scrollY >=
//                 document.body.offsetHeight - 500
//             ) {
//                 setVisibleCount((prev) => prev + 12);
//             }
//         };

//         window.addEventListener("scroll", handleScroll);
//         return () => window.removeEventListener("scroll", handleScroll);
//     }, []);

//     // ✅ SWIPE
//     const onTouchStart = (e: React.TouchEvent) => {
//         touchStartX.current = e.touches[0].clientX;
//     };

//     const onTouchEnd = (e: React.TouchEvent) => {
//         if (touchStartX.current === null) return;

//         const diff = touchStartX.current - e.changedTouches[0].clientX;

//         if (diff > 50) next();
//         if (diff < -50) prev();

//         touchStartX.current = null;
//     };

//     return (
//         <div className="bg-background">

//             {/* HERO */}
//             {data?.coverImage?.asset?.url && (
//                 <section className="relative w-full h-[80vh]">
//                     <Image
//                         src={data.coverImage.asset.url}
//                         alt="Hero"
//                         fill
//                         className="object-cover"
//                         priority
//                     />
//                     <div className="absolute inset-0 bg-black/50" />
//                     <div className="absolute bottom-10 left-6 md:left-16 text-white">
//                         <h1 className="text-3xl md:text-5xl font-semibold mb-2">
//                             {data.title}
//                         </h1>
//                         <p className="text-sm opacity-80">
//                             {data.location} • {data.service}
//                         </p>
//                     </div>
//                 </section>
//             )}

//             {/* META */}
//             <section className="max-w-5xl mx-auto px-6 py-12 grid md:grid-cols-3 gap-6 text-center md:text-left">
//                 {/* <div>
//                     <p className="text-xs text-primary uppercase">Client</p>
//                     <p className="text-foreground">{data.title}</p>
//                 </div>
//                 <div>
//                     <p className="text-xs text-primary uppercase">Location</p>
//                     <p className="text-foreground">{data.location}</p>
//                 </div>
//                 <div>
//                     <p className="text-xs text-primary uppercase">Service</p>
//                     <p className="text-foreground">{data.service}</p>
//                 </div> */}
//             </section>

//             {/* STORY */}
//             {data?.description && (
//                 <section className="max-w-3xl mx-auto px-6 pb-16 text-center">
//                     <h2 className="text-2xl font-semibold text-foreground mb-4">
//                         The Story
//                     </h2>
//                     <p className="text-foreground/70 leading-relaxed">
//                         {data.description}
//                     </p>
//                 </section>
//             )}

//             {/* MEDIA GRID */}
//             <section className="max-w-7xl mx-auto px-6 pb-24 columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">

//                 {media.slice(0, visibleCount).map((item: any, i: number) => (
//                     <div
//                         key={i}
//                         onClick={() => openModal(i)}
//                         className="relative rounded-2xl overflow-hidden cursor-pointer group break-inside-avoid"
//                     >

//                         {/* IMAGE */}
//                         {item.type === "image" && (
//                             <Image
//                                 src={item.src}
//                                 alt=""
//                                 width={500}
//                                 height={600}
//                                 className="w-full h-auto object-cover group-hover:scale-105 transition"
//                             />
//                         )}

//                         {/* VIDEO */}
//                         {item.type === "video" && (
//                             <div className="relative overflow-hidden">

//                                 {item.isEmbed ? (() => {
//                                     const rawId = item.src.split("/embed/")[1];
//                                     const videoId = rawId?.split("?")[0];

//                                     return (
//                                         <img
//                                             src={`https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`}
//                                             alt="Video Thumbnail"
//                                             className="w-full h-auto object-cover group-hover:scale-105 transition duration-500"
//                                             onError={(e: any) => {
//                                                 const target = e.currentTarget;

//                                                 // first fallback
//                                                 if (target.src.includes("maxresdefault")) {
//                                                     target.src = `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`;
//                                                 }
//                                                 // final fallback → cover image
//                                                 else {
//                                                     target.onerror = null;
//                                                     target.src = data?.coverImage?.asset?.url;
//                                                 }
//                                             }}
//                                         />
//                                     );
//                                 })() : (
//                                     <Image
//                                         src={data?.coverImage?.asset?.url}
//                                         alt="Video Thumbnail"
//                                         width={500}
//                                         height={600}
//                                         className="w-full h-auto object-cover group-hover:scale-105 transition duration-500"
//                                     />
//                                 )}

//                             </div>
//                         )}

//                         {/* 🔥 OLD PREMIUM HOVER */}
//                         <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 flex items-center justify-center transition">
//                             <p className="text-white border px-5 py-2 rounded-full backdrop-blur-sm flex items-center gap-2">
//                                 {item.type === "video" ? "▶ Play" : "View"}
//                             </p>
//                         </div>

//                     </div>
//                 ))}

//             </section>

//             {/* CTA */}
//             <section className="pb-24 text-center px-6">
//                 <p className="text-foreground/70 mb-4">
//                     Inspired by this design?
//                 </p>
//                 <Link
//                     href="/contact"
//                     className="text-primary border-b border-primary"
//                 >
//                     Let’s Create Yours →
//                 </Link>
//             </section>

//             {/* MODAL */}
//             {activeIndex !== null && media[activeIndex] && (
//                 <div className="fixed inset-0 z-50 flex items-center justify-center">

//                     <div
//                         className="absolute inset-0 bg-black/80"
//                         onClick={closeModal}
//                     />

//                     <div
//                         className="relative w-[95%] max-w-6xl h-[80vh]"
//                         onTouchStart={onTouchStart}
//                         onTouchEnd={onTouchEnd}
//                     >

//                         {media[activeIndex].type === "image" ? (
//                             <Image
//                                 src={media[activeIndex].src}
//                                 alt=""
//                                 fill
//                                 className="object-contain"
//                             />
//                         ) : media[activeIndex].isEmbed ? (
//                             <iframe
//                                 src={media[activeIndex].src}
//                                 className="w-full h-full"
//                                 allowFullScreen
//                             />
//                         ) : (
//                             <video
//                                 src={media[activeIndex].src}
//                                 controls
//                                 autoPlay
//                                 playsInline
//                                 className="w-full h-full object-contain"
//                             />
//                         )}

//                         {/* controls */}
//                         <button onClick={closeModal} className="absolute top-2 right-2 text-white text-3xl">✕</button>
//                         <button onClick={prev} className="absolute left-2 top-1/2 text-white">←</button>
//                         <button onClick={next} className="absolute right-2 top-1/2 text-white">→</button>

//                     </div>
//                 </div>
//             )}

//         </div>
//     );
// };

// export default WorkDetailPage;

"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";

type Props = {
    data: any;
};

const WorkDetailPage: React.FC<Props> = ({ data }) => {

    // =========================================================
    // MEDIA BUILD
    // New Sanity structure:
    // media[] -> image + video
    // =========================================================

    const media = (data?.media || [])
        .map((item: any) => {

            // IMAGE
            if (item?._type === "image" && item?.asset?.url) {
                return {
                    type: "image",
                    src: item.asset.url,
                };
            }

            // VIDEO
            if (item?._type === "video") {

                // YouTube / external URL
                if (item?.url) {
                    let embed = item.url;

                    if (
                        embed.includes("youtube.com") ||
                        embed.includes("youtu.be")
                    ) {
                        const id =
                            embed.split("v=")[1]?.split("&")[0] ||
                            embed.split("/shorts/")[1]?.split("?")[0] ||
                            embed.split("youtu.be/")[1]?.split("?")[0];

                        if (id) {
                            embed = `https://www.youtube.com/embed/${id}`;
                        }
                    }

                    return {
                        type: "video",
                        src: embed,
                        isEmbed: true,
                    };
                }

                // Uploaded Sanity video
                if (item?.file?.asset?.url) {
                    return {
                        type: "video",
                        src: item.file.asset.url,
                        isEmbed: false,
                    };
                }
            }

            return null;
        })
        .filter(Boolean);


    const [activeIndex, setActiveIndex] = useState<number | null>(null);

    const touchStartX = useRef<number | null>(null);

    const [visibleCount, setVisibleCount] = useState(12);


    // =========================================================
    // MODAL
    // =========================================================

    const openModal = (i: number) => {
        setActiveIndex(i);
    };

    const closeModal = () => {
        setActiveIndex(null);
    };


    const next = () => {
        if (activeIndex === null || media.length === 0) return;

        setActiveIndex(
            (activeIndex + 1) % media.length
        );
    };


    const prev = () => {
        if (activeIndex === null || media.length === 0) return;

        setActiveIndex(
            activeIndex === 0
                ? media.length - 1
                : activeIndex - 1
        );
    };


    // =========================================================
    // KEYBOARD SUPPORT
    // =========================================================

    useEffect(() => {

        const handleKey = (e: KeyboardEvent) => {

            if (activeIndex === null) return;

            if (e.key === "ArrowRight") {
                next();
            }

            if (e.key === "ArrowLeft") {
                prev();
            }

            if (e.key === "Escape") {
                closeModal();
            }
        };

        window.addEventListener("keydown", handleKey);

        return () => {
            window.removeEventListener("keydown", handleKey);
        };

    }, [activeIndex]);


    // =========================================================
    // PRELOAD NEXT / PREVIOUS IMAGE
    // =========================================================

    useEffect(() => {

        if (activeIndex === null || media.length === 0) {
            return;
        }

        const preload = (index: number) => {

            const item = media[index];

            if (item?.type === "image" && item?.src) {

                const img = new window.Image();

                img.src = item.src;
            }
        };

        preload(
            (activeIndex + 1) % media.length
        );

        preload(
            activeIndex === 0
                ? media.length - 1
                : activeIndex - 1
        );

    }, [activeIndex, media]);


    // =========================================================
    // INFINITE SCROLL
    // =========================================================

    useEffect(() => {

        const handleScroll = () => {

            if (
                visibleCount < media.length &&
                window.innerHeight + window.scrollY >=
                document.body.offsetHeight - 500
            ) {
                setVisibleCount((prev) =>
                    Math.min(prev + 12, media.length)
                );
            }
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };

    }, [visibleCount, media.length]);


    // =========================================================
    // SWIPE
    // =========================================================

    const onTouchStart = (
        e: React.TouchEvent
    ) => {

        touchStartX.current =
            e.touches[0].clientX;
    };


    const onTouchEnd = (
        e: React.TouchEvent
    ) => {

        if (touchStartX.current === null) {
            return;
        }

        const diff =
            touchStartX.current -
            e.changedTouches[0].clientX;

        if (diff > 50) {
            next();
        }

        if (diff < -50) {
            prev();
        }

        touchStartX.current = null;
    };


    return (

        <div className="bg-background">

            {/* =================================================
                HERO
            ================================================= */}

            {data?.coverImage?.asset?.url && (

                <section className="relative w-full h-[80vh]">

                    <Image
                        src={data.coverImage.asset.url}
                        alt={data.title || "Our Work"}
                        fill
                        className="object-cover"
                        priority
                    />

                    <div className="absolute inset-0 bg-black/50" />

                    <div className="absolute bottom-10 left-6 md:left-16 text-white">

                        <h1 className="text-3xl md:text-5xl font-semibold mb-2">
                            {data.title}
                        </h1>

                        <p className="text-sm opacity-80">
                            Explore our {data.title?.toLowerCase()} collection
                        </p>

                    </div>

                </section>
            )}


            {/* =================================================
                CATEGORY DESCRIPTION
            ================================================= */}

            {data?.description && (

                <section className="max-w-3xl mx-auto px-6 py-16 text-center">

                    <h2 className="text-2xl font-semibold text-foreground mb-4">
                        The Story
                    </h2>

                    <p className="text-foreground/70 leading-relaxed">
                        {data.description}
                    </p>

                </section>

            )}


            {/* =================================================
                MEDIA GRID
            ================================================= */}

            {media.length > 0 && (

                <section className="max-w-7xl mx-auto px-6 pb-24 columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">

                    {media
                        .slice(0, visibleCount)
                        .map((item: any, i: number) => (

                            <div
                                key={`${item.type}-${i}`}
                                onClick={() => openModal(i)}
                                className="relative rounded-2xl overflow-hidden cursor-pointer group break-inside-avoid"
                            >

                                {/* =========================
                                    IMAGE
                                ========================= */}

                                {item.type === "image" && (

                                    <Image
                                        src={item.src}
                                        alt={`${data.title || "Portfolio"} ${i + 1}`}
                                        width={500}
                                        height={600}
                                        className="w-full h-auto object-cover group-hover:scale-105 transition duration-500"
                                    />

                                )}


                                {/* =========================
                                    VIDEO
                                ========================= */}

                                {item.type === "video" && (

                                    <div className="relative overflow-hidden">

                                        {item.isEmbed ? (

                                            (() => {

                                                const rawId =
                                                    item.src.split("/embed/")[1];

                                                const videoId =
                                                    rawId?.split("?")[0];

                                                if (!videoId) {
                                                    return (
                                                        <Image
                                                            src={data.coverImage.asset.url}
                                                            alt="Video"
                                                            width={500}
                                                            height={600}
                                                            className="w-full h-auto object-cover"
                                                        />
                                                    );
                                                }

                                                return (
                                                    <img
                                                        src={`https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`}
                                                        alt="Video Thumbnail"
                                                        className="w-full h-auto object-cover group-hover:scale-105 transition duration-500"
                                                        onError={(e) => {

                                                            const target =
                                                                e.currentTarget;

                                                            if (
                                                                target.src.includes(
                                                                    "maxresdefault"
                                                                )
                                                            ) {

                                                                target.src =
                                                                    `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`;

                                                            } else {

                                                                target.onerror =
                                                                    null;

                                                                target.src =
                                                                    data?.coverImage?.asset?.url;
                                                            }

                                                        }}
                                                    />
                                                );

                                            })()

                                        ) : (

                                            <video
                                                src={item.src}
                                                muted
                                                playsInline
                                                preload="metadata"
                                                className="w-full h-auto object-cover"
                                            />

                                        )}

                                    </div>

                                )}


                                {/* =========================
                                    HOVER
                                ========================= */}

                                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 flex items-center justify-center transition duration-300">

                                    <p className="text-white border px-5 py-2 rounded-full backdrop-blur-sm flex items-center gap-2">

                                        {item.type === "video"
                                            ? "▶ Play"
                                            : "View"}

                                    </p>

                                </div>

                            </div>

                        ))}

                </section>

            )}


            {/* =================================================
                EMPTY MEDIA
            ================================================= */}

            {media.length === 0 && (

                <section className="max-w-3xl mx-auto px-6 pb-24 text-center">

                    <p className="text-foreground/50">
                        More moments from this collection will be added soon.
                    </p>

                </section>

            )}


            {/* =================================================
                CTA
            ================================================= */}

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


            {/* =================================================
                MODAL
            ================================================= */}

            {activeIndex !== null &&
                media[activeIndex] && (

                    <div className="fixed inset-0 z-50 flex items-center justify-center">

                        {/* BACKDROP */}

                        <div
                            className="absolute inset-0 bg-black/80"
                            onClick={closeModal}
                        />


                        {/* CONTENT */}

                        <div
                            className="relative w-[95%] max-w-6xl h-[80vh]"
                            onTouchStart={onTouchStart}
                            onTouchEnd={onTouchEnd}
                        >

                            {/* IMAGE */}

                            {media[activeIndex].type === "image" && (

                                <Image
                                    src={media[activeIndex].src}
                                    alt=""
                                    fill
                                    className="object-contain"
                                />

                            )}


                            {/* EMBED VIDEO */}

                            {media[activeIndex].type === "video" &&
                                media[activeIndex].isEmbed && (

                                    <iframe
                                        src={media[activeIndex].src}
                                        className="w-full h-full"
                                        allow="autoplay; fullscreen"
                                        allowFullScreen
                                    />

                                )}


                            {/* UPLOADED VIDEO */}

                            {media[activeIndex].type === "video" &&
                                !media[activeIndex].isEmbed && (

                                    <video
                                        src={media[activeIndex].src}
                                        controls
                                        autoPlay
                                        playsInline
                                        className="w-full h-full object-contain"
                                    />

                                )}


                            {/* CONTROLS */}

                            <button
                                onClick={closeModal}
                                className="absolute top-2 right-2 text-white text-3xl z-10"
                            >
                                ✕
                            </button>

                            <button
                                onClick={prev}
                                className="absolute left-2 top-1/2 -translate-y-1/2 text-white text-3xl z-10"
                            >
                                ←
                            </button>

                            <button
                                onClick={next}
                                className="absolute right-2 top-1/2 -translate-y-1/2 text-white text-3xl z-10"
                            >
                                →
                            </button>

                        </div>

                    </div>

                )}

        </div>
    );
};

export default WorkDetailPage;