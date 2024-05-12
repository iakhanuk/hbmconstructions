"use client";
import React, { useEffect } from "react";
import { useMediaQuery } from "react-responsive";
import Image from "next/image";

import PhotoAlbum, { RenderPhotoProps } from "react-photo-album";
import GalleryImage from "@/components/Common/GalleryImage";
import { IGalleryImage } from "@/types";



const GalleryBoard = ({ gallery }: { gallery: IGalleryImage[] }) => {
  const isMobile = useMediaQuery({ query: "(max-width: 1024px)" });

  return (
    <PhotoAlbum
      photos={gallery.map((image) => ({
        height: image.height ? image.height / (isMobile ? 500 : 100) : 1,
        width: image.width ? image.width / (isMobile ? 500 : 100) : 1,
        src: image.url,
        alt: image.alt || (image.tags.length ? image.tags.join(", ") : image.smartTags.join(", "))
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
