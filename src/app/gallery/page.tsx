
import React from "react";
import Image from "next/image";
import { SITE_DATA } from "@/data";
import { get_files_from_gallery } from "@/helpers/gallery";
import PhotoAlbum from "react-photo-album";
import GalleryImage from "@/components/Common/GalleryImage";
import PhotoGallery from "./components/PhotoGallery";
import GalleryCarousel from "./components/GalleryCarousel";

const Gallery = async () => {
  async function getGallery() {
    "use server";
    const files = await get_files_from_gallery();
    return files;
  }

  const gallery = await getGallery();
  return (
    <div className="flex flex-col w-full ">
        <GalleryCarousel />
      <div className="flex flex-col mx-auto bg-base text-white p-12 gap-8 sm:w-4/5">
        <h1 className="text-6xl font-bold text-center">
          Welcome To Our <span className="text-primary">Gallery</span>
        </h1>
        <p className="text-center">
            Here are some of the images of our work. We take pride in our work and we hope you enjoy it as much as we do.
        </p>
        <div className=" w-full min-h-screen">
       <PhotoGallery photos={gallery} />
        </div>
      </div>
      
    </div>
  );
};

export default Gallery;
