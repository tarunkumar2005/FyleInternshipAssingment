import React from 'react';
import Feature from './Feature';
import 'bootstrap/dist/css/bootstrap.min.css';

const WhyChooseUs = () => {
  return (
    <>
      <div class="container px-4 py-5" id="featured-3">
      <h1 className="font-cormorant-sc font-semibold text-2xl text-redish tracking-[0] leading-26 uppercase text-center py-[1%]">Why Choose Us</h1>
      <h1 className="font-cormorant-sc font-bold text-5xl text-[#000000] tracking-[0] leading-65 uppercase text-center py-[1%]">Why We Are Best</h1>
        <div class="row g-4 py-5 row-cols-1 row-cols-lg-4">
          <Feature imageSrc={"../images/feature1.png"} title={"Clarified Vision & Target"} desc={"Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy."} />
          <Feature imageSrc={"../images/feature2.png"} title={"High Performance"} desc={"Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy."} />
          <Feature imageSrc={"../images/feature3.png"} title={"Maintain Security"} desc={"Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy."} />
          <Feature imageSrc={"../images/feature4.png"} title={"Better Strategy & Quality"} desc={"Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy."} />
        </div>
      </div>
    </>
  );
};

export default WhyChooseUs;