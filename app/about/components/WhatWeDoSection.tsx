import React from "react";

const services = [
    {
        title: "Wedding Invitations",
        desc: "Elegant and personalized invitations designed to reflect your special day.",
    },
    {
        title: "Digital Invites",
        desc: "Modern and shareable digital invitations crafted for convenience and style.",
    },
    {
        title: "Wedding Websites",
        desc: "Beautiful, responsive websites to showcase your wedding story and details.",
    },
    {
        title: "Custom Designs",
        desc: "Fully customized designs tailored to match your theme and preferences.",
    },
];

const WhatWeDoSection = () => {
    return (
        <section className="w-full bg-background py-24">

            <div className="max-w-7xl mx-auto px-6">

                {/* Heading */}
                <div className="text-center max-w-2xl mx-auto mb-16">
                    <p className="text-sm tracking-[4px] text-primary uppercase mb-4">
                        What We Do
                    </p>

                    <h2 className="text-3xl md:text-5xl font-semibold text-foreground mb-6">
                        Crafted for Your Perfect Wedding
                    </h2>

                    <p className="text-foreground/70 text-base md:text-lg">
                        We offer a range of design services focused on creating
                        elegant and memorable wedding experiences.
                    </p>
                </div>

                {/* Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">

                    {services.map((item, index) => (
                        <div
                            key={index}
                            className="group bg-secondary/40 rounded-2xl p-6 border border-primary/10 hover:border-primary/30 transition duration-300"
                        >

                            {/* Icon Circle */}
                            <div className="w-12 h-12 flex items-center justify-center rounded-full bg-primary/10 text-primary mb-6">
                                ✦
                            </div>

                            <h3 className="text-lg font-semibold text-foreground mb-3">
                                {item.title}
                            </h3>

                            <p className="text-sm text-foreground/70 leading-relaxed">
                                {item.desc}
                            </p>

                        </div>
                    ))}

                </div>

            </div>

        </section>
    );
};

export default WhatWeDoSection;