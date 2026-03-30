'use client';

import Image from "next/image";
import React from "react";

const OurStorySection = () => {
    return (
        <section className="w-full bg-secondary/30 py-24">

            <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                {/* LEFT IMAGE */}
                <div className="relative h-[400px] md:h-[500px] rounded-2xl overflow-hidden shadow-lg">

                    <Image
                        src="/temp-images/about/our-story-image.webp"
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
                        Every Wedding Has a Story, <br />
                        We Make It Memorable
                    </h2>

                    <p className="text-foreground/70 text-base md:text-lg leading-relaxed mb-6">
                        What started as a passion for design quickly turned into
                        a mission to create beautiful and meaningful wedding
                        invitations. We believe that every couple deserves a
                        unique way to tell their story.
                    </p>

                    <p className="text-foreground/70 text-base md:text-lg leading-relaxed">
                        From traditional to modern styles, we blend creativity
                        with elegance to craft invitations that truly reflect
                        your special day and leave a lasting impression.
                    </p>

                    {/* Small Divider */}
                    <div className="mt-8 w-16 h-[2px] bg-primary" />

                </div>

            </div>

        </section>
    );
};

export default OurStorySection;