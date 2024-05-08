"use client";
import React, { useEffect } from "react";
import { Carousel } from "react-responsive-carousel";
import { useMediaQuery } from "react-responsive";
import Image from "next/image";
import { IGalleryImage } from "@/helpers/gallery";
import CarouselIndicator from "@/components/Common/CarouselIndicator";

const GalleryCarousel = ({ gallery }: { gallery: IGalleryImage[] }) => {
  const isMobile = useMediaQuery({ query: "(max-width: 1024px)" });

  const [windowSize, setWindowSize] = React.useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useEffect(() => {
    setWindowSize({
      width: window.innerWidth,
      height: window.innerHeight,
    });
  }, [window.innerWidth, window.innerHeight]);

  const imagesPerSlide = Math.floor(windowSize.width / 300);

  return (
    <Carousel
      autoPlay={true}
      interval={2500}
      transitionTime={2500}
      infiniteLoop={true}
      showArrows={true}
      showThumbs={false}
      centerMode={!isMobile}
      centerSlidePercentage={50}
      renderIndicator={(onClickHandler, isSelected, index, label) => {
        return (
          <CarouselIndicator
            onClickHandler={onClickHandler}
            isSelected={isSelected}
            index={index}
            label={label}
          />
        );
      }}
    >
      {gallery.map((image, index) => (
        <div className="relative w-full h-full  flex flex-col " key={index}>
          <Image
            className="h-[40rem] object-cover object-center "
            src={image.src}
            alt={image.alt}
            width={600}
            height={600}
          />
        </div>
      ))}
    </Carousel>
  );
};

export default GalleryCarousel;
