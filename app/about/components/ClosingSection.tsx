import React from "react";

const ClosingSection = () => {
    return (
        <section className="w-full py-28 bg-secondary/30">

            <div className="max-w-4xl mx-auto px-6 text-center">

                {/* Tag */}
                <p className="text-sm tracking-[4px] text-primary uppercase mb-6">
                    Our Promise
                </p>

                {/* Heading */}
                <h2 className="text-3xl md:text-5xl font-semibold text-foreground leading-tight mb-6">
                    Turning Your Moments Into <br />
                    <span className="text-primary">Timeless Memories</span>
                </h2>

                {/* Description */}
                <p className="text-foreground/70 text-base md:text-lg leading-relaxed max-w-2xl mx-auto">
                    From the first impression to the final detail, we focus on
                    crafting invitations that not only inform but inspire. Every
                    design we create carries emotion, elegance, and a story that
                    stays with you forever.
                </p>

                {/* Elegant Divider */}
                <div className="mt-10 flex justify-center items-center gap-3">
                    <div className="w-10 h-[2px] bg-primary/40" />
                    <div className="w-2 h-2 rounded-full bg-primary" />
                    <div className="w-10 h-[2px] bg-primary/40" />
                </div>

            </div>

        </section>
    );
};

export default ClosingSection;