import Link from "next/link"
import Image from "next/image"
import PrimaryButton from "../components/PrimaryButton"

const WorkSection = ({ works }: any) => {

    // 👉 limit items (change 6 / 9 anytime)
    const limitedWorks = works?.slice(0, 6)

    if (!limitedWorks || limitedWorks.length === 0) return null

    return (
        <section className="bg-secondary/30 py-24 px-6">

            <div className="max-w-6xl mx-auto">

                {/* Heading */}

                <div className="text-center mb-20">
                    <h2 className="text-2xl md:text-3xl lg:text-4xl tracking-[0.2em] text-foreground uppercase inline-block border-b border-primary pb-5">
                        A Glimpse of Our Work
                    </h2>

                    <p className="mt-6 text-foreground/70 max-w-xl mx-auto">
                        Explore a selection of our recent weddings, events, and creative projects — each crafted with precision, creativity, and a premium touch.
                    </p>
                </div>

                {/* GRID */}

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

                    {/* FEATURED (BIG) */}

                    <Link
                        href={`/our-work/${limitedWorks[0].slug}`}
                        className="md:col-span-2 md:row-span-2 group relative overflow-hidden rounded-xl"
                    >

                        {limitedWorks[0]?.coverImage?.asset?.url && (
                            <Image
                                src={limitedWorks[0].coverImage.asset.url}
                                alt={limitedWorks[0].title}
                                width={800}
                                height={600}
                                className="w-full h-full object-cover transition duration-700 group-hover:scale-105 group-hover:brightness-90 shadow-md group-hover:shadow-xl"
                            />
                        )}

                        {/* Overlay */}

                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition duration-500 delay-75"></div>

                        {/* Text */}

                        <div className="absolute bottom-6 left-6 text-white translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition duration-500 delay-75">
                            <h3 className="text-xl md:text-2xl tracking-wide">
                                {limitedWorks[0].title}
                            </h3>
                            <p className="text-sm tracking-wide">
                                {limitedWorks[0].location}
                            </p>
                            <p className="text-xs mt-1 opacity-80">View Project →</p>
                        </div>

                    </Link>

                    {/* OTHER WORKS */}

                    {limitedWorks.slice(1).map((work: any, index: number) => (
                        <Link
                            key={index}
                            href={`/our-work/${work.slug}`}
                            className="group relative overflow-hidden rounded-xl"
                        >

                            {work.coverImage?.asset?.url && (
                                <Image
                                    src={work.coverImage.asset.url}
                                    alt={work.title}
                                    width={400}
                                    height={300}
                                    className="w-full h-full object-cover transition duration-700 group-hover:scale-105 group-hover:brightness-90 shadow-md group-hover:shadow-xl"
                                />
                            )}

                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition duration-500 delay-75"></div>

                            <div className="absolute bottom-4 left-4 text-white translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition duration-500 delay-75">
                                <h3 className="text-sm md:text-base tracking-wide">
                                    {work.title}
                                </h3>
                                <p className="text-xs tracking-wide">
                                    {work.location}
                                </p>
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
                        className="border-foreground text-foreground"
                        textClassName="group-hover:text-background"
                        bgClassName="bg-primary/70"
                    />
                </div>

            </div>

        </section>
    )
}

export default WorkSection