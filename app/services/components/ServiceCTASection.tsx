import PrimaryButton from "@/app/components/PrimaryButton";

const ServiceCTASection = () => {
    return (
        <section className="w-full bg-secondary/30 py-20">

            <div className="max-w-3xl mx-auto px-6 text-center">

                {/* Text */}
                <h2 className="text-2xl md:text-4xl font-semibold text-foreground mb-6">
                    Ready to Bring Your Ideas to Life?
                </h2>

                <p className="text-foreground/70 text-base md:text-lg mb-8">
                    Whether it’s a wedding, corporate event, creative shoot, or digital project — let’s create something modern, fun, and truly unforgettable together.
                </p>

                <PrimaryButton
                    label="Get in Touch"
                    href="/contact"
                    className="border-primary text-primary"
                    textClassName="group-hover:text-background"
                    bgClassName="bg-primary"
                />

            </div>

        </section>
    );
};

export default ServiceCTASection;