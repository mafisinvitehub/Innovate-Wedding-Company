import PrimaryButton from "@/app/components/PrimaryButton";

const ServiceCTASection = () => {
    return (
        <section className="w-full bg-secondary/30 py-20">

            <div className="max-w-3xl mx-auto px-6 text-center">

                {/* Text */}
                <h2 className="text-2xl md:text-4xl font-semibold text-foreground mb-6">
                    Ready to Create Your Perfect Invitation?
                </h2>

                <p className="text-foreground/70 text-base md:text-lg mb-8">
                    Let’s bring your wedding ideas to life with designs that
                    truly reflect your story and style.
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