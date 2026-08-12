import type { Metadata } from "next";
import Script from "next/script";
import HomePage from "./HomeComponent/HomePage";

export const metadata: Metadata = {
  title: "Best Wedding Planners in Nagercoil | Innovate Wedding Company",
  description:
    "Innovate Wedding Company offers premium wedding planning, photography, videography, catering and complete event management services in Nagercoil and across Tamil Nadu.",
  keywords: [
    "best wedding planners in nagercoil",
    "wedding photography nagercoil",
    "event management nagercoil",
    "tamil nadu wedding planners",
    "south india wedding company",
  ],
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Innovate Wedding Company",
  alternateName: "Innovate Wedding Company Pvt Ltd",
  url: "https://innovateweddingcompany.com/",
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Innovate Wedding Company Pvt Ltd",
  url: "https://innovateweddingcompany.com/",
  logo: "https://innovateweddingcompany.com/icon.png",
};

export default function Home() {
  return (
    <>
      <Script
        id="website-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(websiteSchema),
        }}
      />

      <Script
        id="organization-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationSchema),
        }}
      />

      <HomePage />
    </>
  );
}