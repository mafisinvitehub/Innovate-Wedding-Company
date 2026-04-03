import Link from "next/link";
import Image from "next/image";
import React from "react";

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
        location: "Dindigul",
        img: "/temp-images/home/5.jpg",
    },
    {
        slug: "ramesh-divya-wedding",
        title: "Ramesh & Divya",
        location: "Thiruvananthapuram",
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
];

const WorkGallerySection = () => {
    return (
        <section className="w-full bg-background pb-24">

            <div className="max-w-7xl mx-auto px-6">

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

                    {works.map((work, index) => (
                        <Link
                            key={index}
                            // href={`/our-work/${work.slug}`}
                            href={`/our-work/detail-work`}
                            className="group block"
                        >

                            {/* Card */}
                            <div className="rounded-2xl overflow-hidden border border-primary/10 hover:border-primary/30 transition duration-300">

                                {/* Image */}
                                <div className="relative h-[300px] overflow-hidden">

                                    <Image
                                        src={work.img}
                                        alt={work.title}
                                        fill
                                        className="object-cover transition duration-700 group-hover:scale-110"
                                    />

                                    {/* Overlay */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition duration-500" />

                                    {/* Hover Content */}
                                    <div className="absolute bottom-6 left-6 right-6 text-white translate-y-6 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition duration-500">

                                        <h3 className="text-lg font-semibold">
                                            {work.title}
                                        </h3>

                                        <p className="text-sm opacity-80">
                                            {work.location}
                                        </p>

                                        <p className="text-xs mt-2 tracking-wide text-primary">
                                            View Project →
                                        </p>

                                    </div>

                                </div>

                            </div>

                        </Link>
                    ))}

                </div>

            </div>

        </section>
    );
};

export default WorkGallerySection;