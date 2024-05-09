import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

import "react-responsive-carousel/lib/styles/carousel.min.css";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Hydrogen Building & Maintenance",
  description: "Hydrogen Building & Maintenance LTD, based in Essex, UK, is your go-to construction company. Our skilled team brings decades of experience, ensuring top-notch work and excellent service. Specializing in extensions, loft conversions, and more, we cover a wide range of projects including plumbing, electrical work, and roofing. If you have a project in mind, just ask—we're here to help!",
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
    emails: ["contact@hbmconstruction.co.uk", "hydrogenbnm@gmail.com"],
    phoneNumbers: ["07915368262"],
  },

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
