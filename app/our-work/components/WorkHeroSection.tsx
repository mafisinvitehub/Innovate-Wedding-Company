import React from "react";

const WorkHeroSection = () => {
    return (
        <section className="relative w-full bg-background py-24 overflow-hidden">

            {/* Content */}
            <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">

                {/* Tag */}
                <p className="text-sm tracking-[4px] text-primary uppercase mb-6">
                    Our Work
                </p>

                {/* Heading */}
                <h1 className="text-3xl md:text-5xl font-semibold tracking-tight text-foreground leading-tight mb-6">
                    A Collection of Stories <br />
                    Crafted with Elegance
                </h1>

                {/* Description */}
                <p className="text-foreground/70 text-base md:text-lg max-w-2xl mx-auto">
                    A curated portfolio of our work, showcasing designs that
                    celebrate love, culture, and timeless moments.
                </p>

                {/* Divider */}
                <div className="mt-8 w-16 h-[2px] bg-primary mx-auto" />

            </div>

        </section>
    );
};

export default WorkHeroSection;