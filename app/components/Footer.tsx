import Link from "next/link"
import { FaInstagram, FaYoutube, FaFacebook, FaEnvelope } from "react-icons/fa"
import { FaLocationCrosshairs, FaPhone } from "react-icons/fa6"

const Footer = () => {
    return (
        <footer className="bg-foreground text-secondary pt-16 md:pt-24 pb-10 px-6">

            <div className="max-w-6xl mx-auto">

                {/* TOP GRID */}

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 md:gap-14">

                    {/* BRAND */}

                    <div>
                        <h3 className="text-lg md:text-xl text-background mb-4 tracking-wide">
                            Innovate Wedding Company
                        </h3>

                        <p className="text-sm leading-relaxed text-secondary/80 max-w-sm">
                            A full-service creative company specializing in weddings,
                            events, photography, videography, and digital solutions.
                            We craft premium experiences that turn ideas into unforgettable moments.
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
                                "Wedding Planning & Event Management",
                                "Corporate Events & Brand Experiences",
                                "Photography & Cinematic Videography",
                                "Digital Marketing & Website Development",
                            ].map((service, i) => (
                                <li
                                    key={i}
                                    className="text-secondary/80 hover:text-primary transition break-words"
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
                            <li className="flex gap-2 items-start">
                                <FaLocationCrosshairs className="min-w-[1rem] mt-1" />
                                Innovate Wedding Company, Pattakasalianvilai Rd, Vattakarai, Maravankudieruppu, Nagercoil, Tamil Nadu 629002
                            </li>

                            <li className="flex gap-2 items-start">
                                <FaPhone className="min-w-[1rem] mt-1" />
                                <a
                                    href="tel:+919876543210"
                                    className="hover:text-primary transition"
                                >
                                    +91 98765 43210
                                </a>
                            </li>

                            <li className="flex gap-2 items-start">
                                <FaEnvelope className="min-w-[1rem] mt-1" />
                                <a
                                    href="mailto:innovate.a2z@gmail.com"
                                    className="hover:text-primary transition"
                                >
                                    innovate.a2z@gmail.com
                                </a>
                            </li>
                            <li className="flex gap-2 items-start">
                                <FaInstagram className="min-w-[1rem] mt-1" />
                                <a
                                    href="https://www.instagram.com/innovate_weddings/"
                                    className="hover:text-primary transition"
                                >
                                    innovate_weddings
                                </a>
                            </li>
                        </ul>

                        <p className="mt-4 text-xs text-secondary/60">
                            Available across Tamil Nadu for weddings, events, and digital projects.
                        </p>

                        {/* SOCIAL */}

                        {/* <div className="flex gap-4 mt-6 text-lg">
                            <a href="#" className="hover:text-primary transition">
                                <FaInstagram />
                            </a>
                            <a href="#" className="hover:text-primary transition">
                                <FaYoutube />
                            </a>
                            <a href="#" className="hover:text-primary transition">
                                <FaFacebook />
                            </a>
                        </div> */}
                    </div>

                </div>

                {/* DIVIDER */}

                <div className="mt-12 md:mt-16 pt-6 text-center">

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