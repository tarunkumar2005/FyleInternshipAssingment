import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from './Card';
import './WhatWeDo.css'; // Import the CSS file for transitions
import activeDot from '../../images/activeDot.png';
import inactiveDot from '../../images/unActiveDot.png';

const WhatWeDo = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const imagesPerSlide = 4;
  const slides = [
    "../../images/imageGallery1.png",
    "../../images/imageGallery2.png",
    "../../images/imageGallery1.png",
    "../../images/imageGallery2.png",
    "../../images/imageGallery1.png",
    "../../images/imageGallery2.png",
    "../../images/imageGallery1.png",
    "../../images/imageGallery2.png",
    "../../images/imageGallery1.png",
    "../../images/imageGallery2.png",
    "../../images/imageGallery1.png",
    "../../images/imageGallery2.png",
  ];

  const totalSlides = Math.ceil(slides.length / imagesPerSlide);

  const handleDotClick = (index) => {
    setCurrentSlide(index);
  };

  return (
    <>
      <div className="container px-[2%] w-screen h-fit flex flex-col py-[5%] bg-[#F6F6F6]">
        <div className="firstPart">
          <div className="row">
            <div className="col font-cormorant-sc font-semibold text-2xl text-redish tracking-[0] leading-26 uppercase">What We Do</div>
            <div className="col-10"></div>
          </div>
          <div className="row mt-[2%]">
            <div className="col-4 font-cormorant-sc font-bold text-5xl text-[#000000] tracking-[0] leading-65 uppercase">Services Provided For You</div>
            <div className="col-1"></div>
            <div className="col-6 lead font-poppins font-normal text-base text-[#000000] tracking-[0] leading-30 md:text-lg">Morbi sed lacus nec risus finibus feugiat et fermentum nibh. Pellentesque vitae ante at elit fringilla ac at purus, Morbi sed lacus nec risus finibus feugiat et fermentum</div>
          </div>
        </div>
        <div className="secondPart h-full flex pt-[5%] justify-center items-center overflow-hidden">
          <div className="carousel-container" style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
            {slides.map((imageSrc, index) => (
              <Card key={index} imageSrc={imageSrc} />
            ))}
          </div>
        </div>
        <div className="dots flex mt-4">
          {Array.from({ length: totalSlides }).map((_, index) => (
            <img
              key={index}
              src={currentSlide === index ? activeDot : inactiveDot}
              className={`cursor-pointer ${currentSlide === index ? 'w-4 h-4 mx-2 scale-[2]' : 'w-3 h-3 mx-2'}`}
              alt="dot"
              onClick={() => handleDotClick(index)}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default WhatWeDo;