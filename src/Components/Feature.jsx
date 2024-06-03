import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";

const Feature = ({ imageSrc, title, desc }) => {
  return (
    <>
      <div class="feature col flex flex-col justify-between">
        <div className="firstPart">
          <div class="feature-icon d-inline-flex bg-transparent align-items-center text-bg-primary bg-gradient fs-2 mb-[10%]">
            <img src={imageSrc} alt="" />
          </div>
          <h3 class="fs-2 text-body-emphasis font-poppins font-medium text-xl text-[#000000] tracking-[0] leading-80  mb-[10%]">{title}</h3>
        </div>
        <div className="secondPart">
          <p className='text-body-emphasis font-poppins font-normal text-base text-[#000000] tracking-[0] leading-26  mb-[10%]'>{desc}</p>
        </div>
      </div>
    </>
  );
};

export default Feature;