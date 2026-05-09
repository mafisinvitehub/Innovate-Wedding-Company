"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { motion } from "framer-motion";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const slides = [
    { img: "/temp-images/home/inn1.jpg" },
    { img: "/temp-images/home/inn2.jpg" },
    { img: "/temp-images/home/inn3.jpg" },
    { img: "/temp-images/home/inn4.jpg" },
    { img: "/temp-images/home/inn5.jpg" },
    { img: "/temp-images/home/inn6.jpg" },
    { img: "/temp-images/home/inn7.jpg" },
    { img: "/temp-images/home/inn8.jpg" },
];

const HeroSection = () => {

    const getAnimation = (index: number) => {
        const type = index % 3;

        if (type === 0) {
            return {
                animate: { x: ["8%", "-8%"], scale: [1, 1.05] },
                transition: { duration: 20, ease: "linear" as const, repeat: Infinity }
            };
        }

        if (type === 1) {
            return {
                animate: { x: ["-8%", "8%"], scale: [1, 1.05] },
                transition: { duration: 20, ease: "linear" as const, repeat: Infinity }
            };
        }

        return {
            animate: { rotate: [-1.5, 1.5], scale: [1, 1.05] },
            transition: { duration: 20, ease: "easeInOut" as const, repeat: Infinity }
        };
    };

    return (
        <section className="relative w-full h-screen overflow-hidden">

            <Swiper
                modules={[Autoplay, Pagination, Navigation]}
                autoplay={{
                    delay: 6000,
                    disableOnInteraction: false,
                }}
                loop={true}
                pagination={{
                    clickable: true,
                    el: ".hero-pagination",
                    renderBullet: (index, className) => {
                        return `<span class="${className} hero-line"></span>`;
                    },
                }}
                className="h-full"
            >

                {slides.map((slide, index) => {

                    const animation = getAnimation(index);

                    return (
                        <SwiperSlide key={index}>
                            <div className="relative w-full h-screen overflow-hidden">

                                <motion.img
                                    src={slide.img}
                                    alt="Event management, wedding, photography and digital services"
                                    className="absolute w-[120%] h-[120%] object-cover left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
                                    style={{
                                        willChange: "transform",
                                        backfaceVisibility: "hidden"
                                    }}
                                    initial={{ opacity: 1 }}
                                    animate={{
                                        ...animation.animate,
                                        opacity: 1,
                                    }}
                                    transition={animation.transition}
                                />

                                {/* DARK OVERLAY */}
                                <div className="absolute inset-0 bg-black/40"></div>

                            </div>
                        </SwiperSlide>
                    );
                })}

            </Swiper>

            {/* STATIC HERO CONTENT */}

            <div className="absolute inset-0 flex items-center justify-center z-10 text-center px-6">

                <div className="max-w-3xl">

                    <h1 className="text-3xl md:text-6xl font-semibold text-white leading-tight mb-6">
                        Creating Unforgettable Experiences <br />
                        <span className="text-primary">All Under One Roof</span>
                    </h1>

                    <p className="text-white/80 text-sm md:text-lg max-w-xl mx-auto mb-8">
                        Weddings, events, photography, digital solutions, and more — crafted with creativity, precision, and a modern luxury touch.
                    </p>

                    <div className="flex justify-center gap-4 flex-wrap">
                        <a
                            href="/contact"
                            className="px-6 py-3 bg-primary text-background rounded-md text-sm hover:scale-105 transition"
                        >
                            Start Your Project
                        </a>

                        <a
                            href="/our-work"
                            className="px-6 py-3 border border-white text-white rounded-md text-sm hover:bg-white hover:text-black transition"
                        >
                            View Our Work
                        </a>
                    </div>

                </div>

            </div>

            {/* PAGINATION */}

            <div className="hero-pagination absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-2"></div>

            {/* STYLE */}

            <style jsx global>{`

                .hero-line{
                    width:26px;
                    height:2px;
                    background:#ffffff70;
                    display:inline-block;
                    transition:all .4s;
                }

                .swiper-pagination-bullet-active.hero-line{
                    background:#F5EBDD;
                    width:36px;
                }

            `}</style>

        </section>
    );
};

export default HeroSection;