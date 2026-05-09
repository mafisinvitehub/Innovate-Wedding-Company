import { client } from "@/lib/sanity";
import { singleWorkQuery } from "@/lib/queries";
import WorkDetailPage from "./components/DetailWorkPage";

const Page = async ({ params }: { params: Promise<{ slug: string }> }) => {

    // 🔥 UNWRAP PARAMS
    const { slug } = await params;

    const data = await client.fetch(singleWorkQuery, {
        slug: slug,
    });

    return <WorkDetailPage data={data} />;
};

export default Page;