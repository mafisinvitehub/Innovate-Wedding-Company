'use client';

import React from "react";

const faqs = [
    {
        q: "What services do you offer?",
        a: "We provide end-to-end solutions including event management, wedding planning, corporate events, photography, videography, drone shoots, digital marketing, website development, catering, and bridal services.",
    },
    {
        q: "Do you handle both weddings and corporate events?",
        a: "Yes, we specialize in both luxury weddings and professional corporate events, along with private celebrations and custom experiences.",
    },
    {
        q: "Can I customize the services based on my requirement?",
        a: "Absolutely. All our services are flexible and tailored to match your specific needs, style, and budget.",
    },
    {
        q: "Do you provide photography and videography services?",
        a: "Yes, we offer cinematic photography, videography, drone coverage, reels creation, and complete visual production services.",
    },
    {
        q: "Do you offer digital marketing and website development?",
        a: "Yes, we provide social media marketing, content creation, reels editing, and custom website or web app development to build your digital presence.",
    },
    {
        q: "Do you provide catering and bridal services?",
        a: "Yes, we offer multi-cuisine catering (veg and non-veg), along with bridal makeup, styling, and rental accessories.",
    },
    {
        q: "How early should I book your services?",
        a: "We recommend booking as early as possible to ensure availability, especially for weddings and large-scale events.",
    },
    {
        q: "Do you provide support after the project is completed?",
        a: "Yes, we ensure proper delivery and offer support wherever required to make sure everything runs smoothly.",
    },
];

const FAQSection = () => {
    const [openIndex, setOpenIndex] = React.useState<number | null>(null);
    return (
        <section className="w-full bg-background py-24">

            <div className="max-w-4xl mx-auto px-6">

                {/* Heading */}
                <div className="text-center mb-16">
                    <p className="text-sm tracking-[4px] text-primary uppercase mb-4">
                        FAQ
                    </p>

                    <h2 className="text-3xl md:text-5xl font-semibold text-foreground mb-6">
                        Frequently Asked Questions
                    </h2>

                    <p className="text-foreground/70 text-base md:text-lg">
                        Here are answers to some common questions about our services, process, and how we work.
                    </p>
                </div>

                {/* Accordion */}
                <div className="space-y-4">

                    {faqs.map((faq, index) => {
                        const isOpen = openIndex === index;

                        return (
                            <div
                                key={index}
                                className="border border-primary/70 rounded-xl p-5"
                            >
                                <div
                                    onClick={() =>
                                        setOpenIndex(isOpen ? null : index)
                                    }
                                    className="flex justify-between items-center cursor-pointer"
                                >
                                    <span className="text-foreground font-medium">
                                        {faq.q}
                                    </span>

                                    <span
                                        className={`text-primary text-2xl transition ${isOpen ? "rotate-45" : ""
                                            }`}
                                    >
                                        +
                                    </span>
                                </div>

                                {isOpen && (
                                    <div
                                        className={`overflow-hidden transition-all duration-300 ${isOpen ? "max-h-40 mt-4" : "max-h-0"
                                            }`}
                                    >
                                        <p className="text-foreground/70 text-sm leading-relaxed">
                                            {faq.a}
                                        </p>
                                    </div>
                                )}
                            </div>
                        );
                    })}

                </div>

            </div>

        </section>
    );
};

export default FAQSection;