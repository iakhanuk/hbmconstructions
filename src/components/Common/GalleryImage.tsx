"use client"
import Image from 'next/image';
import React from 'react'
import { RenderPhotoProps } from 'react-photo-album';

const GalleryImage = ({
    photo,
    imageProps: { alt, title, sizes, className, onClick },
    wrapperStyle,
  }: RenderPhotoProps) => {
    return (
      <div style={{ ...wrapperStyle}} className="relative overflow-hidden border-[1px] border-transparent">
        <Image
          fill
          src={photo}
          placeholder={"blurDataURL" in photo ? "blur" : undefined}
          {...{ alt, title, sizes, className, onClick }}
          className=" hover:scale-125 transition-all  duration-300 cursor-pointer hover:rotate-2"
        />
      </div>
    );
  };

export default GalleryImage