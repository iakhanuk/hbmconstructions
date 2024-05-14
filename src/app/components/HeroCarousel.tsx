"use client";
import CarouselIndicator from "@/components/Common/CarouselIndicator";
import Image from "next/image";
import React from "react";
import { Carousel } from "react-responsive-carousel";

const HeroCarousel = () => {
  return (
    <Carousel
      autoPlay={true}
      infiniteLoop={true}
      showArrows={false}
      showThumbs={false}
      interval={5000}
      stopOnHover={false}
      showStatus={false}
      
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
      <div>
        <Image height={720} width={1000} className="h-screen object-cover" src="/images/cover1.jpg" alt="hbm construction cover image 1"  />
      </div>
      <div>
        <Image height={720} width={1000} className="h-screen object-cover" src="/images/cover2.jpg" alt="hbm construction cover image 2" />
      </div>
      <div>
        <Image height={720} width={1000} className="h-screen object-cover" src="/images/cover3.jpg" alt="hbm construction cover image 3" />
      </div>
    </Carousel>
  );
};

export default HeroCarousel;
