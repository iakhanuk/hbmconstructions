"use client";
import React, { useEffect } from "react";
import { useMediaQuery } from "react-responsive";
import Image from "next/image";

import PhotoAlbum, { RenderPhotoProps } from "react-photo-album";
import GalleryImage from "@/components/Common/GalleryImage";
import { IGalleryImage } from "@/types";

const GalleryBoard = ({ gallery }: { gallery: IGalleryImage[] }) => {
  const isMobile = useMediaQuery({ query: "(max-width: 1024px)" });
  const scaleDownFactor = 1

  return (
    <PhotoAlbum
      photos={gallery.map((image) => ({
        height: image.height ? image.height / (isMobile ? 500 : 100) : 1,
        width: image.width ? image.width / (isMobile ? 500 : 100) : 1,
        src: image.url,
        alt:
          image.alt ||
          (image.tags.length
            ? image.tags.join(", ")
            : image.smartTags.join(", ")),
      }))}
      layout="rows"
      spacing={0}
      renderPhoto={GalleryImage}
      defaultContainerWidth={1200}
      sizes={{
        size: `calc(75vw - ${scaleDownFactor*1}rem)`,
        sizes: [
          {
            size: `calc(75vw - ${scaleDownFactor*1}rem)`,
            viewport: "min-width: 768px",
          },
          {
            size: `calc(75vw - ${scaleDownFactor*0.5}rem)`,
            viewport: "min-width: 640px",
          },
          {
            size: `calc(75vw - ${scaleDownFactor*0.25}rem)`,
            viewport: "min-width: 320px",
          },
        ],
      }}
    />
  );
};

export default GalleryBoard;
