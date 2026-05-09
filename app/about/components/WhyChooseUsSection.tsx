const features = [
    {
        title: "End-to-End Solutions",
        desc: "From planning and execution to visuals and digital, we handle everything under one roof for a seamless experience.",
    },
    {
        title: "Modern & Creative Approach",
        desc: "We blend creativity with current trends to deliver experiences that feel fresh, engaging, and premium.",
    },
    {
        title: "Professional Execution",
        desc: "Our team ensures every project is handled with precision, proper planning, and attention to detail.",
    },
    {
        title: "Client-Focused Experience",
        desc: "We work closely with you at every step to understand your vision and deliver exactly what you need.",
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
                        More Than a Service, <br />
                        A Complete Experience
                    </h2>

                    <p className="text-foreground/70 text-base md:text-lg leading-relaxed">
                        We are not just a service provider — we are a complete creative and execution partner. With a focus on quality, innovation, and reliability, we deliver experiences that are smooth, impactful, and tailored to every client.
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
                                ✦
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