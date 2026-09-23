import { client } from "@/lib/sanity";
import { singleEmployeeQuery } from "@/lib/queries";
import EmployeePage from "./components/EmployeePage";

const Page = async ({ params }: { params: Promise<{ slug: string }> }) => {
    const { slug } = await params;

    const data = await client.fetch(singleEmployeeQuery, { slug });

    return <EmployeePage data={data} />;
};

export default Page;