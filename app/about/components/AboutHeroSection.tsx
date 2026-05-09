import Image from "next/image";

const AboutHeroSection = () => {
    return (
        <section className="relative w-full min-h-[85vh] flex items-center bg-background overflow-hidden">

            {/* Background Layer */}
            {/* <div className="absolute inset-0">
                <div className="absolute inset-0 bg-gradient-to-r from-background via-secondary/40 to-background" />
            </div> */}

            {/* Container */}
            <div className="relative z-10 max-w-7xl mx-auto px-6 py-20 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

                {/* LEFT CONTENT */}
                <div>

                    <p className="text-sm tracking-[4px] text-primary uppercase mb-6">
                        About Us
                    </p>

                    <h1 className="text-4xl md:text-6xl font-semibold text-foreground leading-tight mb-6">
                        From Passion to a <br />
                        Full-Service Creative Studio
                    </h1>

                    <p className="text-foreground/70 text-base md:text-lg leading-relaxed max-w-xl">
                        What started as a freelance journey has grown into a modern, full-service studio delivering events, visual production, and digital solutions. Since expanding in 2026, we’ve been focused on creating experiences that are not just beautiful, but meaningful, seamless, and built to stand out.
                    </p>

                    <p className="text-foreground/60 text-sm mt-4">
                        Established in 2023 • Expanded as a corporate brand in 2026
                    </p>
                    {/* Divider */}
                    <div className="mt-8 w-16 h-[2px] bg-primary" />

                </div>

                {/* RIGHT VISUAL */}
                <div className="relative h-[400px] md:h-[500px] rounded-2xl overflow-hidden shadow-xl group">

                    <Image
                        src="/temp-images/about/about-hero-image.png"
                        alt="Built on passion. Driven by creativity"
                        fill
                        className="object-cover transition duration-700 ease-out group-hover:scale-105"
                        priority
                    />

                    {/* Overlay */}
                    {/* <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" /> */}

                    {/* Bottom Text */}
                    <div className="absolute bottom-6 left-6 right-6 transform transition duration-500 group-hover:-translate-y-2">
                        <p className="text-white text-sm">
                            Built on passion. Driven by creativity.
                        </p>
                    </div>

                </div>

            </div>

            {/* Decorative Blur */}
            {/* <div className="absolute top-[-80px] right-[-80px] w-[250px] h-[250px] bg-primary/20 rounded-full blur-3xl" />
            <div className="absolute bottom-[-80px] left-[-80px] w-[250px] h-[250px] bg-secondary/30 rounded-full blur-3xl" /> */}

        </section>
    );
};

export default AboutHeroSection;