import React from "react";

const steps = [
    {
        title: "Consultation",
        desc: "We understand your vision, style, and wedding requirements.",
    },
    {
        title: "Design",
        desc: "Our team creates elegant concepts tailored to your theme.",
    },
    {
        title: "Refinement",
        desc: "We refine the design based on your feedback and finalize it.",
    },
    {
        title: "Delivery",
        desc: "Your final design is delivered ready to share and celebrate.",
    },
];

const HowItWorksSection = () => {
    return (
        <section className="w-full bg-background py-24">

            <div className="max-w-7xl mx-auto px-6">

                {/* Heading */}
                <div className="text-center max-w-2xl mx-auto mb-16">
                    <p className="text-sm tracking-[4px] text-primary uppercase mb-4">
                        How It Works
                    </p>

                    <h2 className="text-3xl md:text-5xl font-semibold text-foreground mb-6">
                        A Simple Process Designed for You
                    </h2>

                    <p className="text-foreground/70 text-base md:text-lg">
                        Our workflow is simple, transparent, and crafted to give
                        you a smooth experience from start to finish.
                    </p>
                </div>

                {/* Steps */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-10">

                    {steps.map((step, index) => (
                        <div key={index} className="text-center">

                            {/* Number */}
                            <div className="w-12 h-12 mx-auto mb-4 flex items-center justify-center rounded-full bg-primary text-background font-semibold">
                                {index + 1}
                            </div>

                            <h3 className="text-lg font-semibold text-foreground mb-2">
                                {step.title}
                            </h3>

                            <p className="text-sm text-foreground/70 leading-relaxed">
                                {step.desc}
                            </p>

                        </div>
                    ))}

                </div>

            </div>

        </section>
    );
};

export default HowItWorksSection;