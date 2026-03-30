"use client"

import { useEffect, useState } from "react"

const testimonials = [
    {
        name: "Arjun & Nisha",
        text: "Every moment was captured so beautifully. Looking at our photos feels like reliving the entire wedding again.",
        location: "Chennai",
    },
    {
        name: "Rahul & Meera",
        text: "The team made everything so effortless. From planning to execution, everything was just perfect.",
        location: "Madurai",
    },
    {
        name: "Karthik & Divya",
        text: "Our wedding film feels like a movie. The emotions, the music, everything was captured perfectly.",
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

            <div className="max-w-3xl mx-auto text-center">

                {/* Heading */}

                <h2 className="text-2xl md:text-3xl lg:text-4xl tracking-[0.2em] text-foreground uppercase border-b border-primary inline-block pb-5">
                    Words That Matter
                </h2>

                {/* Quote */}

                <div className="mt-16 transition duration-700 ease-out">

                    <p className="text-lg md:text-xl text-foreground/70 leading-relaxed italic">
                        “{testimonial.text}”
                    </p>

                    <div className="mt-8">
                        <h4 className="text-base md:text-lg text-foreground">
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
                            className={`h-[2px] transition-all duration-300 ${i === index ? "w-8 bg-foreground" : "w-4 bg-foreground/70"
                                }`}
                        />
                    ))}
                </div>

            </div>

        </section>
    )
}

export default TestimonialSection