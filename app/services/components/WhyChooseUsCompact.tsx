const features = [
    "End-to-End Event & Creative Solutions",
    "Modern, Fun & Luxury-Driven Approach",
    "Experienced Team with Professional Execution",
    "Customized Services for Every Requirement",
    "High-Quality Visuals & Creative Output",
    "Reliable Support with On-Time Delivery",
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
                        Built for Quality. Designed for Impact.
                    </h2>

                    <p className="text-foreground/70 text-base md:text-lg">
                        We combine creativity, technology, and execution to deliver seamless experiences — from events and visuals to digital solutions — all under one roof.
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
                            <span className="text-primary text-lg">✔</span>

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