import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://mp-portfolio.vercel.app"),
  title: "Maksim Popkov — Systems & AI Engineer",
  description: "Independent engineer building high-performance web systems, industrial interfaces and mobile AI pipelines.",
  openGraph: { title: "Maksim Popkov — Systems & AI Engineer", description: "Selected systems, interfaces and AI products engineered for the real world.", type: "website", images: [{ url: "/og.png", width: 1200, height: 630, alt: "Maksim Popkov — Systems and AI Engineer" }] },
  twitter: { card: "summary_large_image", title: "Maksim Popkov — Systems & AI Engineer", description: "Selected systems, interfaces and AI products engineered for the real world.", images: ["/og.png"] },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
