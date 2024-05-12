"use client";
import React from "react";
import { Carousel } from "react-responsive-carousel";
import { useMediaQuery } from "react-responsive";
import CarouselIndicator from "@/components/Common/CarouselIndicator";
import { IProvidedService } from "@/types";


const ServicesCarousel = ({services}:{services:IProvidedService[]}) => {
  const isMobile = useMediaQuery({ query: "(max-width: 1024px)" });


  return (
    <Carousel
      autoPlay={false}
      infiniteLoop={true}
      showArrows={true}
      showThumbs={false}
      centerMode={!isMobile}
      centerSlidePercentage={Math.max(25, 100 / services.length)}
      showIndicators={isMobile}
      showStatus={false}
      
      renderIndicator={(onClickHandler, isSelected, index, label) => {
      return <CarouselIndicator onClickHandler={onClickHandler} isSelected={isSelected} index={index} label={label} />;
      }}
      emulateTouch={true}
      preventMovementUntilSwipeScrollTolerance={true}
      swipeScrollTolerance={60}
    >
      {services.map((service) => (
        <div
          key={service.id}
          className="relative w-full h-full bg-cover flex flex-col"
          style={{
            backgroundImage: `url(${service.image.url})`,
          }}

        >
          <div className="lg:opacity-0 hover:opacity-100 transition-all h-full  bg-black bg-opacity-70 flex items-center justify-center py-28  border-b-2 border-primary">
            <div className="text-white text-center max-w-sm md:max-w-md">
              <p className="px-2">{service.description}</p>
            </div>
          </div>

          <h3 className="text-white mt-auto text-2xl sm:text-4xl font-bold bg-black bg-opacity-70 w-full mx-auto px-4 pt-2 pb-8  lg:pb-2 rounded-sm ">
            {service.serviceName}
          </h3>
        </div>
      ))}
    </Carousel>
  );
};

export default ServicesCarousel;
