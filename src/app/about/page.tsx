import React from "react";
import AboutCarousel from "./components/AboutCarousel";
import Image from "next/image";
import { fetch_contact } from "@/helpers/dotCMS";
import Link from "next/link";

const About = async () => {
  const getGeneralInfo = async () => {
    "use server";
    return await fetch_contact();
  };

  const { contact, socials } = await getGeneralInfo();
  return (
    <div className="flex flex-col w-full ">
      <AboutCarousel />
      <div className="relative w-full flex items-center justify-center mb-28">
        <Image
          src="/images/hbm-cover.png"
          className="absolute z-10 w-3/4 max-w-sm -my-12 mx-auto "
          height={1080}
          width={1920}
          alt="hydrogen building and construction LTD. Logo"
        />
      </div>
      <div className="flex flex-col items-center justify-center w-full bg-base text-white p-12">
        <h1 className="text-4xl md:text-6xl mb-2 font-bold text-center">
          About <span className="text-primary">Us</span>
        </h1>{" "}
        <h2 className="text-center">
          Get to know Hydrogen Building & Maintenance LTD. better.
        </h2>
        <br />
        <div className="text-lg mt-4 flex flex-col gap-2 max-w-3xl text-pretty">
          <p className="indent-10">
            Hydrogen Building & Maintenance LTD is a construction company
            located in Essex, England, United Kingdom. We are a dedicated team
            of professional builders and technicians. With decades of combined
            experience in the industry, we have built a solid reputation for
            quality workmanship and customer service. We strive to provide the
            best <span className="text-primary">construction</span>,{" "}
            <span className="text-primary">restoration</span>, and{" "}
            <span className="text-primary">remodelling </span>
            services available. With our expertise and attention to detail, you
            can trust us to get the job done right the first time.
          </p>
          <p className="indent-10">
            We specialize in a wide range of projects such as extensions, loft
            conversions, electric and plumbing work, bathroom and kitchen
            fitting replacements, flooring, tiling, painting and decorating,
            fitting or replacing stairs, skimming, rendering, roofing,
            steelwork, paving, bricklaying, woodwork, doors/frames, and
            skirting. If you don't see what you are looking for, please don't
          hesitate to ask. We're here to please.
          </p>
        </div>
      </div>

      <div className="flex flex-col items-center justify-center w-full bg-base text-white p-12">
        <h2 className="text-4xl font-bold">Contact Us</h2>
        <div className="text-lg mt-4 flex flex-col gap-2 max-w-3xl">
          <p>
            For inquiries or project discussions, reach out to us via phone,
            email, or our website. We're eager to assist you with top-notch
            construction services.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 font-bold">
            <p>
              <span>Email: </span>
              <Link
                className="hover:text-primary transition-all"
                href={`mailto:${contact.email}`}
              >
                {contact.email}
              </Link>
            </p>
            <p>
              <span>Phone: </span>
              <Link
                className="hover:text-primary transition-all"
                href={`tel:${contact.phone}`}
              >
                {contact.phone}
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
