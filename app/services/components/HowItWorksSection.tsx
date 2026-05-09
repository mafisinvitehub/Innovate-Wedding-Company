const steps = [
    {
        title: "Consultation",
        desc: "We start by understanding your requirements, ideas, and goals — whether it’s an event, shoot, or digital project.",
    },
    {
        title: "Planning & Concept",
        desc: "Our team creates a clear plan and develops creative concepts tailored to your vision, style, and brand.",
    },
    {
        title: "Execution",
        desc: "From production to coordination, we handle everything with precision, ensuring a smooth and stress-free experience.",
    },
    {
        title: "Delivery & Support",
        desc: "We deliver the final outcome with quality and care, while also providing support to ensure everything runs perfectly.",
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
                        A Seamless Process from Idea to Execution
                    </h2>

                    <p className="text-foreground/70 text-base md:text-lg">
                        Our approach is simple, transparent, and designed to deliver modern, creative, and high-quality results across every project.
                    </p>
                </div>

                {/* Steps */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-10">

                    {steps.map((step, index) => (
                        <div key={index} className="text-center">

                            {/* Number */}
                            <div className="w-15 h-15 mx-auto mb-4 flex items-center justify-center rounded-full bg-primary text-background font-semibold">
                                Step {index + 1}
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