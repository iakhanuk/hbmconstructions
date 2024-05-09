"use client";
import React from "react";
import { Carousel } from "react-responsive-carousel";
import { useMediaQuery } from "react-responsive";
import CarouselIndicator from "@/components/Common/CarouselIndicator";

const ServicesCarousel = () => {
  const isMobile = useMediaQuery({ query: "(max-width: 1024px)" });

  const services = [
    {
      id: 1,
      title: "Construction",
      description:
        "We provide a building service for both commercial and residential projects. Whether it’s a New Extension or Loft  Conversion we provide what ever you need. New stairs, windows, Skimming and rendering, Guttering, drainage. Where here with our experience and expertises.",
      image: "/images/construction-service.jpg",
    },
    {
      id: 2,
      title: "Restoration & Renovation",
      description:
        "We specialize in the repair and restoration of older buildings and fittings. Replacement kitchens and Bathrooms with all your  Electrical and plumbing needs. Why not freshen up with a new look using our painting and decorating team, providing Tiling and a wide range of Floorings and Accessories. Get top of the range lighting to highlight and finish the look.",
      image: "/images/restoration-service.jpg",
    },
    {
      id: 3,
      title: "Remodeling",
      description:
        "With our Specialist team we provide the best work in the industry. Get your neighbour’s talking with our outside projects. As we all know it’s the first thing your guests see when visiting. We Specialise in top quality Roofing, Driveways, Bricklaying and Fencing helping to keep your privacy.",
      image: "/images/remodeling-service.jpg",
    },
  ];
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
    >
      {services.map((service) => (
        <div
          key={service.id}
          className="relative w-full h-full bg-cover flex flex-col"
          style={{
            backgroundImage: `url(${service.image})`,
          }}
        >
          <div className="lg:opacity-0 hover:opacity-100 transition-all h-full  bg-base bg-opacity-60 flex items-center justify-center py-28  border-b-2 border-primary">
            <div className="text-white text-center max-w-sm md:max-w-md">
              <p className="">{service.description}</p>
            </div>
          </div>

          <h1 className="text-white mt-auto text-4xl font-bold bg-base bg-opacity-50 w-full mx-auto px-4 pt-2 pb-8  lg:pb-2 rounded-sm ">
            {service.title}
          </h1>
        </div>
      ))}
    </Carousel>
  );
};

export default ServicesCarousel;
