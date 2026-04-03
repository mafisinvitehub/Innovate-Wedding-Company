import Image from "next/image";
import React from "react";

const ServiceHeroSection = () => {
    return (
        <section className="w-full min-h-[85vh] flex items-center bg-background">

            <div className="max-w-7xl mx-auto px-6 py-20 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

                {/* LEFT CONTENT */}
                <div>

                    <p className="text-sm tracking-[4px] text-primary uppercase mb-6">
                        Our Services
                    </p>

                    <h1 className="text-4xl md:text-6xl font-semibold text-foreground leading-tight mb-6">
                        Everything You Need <br />
                        for a Perfect Wedding
                    </h1>

                    <p className="text-foreground/70 text-base md:text-lg leading-relaxed max-w-xl">
                        From beautifully crafted invitations to modern digital
                        experiences, we provide end-to-end solutions designed to
                        make your wedding unforgettable and stress-free.
                    </p>

                    {/* Divider */}
                    <div className="mt-8 w-16 h-[2px] bg-primary" />

                </div>

                {/* RIGHT VISUAL */}
                <div className="relative h-[400px] md:h-[500px] rounded-2xl overflow-hidden shadow-xl">

                    <Image
                        src="/temp-images/services/services-hero-image.jpg"
                        alt="Wedding services"
                        fill
                        className="object-cover"
                        priority
                    />

                    {/* Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />

                    {/* Bottom Text */}
                    <div className="absolute bottom-6 left-6 right-6">
                        <p className="text-white text-sm">
                            Designed to make your special day effortless.
                        </p>
                    </div>

                </div>

            </div>

        </section>
    );
};

export default ServiceHeroSection;