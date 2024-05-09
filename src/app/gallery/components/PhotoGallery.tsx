"use client"
import GalleryImage from '@/components/Common/GalleryImage'
import { IGalleryImage } from '@/helpers/gallery'
import React, { useState } from 'react'
import PhotoAlbum from 'react-photo-album'
import Lightbox from 'yet-another-react-lightbox'

const PhotoGallery = ({photos}:{photos:IGalleryImage[]}) => {
    const [index, setIndex] = useState(-1);
  return (
    <>
    <PhotoAlbum
    photos={photos.map((image) => ({
      height: image.height ? image.height/10  : 100,
      width: image.width ? image.width/10 : 100,
      src: image.src,
      alt: image.alt,
    }))}
    layout="rows"
    spacing={0}
    renderPhoto={GalleryImage}
    defaultContainerWidth={1200}
    sizes={{ size: "calc(100vw - 240px)" }}
    onClick={(index) => setIndex(index.index)}
    />
    <Lightbox
        index={index}
        slides={photos}
        open={index >= 0}
        close={() => setIndex(-1)}
      />
    
    </>
  )
}

export default PhotoGallery