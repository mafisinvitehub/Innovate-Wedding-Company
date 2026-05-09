'use client';

import Image from "next/image"
import PrimaryButton from "../components/PrimaryButton"
import { motion } from "framer-motion"

const services = [
    {
        title: "Complete Event Management",
        desc: "From weddings and corporate events to private celebrations, we plan and execute every detail seamlessly to deliver a stress-free and premium experience.",
        img: "/temp-images/services/event-management.png",
    },
    {
        title: "Photography, Videography & Drone",
        desc: "We capture every moment with cinematic storytelling, high-end photography, videography, and drone coverage to create visuals that last forever.",
        img: "/temp-images/services/photography.png",
    },
    {
        title: "Creative & Digital Solutions",
        desc: "From reels and content creation to digital marketing and website development, we help you build a strong and modern digital presence.",
        img: "/temp-images/services/digital-marketing.png",
    },
    {
        title: "Catering, Bridal & Custom Services",
        desc: "Multi-cuisine catering, bridal makeup, rental accessories, and surprise planning — everything you need to complete your event, all in one place.",
        img: "/temp-images/services/catering.png",
    },
];

const ServiceSection = () => {
    return (
        <section className="bg-background py-24 px-6">

            <div className="max-w-6xl mx-auto">

                {/* Heading */}

                <div className="text-center mb-20">
                    <h2 className="text-2xl md:text-3xl lg:text-4xl tracking-[0.2em] text-foreground uppercase inline-block border-b border-primary pb-5">
                        What We Offer
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
                        label="View All Services"
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