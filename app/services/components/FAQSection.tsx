import React from "react";

const faqs = [
    {
        q: "Do you offer fully customized wedding invitations?",
        a: "Yes, all our designs are fully customizable to match your wedding theme, style, and personal preferences.",
    },
    {
        q: "How long does it take to complete a design?",
        a: "Typically, it takes 3–7 days depending on the complexity and revisions required.",
    },
    {
        q: "Can I request changes after the design is created?",
        a: "Absolutely. We provide revision support to ensure the final design meets your expectations.",
    },
    {
        q: "Do you provide digital wedding invitations?",
        a: "Yes, we create modern and shareable digital invitations suitable for all platforms.",
    },
    {
        q: "Will the designs be mobile-friendly?",
        a: "Yes, all our digital designs and websites are fully optimized for mobile devices.",
    },
];

const FAQSection = () => {
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
                        Here are answers to some common questions to help you
                        better understand our services.
                    </p>
                </div>

                {/* Accordion */}
                <div className="space-y-4">

                    {faqs.map((faq, index) => (
                        <details
                            key={index}
                            className="group border border-primary/70 rounded-xl p-5"
                        >
                            <summary className="flex justify-between items-center cursor-pointer list-none">
                                <span className="text-foreground font-medium">
                                    {faq.q}
                                </span>

                                <span className="text-primary text-2xl group-open:rotate-45 transition">
                                    +
                                </span>
                            </summary>

                            <p className="mt-4 text-foreground/70 text-sm leading-relaxed">
                                {faq.a}
                            </p>
                        </details>
                    ))}

                </div>

            </div>

        </section>
    );
};

export default FAQSection;