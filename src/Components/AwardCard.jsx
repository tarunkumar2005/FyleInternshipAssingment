import React from 'react';
import "./AwardCard.css";

const AwardCard = ({ imageSrc, number, desc }) => {
  return (
    <>
      <div className="awardCont w-[15vw] h-[25vh] py-[20px] flex flex-col items-center justify-around bg-white px-[30px]">
        <img src={imageSrc} className='w-[30%] h-[30%] object-cover' alt="" />
        <div className="text font-poppins font-light text-6xl text-black tracking-[0] uppercase leading-65 whitespace-nowrap">{number} +</div>
        <p className='says font-poppins font-light text-xl text-black tracking-[0] leading-80 whitespace-nowrap'>{desc}</p>
      </div>
    </>
  );
};

export default AwardCard;