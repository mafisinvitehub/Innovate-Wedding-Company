import PrimaryButton from "../components/PrimaryButton"

const CTASection = () => {
    return (
        <section className="bg-secondary/30 py-24 px-6">

            <div className="max-w-3xl mx-auto text-center">

                {/* Heading */}

                <h2 className="text-2xl md:text-3xl lg:text-4xl text-foreground leading-snug">
                    Crafting Moments That Last Forever
                </h2>

                {/* Subtext */}

                <p className="mt-6 text-foreground/70 text-base md:text-lg leading-relaxed">
                    Let’s bring your vision to life with timeless photography,
                    cinematic films, and seamless wedding experiences.
                </p>

                {/* Button */}

                <div className="mt-10 flex justify-center">
                    <PrimaryButton
                        label="Start Your Journey with Us"
                        href="/contact"
                        className="border-foreground text-foreground"
                        textClassName="group-hover:text-background"
                        bgClassName="bg-primary/70"
                    />
                </div>

            </div>

        </section>
    )
}

export default CTASection