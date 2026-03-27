import PrimaryButton from "../components/PrimaryButton"

const AboutSection = () => {
    return (
        <section className="bg-primary py-24 px-6">

            <div className="max-w-5xl mx-auto text-center">

                {/* Heading */}

                <h2 className="text-2xl md:text-3xl lg:text-4xl text-gray-800 uppercase tracking-[0.2em] inline-block border-b border-background pb-6 leading-relaxed">
                    Turning Wedding Moments into Timeless Memories
                </h2>

                {/* Content */}

                <p className="mt-10 text-base md:text-lg text-foreground leading-relaxed max-w-2xl mx-auto">
                    Every wedding is a once-in-a-lifetime story filled with love,
                    emotion, and unforgettable moments. We bring those moments
                    to life through creative photography, cinematic videography,
                    and thoughtful wedding management.

                    <br /><br />

                    From capturing every smile to planning every detail,
                    our team is dedicated to making your celebration
                    truly extraordinary.
                </p>

                {/* Button */}

                <div className="mt-12 flex justify-center">
                    <PrimaryButton
                        label="Discover Our Story"
                        className="border-background text-background"
                        textClassName="group-hover:text-primary"
                        bgClassName="bg-background"
                        href="/about"
                    />
                </div>

            </div>

        </section>
    )
}

export default AboutSection