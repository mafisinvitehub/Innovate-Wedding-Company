import PrimaryButton from "@/app/components/PrimaryButton";
import React from "react";

const WorkCTASection = () => {
    return (
        <section className="w-full py-20 bg-background">

            <div className="max-w-3xl mx-auto px-6 text-center">

                <p className="text-foreground/70 text-base md:text-lg mb-6">
                    Inspired by our work? Let’s create something modern, fun, and truly unforgettable — tailored just for you.
                </p>

                <PrimaryButton
                    label="Start Your Project"
                    href="/contact"
                    className="border-primary text-primary"
                    textClassName="group-hover:text-background"
                    bgClassName="bg-primary"
                />

                {/* Small SEO + trust line */}
                <p className="text-foreground/50 text-sm mt-4">
                    Weddings • Corporate Events • Photography • Digital Creations
                </p>

            </div>

        </section>
    );
};

export default WorkCTASection;