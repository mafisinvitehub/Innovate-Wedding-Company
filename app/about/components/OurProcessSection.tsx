const steps = [
    {
        title: "Consultation & Planning",
        desc: "We understand your requirements, vision, and goals — whether it’s an event, shoot, or digital project — and plan everything strategically.",
    },
    {
        title: "Concept & Creative Direction",
        desc: "Our team develops ideas, designs, and concepts that align with your style while ensuring a modern and premium approach.",
    },
    {
        title: "Execution & Production",
        desc: "From event setup and coordination to photography, videography, and digital work, we execute everything with precision.",
    },
    {
        title: "Delivery & Support",
        desc: "We deliver the final output with quality assurance and provide support to ensure everything runs smoothly.",
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
                        From Idea to Execution, Seamlessly Managed
                    </h2>

                    <p className="text-foreground/70 text-base md:text-lg max-w-2xl mx-auto">
                        Our workflow is designed to ensure clarity, creativity, and smooth execution at every stage — delivering a stress-free and premium experience.
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
                                <div className="absolute left-0 top-1 w-8 h-8 rounded-full bg-primary/90 text-background flex items-center justify-center text-sm font-semibold shadow-md">
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