import Image from "next/image";
import HeroCarousel from "./components/HeroCarousel";
import ServicesCarousel from "./components/ServicesCarousel";
import { get_files_from_gallery } from "@/helpers/gallery";
import { useState } from "react";
import GalleryCarousel from "./components/GalleryCarousel";
import { SITE_DATA } from "@/data";

export default async function Home() {
  async function getGallery() {
    "use server";

    const files = await get_files_from_gallery();
    return files;
  }

  const gallery = await getGallery();

  return (
    <main className="min-h-screen">
      {/*  -------------------------- Hero Carousel Section -------------------------  */}
      <div className="relative  ">
        <div className="absolute inset-0 ">
          <HeroCarousel />

          <div
            className="absolute inset-0 bg-gray-400"
            style={{ mixBlendMode: "multiply" }}
          ></div>
        </div>
        <div className="max-w-sm md:max-w-2xl mx-auto relative z-10 flex flex-col items-center justify-center min-h-screen text-white ">
          <h1 className="text-5xl md:text-7xl font-bold ">
            Welcome to <br />{" "}
            <span className="text-orange-500">
              Hydrogen Building & Maintenance Ltd.
            </span>
          </h1>
          <p className="mt-4">
          {SITE_DATA.hero_subheading}
          </p>
        </div>
      </div>

      {/* -------------------------- Our Services Section -------------------------- */}

      <div className="w-full pt-12 mb-28 bg-black">
        <div className="flex flex-col  my-8 w-full items-center">
          <h1 className="md:text-8xl text-6xl text-white text-center py-4 font-extrabold">
            Our <span className="text-orange-500">Services</span>
          </h1>

          <h3 className="text-center text-lg text-gray-200 max-w-sm md:max-w-lg lg:max-w-full">
            "Comprehensive Services with Clean Workspaces, Client Collaboration,
            and Satisfaction Guarantee"
          </h3>
        </div>

        <ServicesCarousel />
      </div>

      {/* ----------------------------- Gallery Section ---------------------------- */}

      <div className="w-full pt-12  bg-white">
        <div className="flex flex-col  my-8 w-full items-center">
          <h1 className="md:text-8xl text-6xl text-black text-center py-4 font-extrabold">
            <span className="text-orange-500">Gallery</span> Album
          </h1>

          <h3 className="text-center text-lg text-gray-900 max-w-sm md:max-w-lg lg:max-w-full">
            View our latest projects and the quality of our workmanship
          </h3>
        </div>

        <div className="w-full ">
          <GalleryCarousel gallery={gallery.slice(10)} />
        </div>
      </div>
      {/* ----------------------------- Contact Section ---------------------------- */}

      <div className="w-full pt-12 mb-28 bg-black">
        <div className="flex flex-col  my-8 w-full items-center">
          <h1 className="md:text-8xl text-6xl text-white text-center py-4 font-extrabold">
            Get in <span className="text-orange-500">touch</span>
          </h1>

          <h3 className="text-center text-lg text-gray-200 max-w-sm md:max-w-lg lg:max-w-full">
            We're here to help you with your building and maintenance needs. Get
            in touch with us today.
          </h3>
        </div>

        <div className="mx-auto max-w-md sm:max-w-6xl px-4  flex flex-col sm:flex-row sm:justify-between  ">

          <div className="w-full flex flex-col justify-center max-w-lg  bg-orange-500 p-12">
            <h1 className="text-4xl font-bold text-white">Contact Info</h1>
            <p className="text-white mt-4 text-lg">
             {SITE_DATA.contact_info.name} <br />
              {SITE_DATA.contact_info.address_lines.map((line) => (
                <span key={line}>{line} <br /></span>
              ))}
              
              <hr className="my-2 border-orange-600"/>
             <span className="font-semibold">
              
              Phone: <a href={`tel:${SITE_DATA.contact_info.phone}`}>{SITE_DATA.contact_info.phone}</a> <br />
              Email: <a href={`mailto:${SITE_DATA.contact_info.email}`}>{SITE_DATA.contact_info.email}</a>
             </span>
            </p>
          </div>


          <div className="w-full flex justify-center border-2  border-orange-500 p-12">
            <form className="w-full max-w-lg ">
              <div className="flex flex-col mb-4">
                <label htmlFor="name" className="text-white">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Enter your name"
                  className="p-2 rounded-sm"
                />
              </div>
              <div className="flex flex-col mb-4">
                <label htmlFor="email" className="text-white">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Enter your email"
                  className="p-2 rounded-sm"
                />
              </div>
              <div className="flex flex-col mb-4">
                <label htmlFor="message" className="text-white">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  placeholder="Enter your message"
                  className="p-2 rounded-sm"
                ></textarea>
              </div>
              <button className="bg-orange-500 hover:bg-orange-700 transition-all  py-2 px-4 rounded-sm ">
                Submit
              </button>
            </form>
          </div>


        </div>


      </div>
    </main>
  );
}
