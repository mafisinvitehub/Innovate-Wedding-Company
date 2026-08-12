import type { Metadata } from "next";
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
    "south india wedding company"
  ],
};

export default function Home() {
  return (
    <div>
      <HomePage />
    </div>
  );
}