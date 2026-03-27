import PrimaryButton from "../components/PrimaryButton"

const CTASection = () => {
    return (
        <section className="bg-primary py-24 px-6">

            <div className="max-w-3xl mx-auto text-center">

                {/* Heading */}

                <h2 className="text-2xl md:text-3xl lg:text-4xl text-gray-800 leading-snug">
                    Crafting Moments That Last Forever
                </h2>

                {/* Subtext */}

                <p className="mt-6 text-foreground text-base md:text-lg leading-relaxed">
                    Let’s bring your vision to life with timeless photography,
                    cinematic films, and seamless wedding experiences.
                </p>

                {/* Button */}

                <div className="mt-10 flex justify-center">
                    <PrimaryButton
                        label="Start Your Journey with Us"
                        href="/contact"
                        className="border-background text-background"
                        textClassName="group-hover:text-primary"
                        bgClassName="bg-background"
                    />
                </div>

            </div>

        </section>
    )
}

export default CTASection