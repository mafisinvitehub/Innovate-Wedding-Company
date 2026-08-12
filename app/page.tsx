import type { Metadata } from "next";
import HomePage from "./HomeComponent/HomePage";

export const metadata: Metadata = {
  title: "Best Wedding Planners in Nagercoil | Innovate Wedding Company Pvt Ltd",
  description:
    "Innovate Wedding Company is the best wedding planner in Nagercoil offering photography, videography, catering, and full event management services across Tamil Nadu.",
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