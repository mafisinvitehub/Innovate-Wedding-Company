import { client } from "@/lib/sanity";
import { contactQuery } from "@/lib/queries";
import ContactPage from "./component/ContactPage";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Contact Innovate Wedding Company | Nagercoil",
    description:
        "Get in touch with Innovate Wedding Company for premium wedding planning, photography, videography and event management services in Nagercoil and across Tamil Nadu.",
};

export default async function Contact() {
    const data = await client.fetch(contactQuery);

    return (
        <div>
            <ContactPage data={data} />
        </div>
    );
}