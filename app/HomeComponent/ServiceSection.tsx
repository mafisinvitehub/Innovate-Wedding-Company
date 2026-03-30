'use client';

import Image from "next/image"
import PrimaryButton from "../components/PrimaryButton"
import { motion } from "framer-motion"

const services = [
    {
        title: "Capturing Moments That Last Forever",
        desc: "We preserve every smile, every glance, and every emotion through timeless photography that tells your story beautifully.",
        img: "/temp-images/home/service-image.webp",
    },
    {
        title: "Cinematic Stories of Your Special Day",
        desc: "Our films bring your wedding to life with emotion, music, and storytelling that you’ll cherish forever.",
        img: "/temp-images/home/service-video.jpg",
    },
    {
        title: "Seamless Planning, Perfect Execution",
        desc: "From planning to execution, we ensure every detail is handled with care so you can enjoy every moment stress-free.",
        img: "/temp-images/home/service-event.jpg",
    },
    {
        title: "Digital Experiences for Modern Weddings",
        desc: "From wedding websites to digital solutions, we create modern experiences that connect your celebration beautifully.",
        img: "/temp-images/home/service-site.webp",
    },
]

const ServiceSection = () => {
    return (
        <section className="bg-background py-24 px-6">

            <div className="max-w-6xl mx-auto">

                {/* Heading */}

                <div className="text-center mb-20">
                    <h2 className="text-2xl md:text-3xl lg:text-4xl tracking-[0.2em] text-foreground uppercase inline-block border-b border-primary pb-5">
                        Our Services
                    </h2>
                </div>

                {/* Services */}

                <div className="space-y-24">

                    {services.map((service, index) => {

                        const isReverse = index % 2 !== 0

                        return (
                            <div
                                key={index}
                                className="grid md:grid-cols-2 gap-12 items-center"
                            >

                                {/* TEXT */}

                                <div className={`${isReverse ? "md:order-2" : ""}`}>
                                    <h3 className="text-xl md:text-2xl text-foreground mb-4 text-center md:text-left">
                                        {service.title}
                                    </h3>

                                    <p className="text-foreground/70 leading-relaxed text-center md:text-left">
                                        {service.desc}
                                    </p>
                                </div>

                                {/* IMAGE */}

                                <div className={`${isReverse ? "md:order-1" : ""}`}>
                                    <div className="overflow-hidden rounded-xl">

                                        <motion.div
                                            whileHover={{
                                                scale: 1.05,
                                                rotate: isReverse ? -2 : 2,
                                                rotateY: isReverse ? -5 : 5,
                                            }}
                                            transition={{ type: "spring", stiffness: 120 }}
                                            className="w-full h-full"
                                        >
                                            <Image
                                                src={service.img}
                                                alt={service.title}
                                                width={600}
                                                height={400}
                                                className="w-full h-full object-cover"
                                            />
                                        </motion.div>

                                    </div>
                                </div>

                            </div>
                        )
                    })}

                </div>

                {/* BUTTON */}

                <div className="mt-20 flex justify-center">
                    <PrimaryButton
                        label="Explore All Services"
                        href="/services"
                        className="border-foreground text-foreground"
                        textClassName="group-hover:text-background"
                        bgClassName="bg-primary/70"
                    />
                </div>

            </div>

        </section>
    )
}

export default ServiceSection