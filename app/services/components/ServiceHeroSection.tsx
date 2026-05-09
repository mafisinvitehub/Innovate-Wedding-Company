import Image from "next/image";

const ServiceHeroSection = () => {
    return (
        <section className="w-full min-h-[85vh] flex items-center bg-background">

            <div className="max-w-7xl mx-auto px-6 py-20 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

                {/* LEFT CONTENT */}
                <div>

                    <p className="text-sm tracking-[4px] text-primary uppercase mb-6">
                        Our Services
                    </p>

                    <h1 className="text-4xl md:text-6xl font-semibold text-foreground leading-tight mb-6">
                        Complete Solutions <br />
                        For Every Experience
                    </h1>

                    <p className="text-foreground/70 text-base md:text-lg leading-relaxed max-w-xl">
                        From luxury weddings and corporate events to photography, digital marketing, and web development — we offer end-to-end solutions designed to deliver modern, creative, and seamless experiences.
                    </p>

                    {/* Divider */}
                    <div className="mt-8 w-16 h-[2px] bg-primary" />

                </div>

                {/* RIGHT VISUAL */}
                <div className="relative h-[400px] md:h-[500px] rounded-2xl overflow-hidden shadow-xl group">

                    <Image
                        src="/temp-images/services/services-hero-image.png"
                        alt="Event management, wedding planning, photography and digital services"
                        fill
                        className="object-cover transition duration-700 ease-out group-hover:scale-105"
                        priority
                    />

                    {/* Overlay */}
                    {/* <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent transition duration-500 group-hover:from-black/60" /> */}

                    {/* Bottom Text */}
                    <div className="absolute bottom-6 left-6 right-6 transform transition duration-500 group-hover:-translate-y-2">
                        <p className="text-white text-sm">
                            Modern. Creative. Complete solutions under one roof.
                        </p>
                    </div>

                </div>

            </div>

        </section>
    );
};

export default ServiceHeroSection;