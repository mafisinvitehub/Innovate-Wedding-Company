import { client } from "@/lib/sanity";
import { contactQuery } from "@/lib/queries";
import ContactPage from "./component/ContactPage";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Contact Best Wedding Planners in Nagercoil",
    description:
        "Contact Innovate Wedding Company in Nagercoil for premium wedding planning, photography and event management services.",
};

export default async function Contact() {
    const data = await client.fetch(contactQuery);

    return (
        <div>
            <ContactPage data={data} />
        </div>
    );
}