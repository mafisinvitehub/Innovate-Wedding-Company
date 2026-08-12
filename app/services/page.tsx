import ServicePage from './components/ServicePage'
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Wedding Services in Nagercoil | Photography, Catering & Event Management",
    description:
        "Explore premium wedding services from Innovate Wedding Company in Nagercoil, including wedding planning, photography, videography, catering, bridal makeup and complete event management.",
};

const Services = () => {
    return (
        <div>
            <ServicePage />
        </div>
    )
}

export default Services