import React from 'react';
import './Card.css'; // Import the CSS file for the Card component

const Card = ({ imageSrc }) => {
  return (
    <div className="relative flex m-[0.5%] overflow-hidden imageCont">
      <img src={imageSrc} className="w-full h-full object-cover" alt="Card" />
      <div className="popup absolute bottom-0 left-0 w-full h-full flex items-center justify-center flex-col bg-redish bg-opacity-90 text-white p-5 text-center transition-all duration-500 ease-in-out transform translate-y-full">
        <img src="../images/popupwebdev.png" alt="Popup" className="w-12 mb-[5%] mx-auto font-poppins" />
        <h3 className="text-2xl mb-[5%]">WEB DEVELOPMENT</h3>
        <p className="text-base mb-[5%]">Morbi sed lacus nec risus finibus feugiat et fermentum nibh. Pellentesque</p>
        <a href='https://www.fylehq.com' target='_blank' className="bg-white text-redish py-2 px-4 flex items-center">
          <span>READ MORE</span>
          <img src="../images/popuparrow.png" alt="Arrow" className="w-[20%] ml-2" />
        </a>
      </div>
    </div>
  );
};

export default Card;