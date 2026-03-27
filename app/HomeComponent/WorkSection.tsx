import Link from "next/link"
import Image from "next/image"
import PrimaryButton from "../components/PrimaryButton"

const works = [
    {
        slug: "arjun-nisha-wedding",
        title: "Arjun & Nisha",
        location: "Chennai",
        img: "/temp-images/home/10.webp",
    },
    {
        slug: "rahul-meera-wedding",
        title: "Rahul & Meera",
        location: "Madurai",
        img: "/temp-images/home/9.jpg",
    },
    {
        slug: "karthik-divya-wedding",
        title: "Karthik & Divya",
        location: "Coimbatore",
        img: "/temp-images/home/8.jpg",
    },
    {
        slug: "vikram-ananya-wedding",
        title: "Vikram & Ananya",
        location: "Bangalore",
        img: "/temp-images/home/7.jpg",
    },
    {
        slug: "sanjay-pooja-wedding",
        title: "Sanjay & Pooja",
        location: "Kochi",
        img: "/temp-images/home/6.jpg",
    },
    {
        slug: "arun-swetha-wedding",
        title: "Arun & Swetha",
        location: "Dindugal",
        img: "/temp-images/home/5.jpg",
    },
    {
        slug: "ramesh-divya-wedding",
        title: "Ramesh & Divya",
        location: "Thiruvanathapuram",
        img: "/temp-images/home/4.jpg",
    },
    {
        slug: "santhru-aghalya-wedding",
        title: "Santhru & Aghalya",
        location: "Nagercoil",
        img: "/temp-images/home/3.jpg",
    },
    {
        slug: "suresh-mandhana-wedding",
        title: "Suresh & Mandhana",
        location: "Tirunelveli",
        img: "/temp-images/home/2.webp",
    },
]

const WorkSection = () => {
    return (
        <section className="bg-primary py-24 px-6">

            <div className="max-w-6xl mx-auto">

                {/* Heading */}

                <div className="text-center mb-20">
                    <h2 className="text-2xl md:text-3xl lg:text-4xl tracking-[0.2em] text-gray-800 uppercase inline-block border-b border-background pb-5">
                        A Glimpse of Our Work
                    </h2>

                    <p className="mt-6 text-foreground max-w-xl mx-auto">
                        A collection of beautiful moments we’ve captured, each telling a unique love story.
                    </p>
                </div>

                {/* GRID */}

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

                    {/* FEATURED (BIG) */}

                    <Link
                        href={`/our-work/${works[0].slug}`}
                        className="md:col-span-2 md:row-span-2 group relative overflow-hidden rounded-xl"
                    >

                        <Image
                            src={works[0].img}
                            alt={works[0].title}
                            width={800}
                            height={600}
                            className="w-full h-full object-cover transition duration-700 group-hover:scale-105 group-hover:brightness-90 shadow-md group-hover:shadow-xl"
                        />

                        {/* Overlay */}

                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition duration-500 delay-75"></div>

                        {/* Text */}

                        <div className="absolute bottom-6 left-6 text-white translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition duration-500 delay-75">
                            <h3 className="text-xl md:text-2xl tracking-wide">{works[0].title}</h3>
                            <p className="text-sm tracking-wide">{works[0].location}</p>
                            <p className="text-xs mt-1 opacity-80">View Project →</p>
                        </div>

                    </Link>

                    {/* OTHER WORKS */}

                    {works.slice(1).map((work, index) => (
                        <Link
                            key={index}
                            href={`/our-work/${work.slug}`}
                            className="group relative overflow-hidden rounded-xl"
                        >

                            <Image
                                src={work.img}
                                alt={work.title}
                                width={400}
                                height={300}
                                className="w-full h-full object-cover transition duration-700 group-hover:scale-105 group-hover:brightness-90 shadow-md group-hover:shadow-xl"
                            />

                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition duration-500 delay-75"></div>

                            <div className="absolute bottom-4 left-4 text-white translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition duration-500 delay-75">
                                <h3 className="text-sm md:text-base tracking-wide">{work.title}</h3>
                                <p className="text-xs tracking-wide">{work.location}</p>
                                <p className="text-xs mt-1 opacity-80">View Project →</p>
                            </div>

                        </Link>
                    ))}

                </div>

                {/* BUTTON */}

                <div className="mt-20 flex justify-center">
                    <PrimaryButton
                        label="View All Works"
                        href="/our-work"
                        className="border-background text-background"
                        textClassName="group-hover:text-primary"
                        bgClassName="bg-background"
                    />
                </div>

            </div>

        </section>
    )
}

export default WorkSection