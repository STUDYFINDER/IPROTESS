import "./globals.css";
import type { Metadata } from "next";
import AppClientLayout from "./AppClientLayout";

export const metadata: Metadata = {
  title: "Iprotess | Premium Vegan Protein & Luxury Shakers",
  description: "Experience true luxury and sustainability with Iprotess. Excellence in its purest form.",
  keywords: ["vegan protein", "luxury shakers", "premium supplements", "iprotess", "plant-based", "excellence"],
  openGraph: {
    title: "Iprotess | Premium Vegan Protein & Luxury Shakers",
    description: "Experience true luxury and sustainability with Iprotess. Excellence in its purest form.",
    url: "https://iprotess.com/",
    siteName: "Iprotess",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Iprotess premium vegan protein and shakers"
      }
    ],
    locale: "es_ES",
    type: "website"
  },
  icons: {
    icon: "/favicon.ico"
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body>
        <AppClientLayout>{children}</AppClientLayout>
      </body>
    </html>
  );
}
