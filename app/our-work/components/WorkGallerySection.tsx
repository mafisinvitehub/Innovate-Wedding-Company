import Link from "next/link";
import Image from "next/image";
import React from "react";

const WorkGallerySection = ({ works }: any) => {
    return (
        <section className="w-full bg-background pb-24">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

                    {works?.map((work: any, index: number) => (
                        <Link
                            key={index}
                            href={`/our-work/${work.slug}`}
                            className="group block"
                        >
                            <div className="rounded-2xl overflow-hidden border border-primary/10 hover:border-primary/30 transition duration-300">

                                <div className="relative h-[300px] overflow-hidden">

                                    {work.coverImage?.asset?.url && (
                                        <Image
                                            src={work.coverImage.asset.url}
                                            alt={work.title}
                                            fill
                                            className="object-cover transition duration-700 group-hover:scale-110"
                                        />
                                    )}

                                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition duration-500" />

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