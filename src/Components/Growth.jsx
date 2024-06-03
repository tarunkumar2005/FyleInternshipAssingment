import React from 'react';
import AwardCard from './AwardCard';

const Growth = () => {
  return (
    <>
      <div class="container px-4 py-[5%] w-screen h-fit bg-[#F6F6F6]">
        <h1 className="font-cormorant-sc font-semibold text-2xl text-redish tracking-[0] leading-26 uppercase text-center py-[1%]">Experts Growts</h1>
        <h1 className="font-cormorant-sc font-bold text-5xl text-[#000000] tracking-[0] leading-65 uppercase text-center py-[1%] mb-[3%]">Our Company Growth</h1>
        <div className="awards w-full h-fit flex flex-row justify-around">
          <AwardCard imageSrc={"../images/heart.png"} number={"199"} desc={"Staticfied Customers"} />
          <AwardCard imageSrc={"../images/clock.png"} number={"1591"} desc={"Days Of Operation"} />
          <AwardCard imageSrc={"../images/checkbox.png"} number={"283"} desc={"Complete Project"} />
          <AwardCard imageSrc={"../images/trophy.png"} number={"75"} desc={"Win Awards"} />
        </div>
      </div>
    </>
  );
};

export default Growth;