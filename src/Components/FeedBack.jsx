import React from 'react';

const FeedBack = () => {
  return (
    <>
      <div className="container px-4 py-[5%] w-screen h-fit bg-white">
        <h1 className="font-cormorant-sc font-semibold text-2xl text-redish tracking-[0] leading-26 uppercase text-center py-[1%]">client's feedback</h1>
        <h1 className="font-cormorant-sc font-bold text-5xl text-[#000000] tracking-[0] leading-65 uppercase text-center py-[1%] mb-[5%]">people say's about us !</h1>
        <div className="flex flex-col items-center justify-center">
          <div className="wrappe flex flow-row w-[50%]">
            <div className="quote absolute">
              <img src="../images/quote.png" alt="Quote" className="w-[60px] h-[50px] inline-block" />
            </div>
            <p className="font-poppins font-normal text-xl py-[2%] text-black tracking-[0] leading-34">
              Jannat Tumpa The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections Bonorum et Malorum original.
            </p>
          </div>
          <p className="font-poppins tracking-[0] leading-34 text-lg flex justify-start w-[50%]">
            <span className='text-redish font-bold'>JANNAT TUMPA</span>
            <span className='text-[#808080] font-light ml-2'>- COO, AMERIMAR ENTERPRISES, INC.</span>
          </p>
        </div>
      </div>
    </>
  );
};

export default FeedBack;