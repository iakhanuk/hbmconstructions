import Image from "next/image";
import HeroCarousel from "./components/HeroCarousel";
import ServicesCarousel from "./components/ServicesCarousel";
import { get_files_from_gallery } from "@/helpers/gallery";
import GalleryCarousel from "./components/GalleryCarousel";
import { SITE_DATA } from "@/data";
import ContactSection from "./components/ContactSection";
import TypeWriterEffect from "./components/TypeWriter";

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
            <span className="text-primary">
              Hydrogen Building & Maintenance Ltd.
            </span>
          </h1>
          <div className="flex text-2xl w-full ">
            <h2>

            We help you with
            </h2>
            <h2 className="ml-2 text-primary font-bold">
              <TypeWriterEffect
                strings={["construction.", "restoration.", "remodeling."]}
                cursor="⚒"
              />
            </h2>
          </div>
        </div>
      </div>

      {/* -------------------------- Our Services Section -------------------------- */}

      <div id="services" className="w-full pt-12 mb-28 bg-base">
        <div className="flex flex-col  my-8 w-full items-center">
          <h1 className="md:text-8xl text-6xl text-white text-center py-4 font-extrabold">
            Our <span className="text-primary">Services</span>
          </h1>

          <h3 className="text-center text-lg text-gray-200 max-w-sm md:max-w-lg lg:max-w-full">
            "Comprehensive Services with Clean Workspaces, Client Collaboration,
            and Satisfaction Guarantee"
          </h3>
        </div>

        <ServicesCarousel />
      </div>

      {/* ----------------------------- Gallery Section ---------------------------- */}

      <div id="gallery" className="w-full pt-12  bg-white">
        <div className="flex flex-col  my-8 w-full items-center">
          <h1 className="md:text-8xl text-6xl text-black text-center py-4 font-extrabold">
            Our <span className="text-primary">Gallery</span>
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

      <div id="contact" className="w-full pt-12 mb-28 bg-base">
        <div className="flex flex-col  my-8 w-full items-center">
          <h1 className="md:text-8xl text-6xl text-white text-center py-4 font-extrabold">
            Get in <span className="text-primary">touch</span>
          </h1>

          <h3 className="text-center text-lg text-gray-200 max-w-sm md:max-w-lg lg:max-w-full">
            We're here to help you with your building and maintenance needs. Get
            in touch with us today.
          </h3>
        </div>

        <div className="mx-auto max-w-md sm:max-w-6xl px-4  flex flex-col sm:flex-row sm:justify-between  ">
          <ContactSection />
        </div>
      </div>
    </main>
  );
}
