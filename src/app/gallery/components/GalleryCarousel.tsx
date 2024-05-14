"use client"
import CarouselIndicator from '@/components/Common/CarouselIndicator';
import Image from 'next/image';
import React from 'react'
import { Carousel } from 'react-responsive-carousel';

const GalleryCarousel = () => {
  return (
    <Carousel
    autoPlay={true}
    infiniteLoop={true}
    showArrows={true}
    showThumbs={false}
    interval={5000}
    stopOnHover={false}
    showStatus={false}
    showIndicators={false}
  >
    <div>
      <Image height={720} width={720} className="h-2/3 max-h-96 object-cover" src="/images/cover1.jpg" alt="hbm construction cover image 1" />
    </div>
    <div>
      <Image height={720} width={720} className="h-2/3 max-h-96 object-cover" src="/images/cover2.jpg" alt="hbm construction cover image 2" />
    </div>
    <div>
      <Image height={720} width={720} className="h-2/3 max-h-96 object-cover" src="/images/cover3.jpg" alt="hbm construction cover image 3" />
    </div>
  </Carousel>
  )
}

export default GalleryCarousel