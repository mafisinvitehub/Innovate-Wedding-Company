import React from "react";

const ClosingSection = () => {
    return (
        <section className="w-full py-24 bg-secondary/30">

            <div className="max-w-4xl mx-auto px-6 text-center">

                <p className="text-sm tracking-[4px] text-primary uppercase mb-6">
                    Our Promise
                </p>

                <h2 className="text-3xl md:text-5xl font-semibold text-foreground leading-tight mb-6">
                    Creating Experiences That <br />
                    <span className="text-primary">Truly Stand Out</span>
                </h2>

                <p className="text-foreground/70 text-base md:text-lg leading-relaxed max-w-2xl mx-auto">
                    From planning and execution to visuals and digital solutions, we focus on delivering complete experiences with quality, creativity, and attention to detail. Every project we take on is built to be seamless, impactful, and memorable.
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