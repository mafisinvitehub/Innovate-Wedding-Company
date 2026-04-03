import Image from "next/image";
import React from "react";

const services = [
    {
        title: "Wedding Invitations",
        desc: "Elegant and personalized invitation designs crafted to reflect your unique wedding story and style.",
        img: "/temp-images/home/service-image.webp",
    },
    {
        title: "Digital Invitations",
        desc: "Modern and shareable digital invites designed for convenience while maintaining a premium aesthetic.",
        img: "/temp-images/home/service-video.jpg",
    },
    {
        title: "Wedding Websites",
        desc: "Beautiful, responsive wedding websites that showcase your story, events, and memories.",
        img: "/temp-images/home/service-event.jpg",
    },
    {
        title: "Custom Design Solutions",
        desc: "Tailor-made designs that perfectly match your wedding theme, culture, and personal preferences.",
        img: "/temp-images/home/service-site.webp",
    },
];

const ServicesDetailedSection = () => {
    return (
        <section className="w-full bg-secondary/30 py-24">

            <div className="max-w-7xl mx-auto px-6">

                {/* Heading */}
                <div className="text-center max-w-2xl mx-auto mb-20">
                    <p className="text-sm tracking-[4px] text-primary uppercase mb-4">
                        What We Offer
                    </p>

                    <h2 className="text-3xl md:text-5xl font-semibold text-foreground mb-6">
                        Crafted Services for Your Special Day
                    </h2>

                    <p className="text-foreground/70 text-base md:text-lg">
                        We provide a complete range of wedding design services
                        tailored to make your celebration elegant and memorable.
                    </p>
                </div>

                {/* Grid */}
                <div className="grid sm:grid-cols-2 gap-10">

                    {services.map((service, index) => (
                        <div
                            key={index}
                            className="group rounded-2xl overflow-hidden border border-primary/50 hover:border-primary/80 transition duration-300"
                        >

                            {/* Image */}
                            <div className="relative h-[260px] overflow-hidden">
                                <Image
                                    src={service.img}
                                    alt={service.title}
                                    fill
                                    className="object-cover group-hover:scale-105 transition duration-500"
                                />
                            </div>

                            {/* Content */}
                            <div className="p-6">

                                <h3 className="text-xl font-semibold text-foreground mb-3">
                                    {service.title}
                                </h3>

                                <p className="text-foreground/70 text-sm leading-relaxed">
                                    {service.desc}
                                </p>

                            </div>

                        </div>
                    ))}

                </div>

            </div>

        </section>
    );
};

export default ServicesDetailedSection;