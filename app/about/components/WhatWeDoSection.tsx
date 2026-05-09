const services = [
    {
        title: "Event Management",
        desc: "We plan and execute weddings, corporate events, and private celebrations with a focus on creativity, precision, and seamless coordination.",
    },
    {
        title: "Photography & Videography",
        desc: "From cinematic visuals to drone coverage, we capture moments with storytelling, creativity, and high-quality production.",
    },
    {
        title: "Digital & Web Solutions",
        desc: "We create modern digital experiences including social media content, reels, and custom websites or web applications.",
    },
    {
        title: "Catering & Bridal Services",
        desc: "Complete event support including multi-cuisine catering, bridal makeup, styling, and essential rental services.",
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
                        Complete Solutions Under One Roof
                    </h2>

                    <p className="text-foreground/70 text-base md:text-lg">
                        We bring together events, creative production, and digital solutions to deliver seamless, modern, and high-quality experiences for every client.
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