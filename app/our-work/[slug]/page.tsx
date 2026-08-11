import { client } from "@/lib/sanity";
import { singleCategoryQuery } from "@/lib/queries";
import WorkDetailPage from "./components/DetailWorkPage";

const Page = async ({ params }: { params: Promise<{ slug: string }> }) => {
    const { slug } = await params;

    const data = await client.fetch(singleCategoryQuery, {
        slug,
    });

    return <WorkDetailPage data={data} />;
};

export default Page;