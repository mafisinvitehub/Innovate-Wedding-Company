import PrimaryButton from "../components/PrimaryButton"

const AboutSection = () => {
    return (
        <section className="bg-secondary/30 py-24 px-6">

            <div className="max-w-5xl mx-auto text-center">

                <h2 className="text-2xl md:text-3xl lg:text-4xl text-foreground uppercase tracking-[0.2em] inline-block border-b border-primary pb-6 leading-relaxed">
                    Creating Experiences That Go Beyond Expectations
                </h2>

                <p className="mt-10 text-base md:text-lg text-foreground/70 leading-relaxed max-w-2xl mx-auto">
                    We are a full-service creative company specializing in events, photography, videography, digital solutions, and more — all designed to deliver a seamless and premium experience.

                    <br /><br />

                    From weddings and corporate events to content creation and web development, we combine creativity, strategy, and execution to bring your ideas to life with precision and style.
                </p>

                <div className="mt-12 flex justify-center">
                    <PrimaryButton
                        label="Know More About Us"
                        className="border-foreground text-foreground"
                        textClassName="group-hover:text-background"
                        bgClassName="bg-primary/70"
                        href="/about"
                    />
                </div>

            </div>

        </section>
    )
}

export default AboutSection