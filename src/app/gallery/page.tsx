import React from "react";
import Image from "next/image";
import { SITE_DATA } from "@/data";
import PhotoAlbum from "react-photo-album";
import GalleryImage from "@/components/Common/GalleryImage";
import PhotoGallery from "./components/PhotoGallery";
import GalleryCarousel from "./components/GalleryCarousel";
import { fetch_gallery } from "@/helpers/dotCMS";

const Gallery = async () => {
  async function getGallery() {
    "use server";
    const images = await fetch_gallery();
    return images;
  }

  const gallery = await getGallery();
  return (
    <div className="flex flex-col w-full ">
      <GalleryCarousel />
      <div className="flex flex-col mx-auto bg-base text-white p-12 gap-8 sm:w-4/5">
        <h1 className="text-6xl font-bold text-center">
          Our <span className="text-primary">Gallery</span>
        </h1>
        <h2 className="text-center">
          At Hydrogen Building & Maintenance, we take pride in our work, and we
          love to show it. 
        </h2>
        <div className=" w-full min-h-screen">
          <PhotoGallery photos={gallery} />
        </div>
      </div>
    </div>
  );
};

export default Gallery;
