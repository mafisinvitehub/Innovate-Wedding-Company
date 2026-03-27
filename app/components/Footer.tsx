import Link from "next/link"

const Footer = () => {
    return (
        <footer className="bg-foreground text-secondary pt-24 pb-10 px-6">

            <div className="max-w-6xl mx-auto">

                {/* TOP GRID */}

                <div className="grid grid-cols-1 md:grid-cols-4 gap-14">

                    {/* BRAND */}

                    <div>
                        <h3 className="text-xl text-background mb-4 tracking-wide">
                            Innovate Wedding Company
                        </h3>

                        <p className="text-sm leading-relaxed text-secondary/80">
                            Crafting timeless wedding memories through photography,
                            cinematic films, and seamless event experiences.
                        </p>
                    </div>

                    {/* QUICK LINKS */}

                    <div>
                        <h4 className="text-background mb-4 text-xs tracking-[0.25em] uppercase">
                            Quick Links
                        </h4>

                        <ul className="space-y-3 text-sm">
                            {["Home", "About", "Services", "Our Work", "Contact"].map((item, i) => (
                                <li key={i}>
                                    <Link
                                        href={
                                            item === "Home"
                                                ? "/"
                                                : `/${item.toLowerCase().replace(" ", "-")}`
                                        }
                                        className="group relative inline-block"
                                    >
                                        <span className="transition duration-300 group-hover:text-primary">
                                            {item}
                                        </span>

                                        {/* underline animation */}

                                        <span className="absolute left-0 -bottom-1 w-full h-[1px] bg-primary scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300"></span>
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* SERVICES */}

                    <div>
                        <h4 className="text-background mb-4 text-xs tracking-[0.25em] uppercase">
                            Services
                        </h4>

                        <ul className="space-y-3 text-sm">
                            {[
                                "Wedding Photography",
                                "Cinematic Videography",
                                "Wedding Planning",
                                "Digital Wedding Solutions",
                            ].map((service, i) => (
                                <li
                                    key={i}
                                    className="text-secondary/80 hover:text-primary transition"
                                >
                                    {service}
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* CONTACT */}

                    <div>
                        <h4 className="text-background mb-4 text-xs tracking-[0.25em] uppercase">
                            Contact
                        </h4>

                        <ul className="space-y-3 text-sm text-secondary/80">
                            <li>📍 Tamil Nadu, India</li>
                            <li>📞 +91 98765 43210</li>
                            <li>✉️ hello@mafisstudio.com</li>
                        </ul>

                        {/* SOCIAL */}

                        <div className="flex gap-5 mt-6 text-sm">
                            {["Instagram", "YouTube", "Facebook"].map((social, i) => (
                                <a
                                    key={i}
                                    href="#"
                                    className="relative group"
                                >
                                    <span className="transition duration-300 group-hover:text-primary">
                                        {social}
                                    </span>

                                    <span className="absolute left-0 -bottom-1 w-full h-[1px] bg-primary scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300"></span>
                                </a>
                            ))}
                        </div>
                    </div>

                </div>

                {/* DIVIDER */}

                <div className="mt-16 pt-6 text-center">

                    <div className="w-16 h-[1px] bg-primary/50 mx-auto mb-4"></div>

                    <p className="text-xs text-secondary/60 tracking-wide">
                        © {new Date().getFullYear()} Innovate Wedding Company. All rights reserved.
                    </p>

                </div>

            </div>

        </footer>
    )
}

export default Footer