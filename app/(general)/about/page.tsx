import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "SEO WITI",
  description: "SEO Description",
  keywords: ["About Page", "WITI", "información", "..."],
};

export default function AboutPage() {
  return (
    <>
      <span className="text-7xl">About Page</span>
    </>
  );
}
