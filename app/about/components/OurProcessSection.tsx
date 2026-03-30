import React from "react";

const steps = [
    {
        title: "Consultation",
        desc: "We understand your requirements, style, and wedding theme.",
    },
    {
        title: "Design & Creation",
        desc: "Our team crafts elegant and personalized invitation designs.",
    },
    {
        title: "Review & Revisions",
        desc: "You review the design and we refine it to perfection.",
    },
    {
        title: "Final Delivery",
        desc: "We deliver your final invitation ready to share and celebrate.",
    },
];

const OurProcessSection = () => {
    return (
        <section className="w-full bg-background py-24">

            <div className="max-w-5xl mx-auto px-6">

                {/* Heading */}
                <div className="text-center mb-16">
                    <p className="text-sm tracking-[4px] text-primary uppercase mb-4">
                        Our Process
                    </p>

                    <h2 className="text-3xl md:text-5xl font-semibold text-foreground mb-6">
                        Simple, Seamless, and Thoughtfully Crafted
                    </h2>

                    <p className="text-foreground/70 text-base md:text-lg max-w-2xl mx-auto">
                        Our process is designed to make your experience smooth,
                        transparent, and enjoyable from start to finish.
                    </p>
                </div>

                {/* Timeline */}
                <div className="relative">

                    {/* Vertical Line */}
                    <div className="absolute left-4 top-0 bottom-0 w-[2px] bg-primary/20" />

                    <div className="space-y-12">

                        {steps.map((step, index) => (
                            <div key={index} className="relative pl-12">

                                {/* Dot */}
                                <div className="absolute left-0 top-1 w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center text-sm font-semibold">
                                    {index + 1}
                                </div>

                                {/* Content */}
                                <h3 className="text-xl font-semibold text-foreground mb-2">
                                    {step.title}
                                </h3>

                                <p className="text-foreground/70 text-sm md:text-base">
                                    {step.desc}
                                </p>

                            </div>
                        ))}

                    </div>

                </div>

            </div>

        </section>
    );
};

export default OurProcessSection;