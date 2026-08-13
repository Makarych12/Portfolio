import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Maksim Popkov — Systems & AI Engineer",
  description:
    "Engineering high-performance web systems, interactive schematics, and mobile AI pipelines with extreme velocity.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
