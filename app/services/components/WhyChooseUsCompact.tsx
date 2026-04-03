import React from "react";

const features = [
    "Premium & Elegant Designs",
    "Fully Customizable Solutions",
    "Fast Turnaround Time",
    "Dedicated Client Support",
    "Modern & Mobile-Friendly Designs",
    "Attention to Every Detail",
];

const WhyChooseUsCompact = () => {
    return (
        <section className="w-full bg-secondary/30 py-24">

            <div className="max-w-6xl mx-auto px-6">

                {/* Heading */}
                <div className="text-center max-w-2xl mx-auto mb-16">
                    <p className="text-sm tracking-[4px] text-primary uppercase mb-4">
                        Why Choose Us
                    </p>

                    <h2 className="text-3xl md:text-5xl font-semibold text-foreground mb-6">
                        Designed for Excellence
                    </h2>

                    <p className="text-foreground/70 text-base md:text-lg">
                        We focus on delivering quality, elegance, and a seamless
                        experience for every couple we work with.
                    </p>
                </div>

                {/* Features Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">

                    {features.map((item, index) => (
                        <div
                            key={index}
                            className="flex items-center gap-3"
                        >

                            {/* Dot */}
                            <div className="w-2 h-2 rounded-full bg-primary" />

                            <p className="text-foreground/80 text-sm md:text-base">
                                {item}
                            </p>

                        </div>
                    ))}

                </div>

            </div>

        </section>
    );
};

export default WhyChooseUsCompact;