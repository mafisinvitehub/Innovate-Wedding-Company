import React from "react";

const features = [
    {
        title: "Premium Design Quality",
        desc: "Every invitation is crafted with attention to detail and elegance.",
    },
    {
        title: "Fully Customizable",
        desc: "We tailor every design to match your wedding theme and vision.",
    },
    {
        title: "Quick Delivery",
        desc: "Fast turnaround without compromising on quality.",
    },
    {
        title: "Dedicated Support",
        desc: "We guide you through every step for a smooth experience.",
    },
];

const WhyChooseUsSection = () => {
    return (
        <section className="w-full bg-secondary/30 py-24">

            <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">

                {/* LEFT CONTENT */}
                <div>

                    <p className="text-sm tracking-[4px] text-primary uppercase mb-6">
                        Why Choose Us
                    </p>

                    <h2 className="text-3xl md:text-5xl font-semibold text-foreground leading-tight mb-6">
                        Designed with Passion, <br />
                        Delivered with Perfection
                    </h2>

                    <p className="text-foreground/70 text-base md:text-lg leading-relaxed">
                        We combine creativity, cultural understanding, and modern
                        design to deliver wedding invitations that truly stand
                        out. Our focus is not just on design, but on creating a
                        seamless and memorable experience for you.
                    </p>

                </div>

                {/* RIGHT FEATURES */}
                <div className="space-y-6">

                    {features.map((item, index) => (
                        <div
                            key={index}
                            className="flex items-start gap-4 p-5 rounded-xl bg-background border border-primary/10 hover:border-primary/30 transition duration-300"
                        >

                            {/* Icon */}
                            <div className="w-10 h-10 flex items-center justify-center rounded-full bg-primary/10 text-primary text-lg">
                                ✓
                            </div>

                            <div>
                                <h3 className="text-lg font-semibold text-foreground mb-1">
                                    {item.title}
                                </h3>
                                <p className="text-sm text-foreground/70">
                                    {item.desc}
                                </p>
                            </div>

                        </div>
                    ))}

                </div>

            </div>

        </section>
    );
};

export default WhyChooseUsSection;