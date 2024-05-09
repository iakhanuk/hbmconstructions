import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

import "react-responsive-carousel/lib/styles/carousel.min.css";
import "yet-another-react-lightbox/styles.css";

import Footer from "@/components/Footer";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Hydrogen Building & Maintenance",
  applicationName: "Hydrogen Building & Maintenance",

  description:
    "Hydrogen Building & Maintenance LTD, based in Essex, UK, is your premier construction company. With decades of experience, we specialize in extensions, loft conversions, plumbing, electrical work, and roofing. Got a project? Just ask—we're here to help!",
  openGraph: {
    type: "website",
    locale: "en_GB",
    url: "https://hbmconstruction.co.uk",
    siteName: "Hydrogen Building & Maintenance",
    countryName: "United Kingdom",
    images: [
      {
        url: "/images/hbm-cover.png",
        width: 800,
        height: 600,
        alt: "Hydrogen Building & Maintenance",
      },
    ],
    description:
      "Hydrogen Building & Maintenance LTD, based in Essex, UK, is your premier construction company. With decades of experience, we specialize in extensions, loft conversions, plumbing, electrical work, and roofing. Got a project? Just ask—we're here to help!",
    emails: ["contact@hbmconstruction.co.uk", "hydrogenbnm@gmail.com"],
    phoneNumbers: ["07915368262"],
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
      <body className={`${inter.className} bg-base`}>
        <Navbar />

        {children}
        <Footer />
      </body>
    </html>
  );
}
