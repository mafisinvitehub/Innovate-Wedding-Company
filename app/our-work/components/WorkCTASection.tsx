import PrimaryButton from "@/app/components/PrimaryButton";
import React from "react";

const WorkCTASection = () => {
    return (
        <section className="w-full py-20 bg-background">

            <div className="max-w-3xl mx-auto px-6 text-center">

                <p className="text-foreground/70 text-base md:text-lg mb-6">
                    Like what you see? Let’s create something beautiful for your special day.
                </p>

                <PrimaryButton
                    label="Start Your Project"
                    href="/contact"
                    className="border-primary text-primary"
                    textClassName="group-hover:text-background"
                    bgClassName="bg-primary"
                />

            </div>

        </section>
    );
};

export default WorkCTASection;