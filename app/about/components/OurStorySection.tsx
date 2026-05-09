'use client';

import Image from "next/image";

const OurStorySection = () => {
    return (
        <section className="w-full bg-secondary/30 py-24">

            <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                {/* LEFT IMAGE */}
                <div className="relative h-[400px] md:h-[500px] rounded-2xl overflow-hidden shadow-lg">

                    <Image
                        src="/temp-images/about/our-story-image.png"
                        alt="South Indian Wedding Moment"
                        fill
                        className="object-cover"
                    />

                </div>

                {/* RIGHT CONTENT */}
                <div>

                    <p className="text-sm tracking-[4px] text-primary uppercase mb-6">
                        Our Story
                    </p>

                    <h2 className="text-3xl md:text-5xl font-semibold text-foreground leading-tight mb-6">
                        From a Small Beginning <br />
                        to a Complete Creative Brand
                    </h2>

                    <p className="text-foreground/70 text-base md:text-lg leading-relaxed mb-6">
                        Our journey began as a freelance effort driven by passion and creativity. With a focus on weddings and event management, we started small — taking on projects with dedication and attention to detail, gradually building trust and experience.
                    </p>

                    <p className="text-foreground/70 text-base md:text-lg leading-relaxed">
                        As we grew, we expanded into a full-service brand, offering photography, videography, digital solutions, catering, and more. Today, we operate with a modern, corporate approach — delivering complete, seamless experiences designed to meet every need under one roof.
                    </p>

                    <p className="text-foreground/60 text-sm mt-4">
                        Started in 2023 • Expanded to a corporate-level studio in 2026
                    </p>

                    <div className="mt-8 w-16 h-[2px] bg-primary" />

                </div>

            </div>

        </section>
    );
};

export default OurStorySection;