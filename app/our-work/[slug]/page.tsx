import { client } from "@/lib/sanity";
import { singleCategoryQuery } from "@/lib/queries";
import WorkDetailPage from "./components/DetailWorkPage";

import type { Metadata } from "next";

export async function generateMetadata({
    params,
}: {
    params: { slug: string };
}): Promise<Metadata> {
    const { slug } = params;

    const data = await client.fetch(singleCategoryQuery, { slug });

    if (!data) {
        return {
            title: "Our Work",
        };
    }

    return {
        title: `${data.title} Works in Nagercoil | Innovate Wedding Company`,
        description: `Explore our ${data.title} works including photography, videography and event management in Nagercoil and Tamil Nadu.`,
    };
}

const Page = async ({ params }: { params: Promise<{ slug: string }> }) => {
    const { slug } = await params;

    const data = await client.fetch(singleCategoryQuery, {
        slug,
    });

    return <WorkDetailPage data={data} />;
};

export default Page;