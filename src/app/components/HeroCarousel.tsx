"use client";
import CarouselIndicator from "@/components/Common/CarouselIndicator";
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
        <img className="h-screen object-cover" src="/images/cover1.jpg" />
      </div>
      <div>
        <img className="h-screen object-cover" src="/images/cover2.jpg" />
      </div>
      <div>
        <img className="h-screen object-cover" src="/images/cover3.jpg" />
      </div>
    </Carousel>
  );
};

export default HeroCarousel;
