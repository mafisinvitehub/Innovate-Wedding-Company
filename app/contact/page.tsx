import { client } from "@/lib/sanity";
import { contactQuery } from "@/lib/queries";
import ContactPage from "./component/ContactPage";

export default async function Contact() {
    const data = await client.fetch(contactQuery);

    return (
        <div>
            <ContactPage data={data} />
        </div>
    );
}