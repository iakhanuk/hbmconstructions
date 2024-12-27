import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

import "react-responsive-carousel/lib/styles/carousel.min.css";
import "yet-another-react-lightbox/styles.css";

import Footer from "@/components/Footer";

import { SITE_DATA } from "@/data";
import { getTimeInMs } from "@/helpers/utils";
import Link from "next/link";

const { meta_data } = SITE_DATA;

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: meta_data.siteName,
  applicationName: meta_data.siteName,

  description: meta_data.description,
  metadataBase: meta_data.metadataBase,
  openGraph: {
    type: "website",
    locale: "en_GB",
    url: meta_data.url,
    siteName: meta_data.siteName,
    countryName: meta_data.countryName,
    description: meta_data.description,
    emails: meta_data.emails,
    phoneNumbers: meta_data.phoneNumbers,
  },
  keywords: [
    "construction",
    "restoration",
    "remodeling",
    "extensions",
    "loft conversions",
    "plumbing",
    "electrical work",
    "roofing",
    "Essex",
    "UK",
    "Hydrogen Building & Maintenance",
    "Hydrogen Building & Maintenance LTD",
    "Hydrogen Building & Maintenance Ltd.",
    "Hydrogen Building & Maintenance Limited",
    "Hydrogen Building & Maintenance Limited.",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-base `}>
        <Navbar />

        {children}
        <Footer />
      </body>
    </html>
  );
}
