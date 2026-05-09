"use client"

import { useEffect, useState } from "react"

const testimonials = [
    {
        name: "Arjun & Nisha",
        text: "From planning to execution, everything was handled perfectly. The team made our wedding completely stress-free and truly memorable.",
        location: "Chennai",
    },
    {
        name: "Rahul Enterprises",
        text: "We worked with them for our corporate event and digital promotions. The professionalism, creativity, and execution were outstanding.",
        location: "Madurai",
    },
    {
        name: "Karthik & Divya",
        text: "Photography, videography, and overall coordination — everything was top-notch. The final output exceeded our expectations.",
        location: "Coimbatore",
    },
]

const TestimonialSection = () => {

    const [index, setIndex] = useState(0)

    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prev) => (prev + 1) % testimonials.length)
        }, 5000)

        return () => clearInterval(interval)
    }, [])

    const testimonial = testimonials[index]

    return (
        <section className="bg-background py-24 px-6">

            {/* STYLE FIX */}
            <style jsx global>{`
                @keyframes fadeIn {
                    from { opacity: 0; transform: translateY(10px); }
                    to { opacity: 1; transform: translateY(0); }
                }

                .animate-fadeIn {
                    animation: fadeIn 0.6s ease forwards;
                }
            `}</style>

            <div className="max-w-3xl mx-auto text-center">

                {/* Heading */}
                <h2 className="text-2xl md:text-3xl lg:text-4xl tracking-[0.2em] text-foreground uppercase border-b border-primary inline-block pb-5">
                    What Our Clients Say
                </h2>

                <p className="text-foreground/60 text-sm mt-4">
                    Trusted by clients across events, weddings, and digital projects.
                </p>

                {/* Quote */}
                <div
                    key={index}
                    className="mt-16 transition-all duration-700 ease-out opacity-0 animate-fadeIn"
                >

                    <p className="text-lg md:text-xl text-foreground/80 leading-relaxed italic relative">
                        <span className="text-primary text-3xl absolute -left-3 -top-3">“</span>
                        {testimonial.text}
                        <span className="text-primary text-3xl">”</span>
                    </p>

                    <div className="mt-8">
                        <h4 className="text-base md:text-lg text-foreground font-medium">
                            {testimonial.name}
                        </h4>
                        <p className="text-sm text-foreground/70 mt-1">
                            {testimonial.location}
                        </p>
                    </div>

                </div>

                {/* Indicators */}
                <div className="flex justify-center gap-2 mt-10">
                    {testimonials.map((_, i) => (
                        <div
                            key={i}
                            className={`h-[2px] transition-all duration-500 ${i === index ? "w-8 bg-foreground" : "w-4 bg-foreground/70"
                                }`}
                        />
                    ))}
                </div>

            </div>

        </section>
    )
}

export default TestimonialSection