import Image from "next/image";
import HeroCarousel from "./components/HeroCarousel";
import ServicesCarousel from "./components/ServicesCarousel";
import { fetch_gallery, fetch_services } from "@/helpers/dotCMS";
import GalleryBoard from "./components/GalleryBoard";
import { SITE_DATA } from "@/data";
import ContactSection from "./components/ContactSection";
import TypeWriterEffect from "./components/TypeWriter";
import Link from "next/link";

const Home = async ()  => {
  async function getHomeData() {
    "use server";
    const num_images = 5;
    const photos = await fetch_gallery(10)

    const services = await fetch_services()



    const randomLatestNImages = photos.slice(0, num_images*2).sort(() => Math.random() - 0.5).slice(0, num_images);
    return {
      gallery: randomLatestNImages,
      services: services
    
    };
  }

  const {gallery, services} = await getHomeData();


  return (
    <main className="min-h-screen">
      {/*  -------------------------- Hero Carousel Section -------------------------  */}
      <div className="relative  ">
        <div className="absolute inset-0 ">
          <HeroCarousel />

          <div
            className="absolute inset-0 bg-gray-600"
            style={{ mixBlendMode: "multiply" }}
          ></div>
        </div>
        <div className=" max-w-sm md:max-w-2xl mx-auto relative z-10 flex flex-col items-center justify-center min-h-screen text-white px-2">
          <span className="text-5xl md:text-7xl font-bold w-full">
            Welcome to </span>
            <h1  className="text-primary text-5xl md:text-7xl font-bold w-full">
            
              Hydrogen Building & Maintenance Ltd.
            
          </h1>
          <div className="flex text-2xl w-full flex-col sm:flex-row  mt-2 ">
            <span className="mr-2">

            We help you with
            </span>
            <h2 className=" text-primary font-bold">
              <TypeWriterEffect
                strings={["construction.", "restoration.", "remodeling."]}
                cursor="⚒"
              />
            </h2>
          </div>
        </div>
      </div>

      {/* -------------------------- Our Services Section -------------------------- */}

      <div id="services" className="w-full pt-12 mb-28 bg-base" >
        <div className="flex flex-col  my-8 w-full items-center">
          <h2 className="md:text-8xl text-5xl text-white text-center py-4 font-extrabold px-2">
            Our <span className="text-primary">Services</span>
          </h2>

          <h3 className="text-center text-lg text-gray-200 max-w-sm md:max-w-lg lg:max-w-full">
            Hydrogen Building & Maintenance Ltd. is dedicated to providing the best quality services to our clients.
          </h3>
        </div>

        <ServicesCarousel  services={services} />
      </div>

      {/* ----------------------------- Gallery Section ---------------------------- */}

      <div id="gallery" className="w-full pt-12 py-8 bg-white">
        <div className="flex flex-col  my-8 w-full items-center">
          <h2 className="md:text-8xl text-5xl text-black text-center py-4 font-extrabold px-2">
            Our <span className="text-primary">Gallery</span>
          </h2>

          <h3 className="text-center text-lg text-gray-900 max-w-sm md:max-w-lg lg:max-w-full">
            At HBM Constructions we take pride in our work, and we love to show it.
          </h3>
        </div>

        <div className="w-full ">
          <GalleryBoard gallery={gallery.slice(0,5)} />
         
        </div>

        <div className="w-full text-center py-8">
        <Link href={'/gallery'} className="bg-primary text-white py-4 px-6 rounded-sm  mt-4 hover:bg-secondary transition-all">
          View More
        </Link>
        </div>

        
      </div>



      {/* ----------------------------- Contact Section ---------------------------- */}

      <div id="contact" className="w-full pt-12 mb-28 bg-base">
        <div className="flex flex-col  my-8 w-full items-center">
          <h2 className="md:text-8xl text-5xl text-white text-center py-4 font-extrabold px-2">
            Get in <span className="text-primary">touch</span>
          </h2>

          <h3 className="text-center text-lg text-gray-200 max-w-sm md:max-w-lg lg:max-w-full px-2">
            HBM is here to help you with your construction and maintenance needs. Get in touch with us today.
          </h3>
        </div>

        <div className="mx-auto max-w-md sm:max-w-6xl px-4  flex flex-col sm:flex-row sm:justify-between  ">
          <ContactSection />
        </div>
      </div>



    </main>
  );
}

export default Home