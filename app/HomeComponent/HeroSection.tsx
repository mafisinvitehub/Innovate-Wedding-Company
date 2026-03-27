"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { motion } from "framer-motion";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const slides = [
    {
        img: "/temp-images/home/1.webp",
        title: "Elegant Invitations",
        desc: "Luxury digital wedding invites",
    },
    {
        img: "/temp-images/home/2.webp",
        title: "Timeless Designs",
        desc: "Crafted with premium aesthetics",
    },
    {
        img: "/temp-images/home/3.jpg",
        title: "Memorable Moments",
        desc: "Create beautiful memories",
    },
    {
        img: "/temp-images/home/4.jpg",
        title: "Luxury Experience",
        desc: "Designed for modern couples",
    },
    {
        img: "/temp-images/home/5.jpg",
        title: "Beautiful Story",
        desc: "Tell your love story",
    },
    {
        img: "/temp-images/home/6.jpg",
        title: "Premium Invitations",
        desc: "Elegant and modern style",
    },
    {
        img: "/temp-images/home/7.jpg",
        title: "Creative Designs",
        desc: "Unique wedding experiences",
    },
    {
        img: "/temp-images/home/8.jpg",
        title: "Luxury Wedding",
        desc: "Celebrate love beautifully",
    },
    {
        img: "/temp-images/home/9.jpg",
        title: "Digital Elegance",
        desc: "Modern invitation platform",
    },
    {
        img: "/temp-images/home/10.webp",
        title: "Digital Elegance",
        desc: "Modern invitation platform",
    },
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
                navigation
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
                                    alt="hero"
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

                                {/* darker overlay (reduce bleach feel) */}
                                {/* <div className="absolute inset-0 bg-black/25"></div> */}

                            </div>
                        </SwiperSlide>
                    );
                })}

            </Swiper>

            {/* CENTER TEXT */}

            <div className="absolute inset-0 flex items-end justify-center z-10 pointer-events-none mb-40">

                <div className="bg-[#F5EBDD]/75 px-6 py-4 rounded-md text-center shadow-lg">

                    <Swiper
                        modules={[Autoplay]}
                        autoplay={{ delay: 6000 }}
                        allowTouchMove={false}
                        className="w-[260px] md:w-[340px]"
                    >
                        {slides.map((slide, index) => (
                            <SwiperSlide key={index}>

                                <motion.div
                                    initial={{ opacity: 1, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 1 }}
                                >

                                    <h1
                                        className="text-2xl md:text-3xl text-gray-800"
                                        style={{ fontFamily: "'Great Vibes', cursive" }}
                                    >
                                        {slide.title}
                                    </h1>

                                    <p className="text-xs md:text-sm text-gray-700 mt-1">
                                        {slide.desc}
                                    </p>

                                </motion.div>

                            </SwiperSlide>
                        ))}
                    </Swiper>

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

                /* SMALLER ARROWS */

                .swiper-button-next,
                .swiper-button-prev{
                    display: none !important;
                    color:#F5EBDD;
                    transform:scale(.65);
                    transition:all .3s ease;
                }

                .swiper-button-next:hover,
                .swiper-button-prev:hover{
                    transform:scale(.8);
                }

                /* hide default thick icon */
                .swiper-button-next::after,
                .swiper-button-prev::after{
                    font-size:22px;
                }

`}</style>

        </section>
    );
};

export default HeroSection;