import React from "react";
import AboutCarousel from "./components/AboutCarousel";
import Image from "next/image";
import { SITE_DATA } from "@/data";

const About = () => {
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
        <h1 className="text-4xl font-bold">About Us</h1>
        <div className="text-lg mt-4 flex flex-col gap-2 max-w-3xl text-pretty">
          <p className="indent-10">
            Hydrogen Building & Maintenance LTD is a Construction company
            located in Essex, England, United Kingdom. We are a dedicated team
            of professional builders and technicians. Our team has decades of
            combined experience in the industry, and we have built a solid
            reputation for quality workmanship and customer service. We strive
            to provide the best <span className="text-primary">construction</span>, <span className="text-primary">restoration</span>, and <span className="text-primary">remodeling </span> 
            services available. With our expertise and attention to detail, you
            can trust us to get the job done right the first time.
          </p>
          <p className="indent-10">
            We specialise in a wide range of projects such as Extension's, Loft
            Conversions, Electric & Plumbing, Bathroom and Kitchen
            fitting/replacements, Flooring, Tiling, Painting & Decorating,
            Stairs fitted or replaced, skimming, rendering, Roofing, Steelwork,
            Paving, Bricklaying, Woodwork, Doors / frames & skirting. If you
            don’t see what you are looking for please don’t hesitate to ask,
            where here to please.
          </p>
        </div>
      </div>


      <div className="flex flex-col items-center justify-center w-full bg-base text-white p-12">
        <h1 className="text-4xl font-bold">Contact Us</h1>
        <div className="text-lg mt-4 flex flex-col gap-2 max-w-3xl">
          <p >
          For inquiries or project discussions, reach out to us via phone, email, or our website. We're eager to assist you with top-notch construction services.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 font-bold">
            <p>
              <span>Email: </span>
              <a className="hover:text-primary transition-all" href={`mailto:${SITE_DATA.contact_info.email}`}>
                {SITE_DATA.contact_info.email}
              </a>
            </p>
            <p>
              <span>Phone: </span>
              <a  className="hover:text-primary transition-all" href={`tel:${SITE_DATA.contact_info.phone}`}>
                {SITE_DATA.contact_info.phone}
              </a>
            </p>
           
            </div>
        </div>
      </div>
    </div>
  );
};

export default About;
