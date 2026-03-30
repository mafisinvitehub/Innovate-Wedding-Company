import Image from "next/image";
import React from "react";

const AboutHeroSection = () => {
    return (
        <section className="relative w-full min-h-[85vh] flex items-center bg-background overflow-hidden">

            {/* Background Layer */}
            {/* <div className="absolute inset-0">
                <div className="absolute inset-0 bg-gradient-to-r from-background via-secondary/40 to-background" />
            </div> */}

            {/* Container */}
            <div className="relative z-10 max-w-7xl mx-auto px-6 py-20 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

                {/* LEFT CONTENT */}
                <div>

                    <p className="text-sm tracking-[4px] text-primary uppercase mb-6">
                        About Us
                    </p>

                    <h1 className="text-4xl md:text-6xl font-semibold text-foreground leading-tight mb-6">
                        We Design Experiences <br />
                        That Define Brands
                    </h1>

                    <p className="text-foreground/70 text-base md:text-lg leading-relaxed max-w-xl">
                        Our team crafts elegant digital products with a strong
                        focus on aesthetics, performance, and user experience.
                        Every detail is carefully designed to reflect a premium
                        identity and create lasting impressions.
                    </p>

                    {/* Divider */}
                    <div className="mt-8 w-16 h-[2px] bg-primary" />

                </div>

                {/* RIGHT VISUAL */}
                <div className="relative h-[400px] md:h-[500px] rounded-2xl overflow-hidden shadow-xl">

                    <Image
                        src="/temp-images/about/about-hero-image.avif"
                        alt="Premium workspace"
                        fill
                        className="object-cover"
                        priority
                    />

                    {/* Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />

                    {/* Bottom Text */}
                    <div className="absolute bottom-6 left-6 right-6">
                        <p className="text-white text-sm">
                            Crafting premium digital experiences.
                        </p>
                    </div>

                </div>

            </div>

            {/* Decorative Blur */}
            {/* <div className="absolute top-[-80px] right-[-80px] w-[250px] h-[250px] bg-primary/20 rounded-full blur-3xl" />
            <div className="absolute bottom-[-80px] left-[-80px] w-[250px] h-[250px] bg-secondary/30 rounded-full blur-3xl" /> */}

        </section>
    );
};

export default AboutHeroSection;