"use client";
import GalleryImage from "@/components/Common/GalleryImage";
import { IGalleryImage } from "@/types";
import React, { useState } from "react";
import PhotoAlbum from "react-photo-album";
import Lightbox, { SlideImage } from "yet-another-react-lightbox";

const PhotoGallery = ({ photos }: { photos: IGalleryImage[] }) => {
  const [index, setIndex] = useState(-1);

  const scaled_photos = photos.map((image) => {
    const aspect_ratio = image.width / image.height;
    const width = Math.min(image.width, 100);
    const height = width / aspect_ratio;
    return {
      src: image.url,
      width: width,
      height: height,
      alt:
        image.alt || image.tags.length
          ? image.tags.join(", ")
          : image.smartTags.join(", "),
    };
  });

  return (
    <>
      <PhotoAlbum
        photos={scaled_photos}
        layout="rows"
        spacing={0}
        renderPhoto={GalleryImage}
        defaultContainerWidth={1200}
        sizes={{ size: "calc(100vw - 240px)" }}
        onClick={(index) => setIndex(index.index)}
      />
      <Lightbox
        index={index}
        slides={photos.map((p) => ({ ...p, src: p.url }))}
        open={index >= 0}
        close={() => setIndex(-1)}
      />
    </>
  );
};

export default PhotoGallery;
