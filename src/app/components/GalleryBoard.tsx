"use client";
import React, { useEffect } from "react";
import { useMediaQuery } from "react-responsive";
import Image from "next/image";
import { IGalleryImage } from "@/helpers/gallery";

import PhotoAlbum, { RenderPhotoProps } from "react-photo-album";
import GalleryImage from "@/components/Common/GalleryImage";



const GalleryBoard = ({ gallery }: { gallery: IGalleryImage[] }) => {
  const isMobile = useMediaQuery({ query: "(max-width: 1024px)" });

  return (
    <PhotoAlbum
      photos={gallery.map((image) => ({
        height: image.height ? image.height / (isMobile ? 500 : 100) : 1,
        width: image.width ? image.width / (isMobile ? 500 : 100) : 1,
        src: image.src,
        alt: image.alt,
      }))}
      layout="rows"
      spacing={0}
      renderPhoto={GalleryImage}
      defaultContainerWidth={1200}
      sizes={{ size: "calc(100vw - 240px)" }}
    />
  );
};

export default GalleryBoard;
