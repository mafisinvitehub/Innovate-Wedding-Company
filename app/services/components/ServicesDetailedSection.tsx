import Image from "next/image";

const services = [
    {
        title: "Event Management & Celebrations",
        desc: "We specialize in planning and executing luxury weddings, corporate events, and private celebrations with complete precision.",
        points: [
            "Luxury Weddings & Destination Events",
            "Corporate Events & Brand Launches",
            "Birthday, Baby Shower & Private Celebrations",
            "Surprise Planning & Custom Experiences",
        ],
        img: "/temp-images/services/event-management.png",
    },
    {
        title: "Photography, Videography & Drone",
        desc: "Cinematic visuals and storytelling through photography, videography, and drone coverage.",
        points: [
            "Wedding Photography & Cinematic Videography",
            "Drone Shoots & Aerial Coverage",
            "Model, Product & Outdoor Shoots",
            "Reels Creation & Video Editing",
        ],
        img: "/temp-images/services/photography.png",
    },
    {
        title: "Digital Marketing & Web Solutions",
        desc: "We build strong digital presence through marketing, content, and web solutions.",
        points: [
            "Social Media Marketing & Strategy",
            "Reels, Ads & Content Creation",
            "Website & Web App Development",
            "UI/UX Design & Branding",
        ],
        img: "/temp-images/services/digital-marketing.png",
    },
    {
        title: "Catering & Bridal Services",
        desc: "Complete event support including catering, makeup, and rental services.",
        points: [
            "Multi-Cuisine Catering (Veg & Non-Veg)",
            "Breakfast, Lunch & Dinner Services",
            "Bridal Makeup & Styling",
            "Rental Accessories & Essentials",
        ],
        img: "/temp-images/services/catering.png",
    },
];

const ServicesDetailedSection = () => {
    return (
        <section className="w-full bg-secondary/30 py-24">

            <div className="max-w-7xl mx-auto px-6">

                {/* Heading */}
                <div className="text-center max-w-2xl mx-auto mb-20">
                    <p className="text-sm tracking-[4px] text-primary uppercase mb-4">
                        Our Expertise
                    </p>

                    <h2 className="text-3xl md:text-5xl font-semibold text-foreground mb-6">
                        End-to-End Services Designed for Every Experience
                    </h2>

                    <p className="text-foreground/70 text-base md:text-lg">
                        We offer a complete range of professional services covering events, visual production, digital solutions, and hospitality — all delivered with a modern approach and a focus on quality, creativity, and seamless execution.
                    </p>
                </div>

                {/* Grid */}
                <div className="grid sm:grid-cols-2 gap-10">

                    {services.map((service, index) => (
                        <div
                            key={index}
                            className="group rounded-2xl overflow-hidden border border-primary/50 hover:border-primary/80 transition duration-300"
                        >

                            {/* Image */}
                            <div className="relative h-[260px] overflow-hidden">
                                <Image
                                    src={service.img}
                                    alt={service.title}
                                    fill
                                    className="object-cover group-hover:scale-105 transition duration-500"
                                />
                            </div>

                            {/* Content */}
                            <div className="p-6">

                                <h3 className="text-xl font-semibold text-foreground mb-3">
                                    {service.title}
                                </h3>

                                <p className="text-foreground/70 text-sm leading-relaxed">
                                    {service.desc}
                                </p>

                                <ul className="mt-3 text-sm text-foreground/60 space-y-1">
                                    {service.points.map((point: string, i: number) => (
                                        <li className="flex items-start gap-2">
                                            <span className="text-primary">✔</span>
                                            <span>{point}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                        </div>
                    ))}

                </div>

            </div>

        </section>
    );
};

export default ServicesDetailedSection;