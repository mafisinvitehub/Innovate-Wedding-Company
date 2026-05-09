import PrimaryButton from "../components/PrimaryButton"

const CTASection = () => {
    return (
        <section className="bg-secondary/30 py-24 px-6">

            <div className="max-w-3xl mx-auto text-center">

                {/* Heading */}

                <h2 className="text-2xl md:text-3xl lg:text-4xl text-foreground leading-snug">
                    Let’s Create Something Truly Extraordinary
                </h2>

                {/* Subtext */}

                <p className="mt-6 text-foreground/70 text-base md:text-lg leading-relaxed">
                    From weddings and events to photography, digital solutions,
                    and brand experiences — we bring your ideas to life with
                    creativity, precision, and a premium touch.
                </p>

                {/* Button */}

                <div className="mt-10 flex justify-center">
                    <PrimaryButton
                        label="Start Your Project"
                        href="/contact"
                        className="border-foreground text-foreground"
                        textClassName="group-hover:text-background"
                        bgClassName="bg-primary/70"
                    />
                </div>

                <p className="mt-4 text-xs text-foreground/50">
                    Trusted for weddings, events, and digital experiences across Tamil Nadu.
                </p>

            </div>

        </section>
    )
}

export default CTASection