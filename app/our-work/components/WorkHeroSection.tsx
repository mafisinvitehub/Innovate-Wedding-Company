const WorkHeroSection = () => {
    return (
        <section className="relative w-full bg-background py-24 overflow-hidden">

            <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">

                {/* Tag */}
                <p className="text-sm tracking-[4px] text-primary uppercase mb-6">
                    Our Work
                </p>

                {/* Heading */}
                <h1 className="text-3xl md:text-5xl font-semibold tracking-tight text-foreground leading-tight mb-6">
                    Experiences We’ve Crafted <br />
                    With Style & Precision
                </h1>

                {/* Description */}
                <p className="text-foreground/70 text-base md:text-lg max-w-2xl mx-auto">
                    Explore our portfolio of weddings, corporate events, photography, and creative productions — designed with a modern approach and executed with a touch of luxury. Every project reflects our commitment to quality, creativity, and unforgettable experiences.
                </p>

                {/* Divider */}
                <div className="mt-8 w-16 h-[2px] bg-primary mx-auto" />

            </div>

        </section>
    );
};

export default WorkHeroSection;